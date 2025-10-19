import * as jsyaml from 'https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.mjs';

export async function generateFrontpage() {
    const dirPath = window.location.pathname.replace(/\/[^\/]*$/, '/'); // current directory
    const pageYamlFile = `${dirPath}meta.yaml`;
    const fallbackYamlFile = '/custom/js/meta-fallback.yaml';

    let fallbackData = {};
    let pageData = {};
    let data = {};

    async function loadYaml(file) {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Could not load ${file}`);
        const text = await res.text();
        return jsyaml.load(text);
    }

    // Load fallback metadata first
    try {
        fallbackData = await loadYaml(fallbackYamlFile);
    } catch {
        console.warn(`Could not load fallback YAML: ${fallbackYamlFile}`);
        fallbackData = {};
    }

    // Load page-specific metadata
    try {
        pageData = await loadYaml(pageYamlFile);
    } catch {
        console.warn(`No page-specific YAML found: ${pageYamlFile}`);
        pageData = {};
    }

    // Merge: pageData overwrites fallbackData
    data = { ...fallbackData, ...pageData };

    // --- Create first slide ---
    const firstSlide = document.createElement('section');
    firstSlide.className = 'first-slide';
    firstSlide.innerHTML = `
        <h3 style="margin-bottom: 0;"><b>${data.subject || 'Subject'}</b></h3>
        <h2 style="margin-top: 0;">${data.title || 'Presentation Title'}</h2>
        ${data.author ? `<h3 style="margin-top: 40px; margin-bottom: 0;"><em>Lecturer: ${data.author}</em></h3>` : ''}
        ${data.slidesBy ? `<h5 style="margin-top: 0;"><em>${data.slidesBy}</em></h5>` : ''}
    `;

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.insertBefore(firstSlide, slidesContainer.firstChild);

    // --- Fetch GitHub contributors ---
    try {
        const repoMatch = window.location.href.match(/https:\/\/([^\/]+)\/([^\/]+)\//);
        if (!repoMatch) throw new Error('Cannot detect GitHub repo from URL');

        const owner = repoMatch[1];
        const repo = repoMatch[2];

        let path = window.location.pathname.replace(/^\//, '').replace(/\/?$/, '');
        const branch = 'main'; // adjust if needed

        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?path=${path}&per_page=100`;

        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const commits = await res.json();

        const contributorsMap = new Map();
        commits.forEach(c => {
            if (c.author) {
                contributorsMap.set(c.author.login, {
                    name: c.commit.author.name,
                    login: c.author.login,
                    avatar: c.author.avatar_url,
                    url: c.author.html_url
                });
            }
        });

        if (contributorsMap.size > 0) {
            const wrapper = document.createElement('div');
            wrapper.className = 'contributors';
            wrapper.style.display = 'flex';
            wrapper.style.flexWrap = 'wrap';
            wrapper.style.marginTop = '20px';
            wrapper.style.gap = '15px';
            wrapper.style.justifyContent = 'center';

            contributorsMap.forEach(c => {
                const card = document.createElement('div');
                card.style.textAlign = 'center';
                card.style.width = '100px';

                const img = document.createElement('img');
                img.src = c.avatar;
                img.alt = c.name;
                img.style.width = '80px';
                img.style.height = '80px';
                img.style.borderRadius = '50%';
                img.style.objectFit = 'cover';
                img.style.display = 'block';
                img.style.margin = '0 auto 5px auto';

                const name = document.createElement('div');
                name.textContent = c.name;
                name.style.fontSize = '0.9em';
                name.style.fontWeight = 'bold';

                const login = document.createElement('div');
                login.textContent = c.login;
                login.style.fontSize = '0.8em';
                login.style.fontStyle = 'italic';

                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(login);
                wrapper.appendChild(card);
            });

            firstSlide.appendChild(wrapper);
        }

    } catch (err) {
        console.warn('Could not fetch GitHub contributors:', err);
    }
}
