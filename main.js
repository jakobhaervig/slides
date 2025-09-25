// main.js
import Reveal from './reveal.js/dist/reveal.esm.js';

// Import plugins
import Markdown from './reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from './reveal.js/plugin/highlight/highlight.esm.js';
import Math from './reveal.js/plugin/math/math.esm.js';
import Notes from './reveal.js/plugin/notes/notes.esm.js';
import Search from './reveal.js/plugin/search/search.esm.js';
import Zoom from './reveal.js/plugin/zoom/zoom.esm.js';

// Initialize Reveal.js
Reveal.initialize({
    width: 1920,
    height: 1080,
    hash: true,
    slideNumber: true,
    transition: 'slide',
    plugins: [Markdown, Highlight, Math, Notes, Search, Zoom],
    history: true,
    pdfSeparateFragments: false,
    fragments: true,
    fragmentInURL: true,
});