import * as jsyaml from 'https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.mjs';

export async function generateFrontpage() {
    const dirPath = window.location.pathname.replace(/\/[^\/]*$/, '/'); // current directory
    const yamlFile = `${dirPath}meta.yaml`; // page-specific metadata
    const fallbackFile = '/custom/js/meta-fallback.yaml'; // general metadata

    let fallbackData = {};
    let pageData = {};
    let data = {};

    async function loadYaml(file) {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Could not load ${file}`);
        const text = await res.text();
        return jsyaml.load(text);
    }

    // Load fallback first
    try { fallbackData = await loadYaml(fallbackFile); } catch { fallbackData = {}; }
    try { pageData = await loadYaml(yamlFile); } catch { pageData = {}; }

    // Merge: pageData overwrites fallbackData
    data = { ...fallbackData, ...pageData };

    // --- Create first slide ---
    const firstSlide = document.createElement('section');
    firstSlide.className = 'first-slide';

    // Top content (headings)
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

    // --- GitHub contributors ---
    if (!data.githubOwner || !data.githubRepo) return;

    try {
        const owner = data.githubOwner;
        const repo = data.githubRepo;

        // Compute file path relative to repo root
        let path = window.location.pathname.replace(/^\/+/, '');
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?path=${path}&per_page=100`;

        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const commits = await res.json();

        const contributorsMap = new Map();
        commits.forEach(c => {
            const key = c.author?.login || c.commit.author.name;
            if (!contributorsMap.has(key)) {
                contributorsMap.set(key, {
                    name: c.commit.author.name,
                    avatar: c.author?.avatar_url || 'https://via.placeholder.com/80',
                    commits: 0,
                    githubUrl: c.author?.html_url || null
                });
            }
            contributorsMap.get(key).commits++;
        });

        const contributors = Array.from(contributorsMap.values())
            .sort((a, b) => b.commits - a.commits);

        if (contributors.length > 0) {
            // Append contributors at the end of the slide content
            const contributorsDiv = document.createElement('div');
            contributorsDiv.style.marginTop = '650px'; // spacing from top content
            contributorsDiv.style.display = 'flex';
            contributorsDiv.style.flexWrap = 'wrap';
            contributorsDiv.style.gap = '10px';
            contributorsDiv.style.alignItems = 'center';

            // Optional header
            const thanks = document.createElement('h5');
            thanks.textContent = 'Thanks to all slide contributors 🙏';
            contributorsDiv.appendChild(thanks);

            // Optional "become contributor" link
            if (data['contributor-page']) {
                const becomingContributor = document.createElement('h5');
                becomingContributor.innerHTML = `Suggest improvements/changes to <a href="${data['contributor-page']}">become a contributor</a>!`;
                contributorsDiv.appendChild(becomingContributor);
            }

            const lineBreak = document.createElement('div');
            lineBreak.style.flexBasis = '100%';
            lineBreak.style.height = '0';
            contributorsDiv.appendChild(lineBreak);

            // Contributor cards
            contributors.forEach(c => {
                const card = document.createElement('div');
                card.style.textAlign = 'center';
                card.style.width = '60px';
                card.style.flex = '0 1 auto';

                const img = document.createElement('img');
                img.src = c.avatar;
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

                contributorsDiv.appendChild(card);
            });

            firstSlide.appendChild(contributorsDiv);
        }
    } catch (err) {
        console.warn('Could not fetch GitHub contributors:', err);
    }
}
