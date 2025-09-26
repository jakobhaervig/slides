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
    center: false,
    progress: true,
    slideNumber: true,
    transition: 'fade', // none/fade/slide/convex/concave/zoom
    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
    transitionSpeed: 'default', // default/fast/slow
    plugins: [Markdown, Highlight, Math.KaTeX, Notes, Search, Zoom, RevealChalkboard, RevealCustomControls],
    history: true,
    pdfSeparateFragments: false,
    fragments: true,
    fragmentInURL: true,
    katex: {
        trust: true,
        strict: false,
        version: 'latest',
        delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
        
        ],
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    },
  	chalkboard: { 
		src: null,
		readOnly: undefined, 
		toggleNotesButton: { left: "30px", bottom: "30px", top: "auto", right: "auto" },
		transition: 800,
		theme: "whiteboard",
		// configuration options for notes canvas and chalkboard
		color: [ 'rgba(0,0,255,1)', 'rgba(255,255,255,0.5)' ],
		background: [ 'rgba(127, 127, 127, 0)' , 'reveal.js-plugins/chalkboard/img/blackboard.png' ],
		pen:  [ 'url(reveal.js-plugins/chalkboard/img/boardmarker.png), auto', 'url(reveal.js-plugins/chalkboard/img/chalk.png), auto' ],
	},
});