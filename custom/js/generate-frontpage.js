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

  // Load metadata
  fallbackData = await loadYaml(fallbackFile);
  pageData = await loadYaml(yamlFile);
  data = { ...fallbackData, ...pageData };

  // Create frontpage slide
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

  // Insert at top of .slides
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.insertBefore(firstSlide, slidesContainer.firstChild);

  // Try to load precomputed contributor JSON
  const htmlFile = window.location.pathname.split('/').pop();
  const contributorFile = `/contributors/${htmlFile}.json`;

  // <-- ensure this flag exists so we don't reference an undefined variable
  let contributorSectionAdded = false;

  try {
    const res = await fetch(contributorFile);
    if (!res.ok) throw new Error('No contributors file found');
    const contributors = await res.json();

    if (Array.isArray(contributors) && contributors.length > 0) {
      contributorSectionAdded = true;

      const container = document.createElement('div');
      container.style.marginTop = '40px';
      container.style.display = 'flex';
      container.style.flexWrap = 'wrap';
      container.style.gap = '12px';
      container.style.alignItems = 'center';

      // optional horizontal rule line across the slide
      const line = document.createElement('div');
      line.style.flexBasis = '100%';
      line.style.height = '1px';
      line.style.backgroundColor = '#ccc';
      line.style.marginBottom = '10px';
      container.appendChild(line);

      contributors.forEach(c => {
        const card = document.createElement('div');
        card.style.textAlign = 'center';
        card.style.width = '60px';

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
        container.appendChild(card);
      });

      firstSlide.appendChild(container);
    }
  } catch (e) {
    // silently continue if no JSON or fetch error — avoid breaking slides
    console.warn('No contributor JSON found — skipping contributor section', e);
  }

    fallbackData = await loadYaml(fallbackFile);
  pageData = await loadYaml(yamlFile);
  data = { ...fallbackData, ...pageData };
  // Add a small call-to-action link (always visible)
  const contributeNote = document.createElement('p');
  contributeNote.style.marginTop = contributorSectionAdded ? '15px' : '40px';
  contributeNote.style.fontSize = '0.9em';
  contributeNote.style.textAlign = 'left';
  contributeNote.innerHTML = `
    Thanks for all slide contributions 🙏 <br>
    <a href="${data['contributor-page']}" target="_blank" rel="noopener">Learn how to contribute</a>.
  `;

  // append the note so it actually shows up
  firstSlide.appendChild(contributeNote);
}
