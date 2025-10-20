import * as jsyaml from 'https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.mjs';

export async function generateFrontpage() {
    const dirPath = window.location.pathname.replace(/\/[^\/]*$/, '/'); // current directory
    const yamlFile = `${dirPath}meta.yaml`;
    const fallbackFile = '/custom/js/meta-fallback.yaml';

    let fallbackData = {};
    let pageData = {};
    let data = {};

    async function loadYaml(file) {
        try {
            const res = await fetch(file);
            if (!res.ok) throw new Error(`Could not load ${file}`);
            const text = await res.text();
            return jsyaml.load(text);
        } catch {
            return {};
        }
    }

    fallbackData = await loadYaml(fallbackFile);
    pageData = await loadYaml(yamlFile);
    data = { ...fallbackData, ...pageData };

    // --- Create first slide ---
    const firstSlide = document.createElement('section');
    firstSlide.className = 'first-slide';

    const topContent = document.createElement('div');
    topContent.innerHTML = `
        <h3 style="margin-bottom: 0;"><b>${data.subject || 'Subject'}</b></h3>
        <h2 style="margin-top: 0;">${data.title || 'Presentation Title'}</h2>
        ${data.name ? `<h3 style="margin-top: 40px; margin-bottom: 0;"><em>${data.name}</em></h3>` : ''}
        ${data.slidesBy ? `<h5 style="margin-top: 0;"><em>${data.slidesBy}</em></h5>` : ''}
    `;
    firstSlide.appendChild(topContent);

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.insertBefore(firstSlide, slidesContainer.firstChild);

    // --- Contributors (from precomputed JSON) ---
    const contributorsPath = `/contributors/${window.location.pathname.split('/').pop()}.json`;

    try {
        const res = await fetch(contributorsPath);
        if (!res.ok) throw new Error('No contributors JSON found');

        const contributors = await res.json();
        if (!contributors.length) return; // empty array, nothing to show

        firstSlide.style.position = 'relative';

        const grid = document.createElement('div');
        grid.style.position = 'absolute';
        grid.style.bottom = '20px';
        grid.style.left = '20px';
        grid.style.display = 'flex';
        grid.style.flexWrap = 'wrap';
        grid.style.gap = '10px';
        grid.style.alignItems = 'center';
        grid.style.zIndex = '10';

        const header = document.createElement('h5');
        header.textContent = 'Thanks to all slide contributors 🙏';
        grid.appendChild(header);

        contributors.forEach(c => {
            const card = document.createElement('div');
            card.style.textAlign = 'center';
            card.style.width = '60px';
            card.style.flex = '0 1 auto';

            const img = document.createElement('img');
            img.src = c.avatar || 'https://via.placeholder.com/80';
            img.alt = c.name;
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            img.style.display = 'block';
            img.style.margin = '0 auto 3px auto';

            if (c.githubUrl) {
                const link = document.createElement('a');
                link.href = c.githubUrl;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.appendChild(img);
                card.appendChild(link);
            } else {
                card.appendChild(img);
            }

            const nameDiv = document.createElement('div');
            nameDiv.textContent = c.name;
            nameDiv.style.fontSize = '0.7em';
            nameDiv.style.fontWeight = 'bold';
            nameDiv.style.textAlign = 'center';
            card.appendChild(nameDiv);

            grid.appendChild(card);
        });

        firstSlide.appendChild(grid);

    } catch {
        // No JSON or fetch error: simply skip contributor section
        console.warn('No contributor file found, skipping contributors display.');
    }
}
