import Reveal from '/reveal.js/dist/reveal.esm.js';
import RevealZoom from '/reveal.js/plugin/zoom/zoom.esm.js';
import RevealNotes from '/reveal.js/plugin/notes/notes.esm.js';
import RevealHighlight from '/reveal.js/plugin/highlight/highlight.esm.js';
import RevealMath from '/reveal.js/plugin/math/math.esm.js';

export function initReveal(options = {}) {
    const deck = new Reveal({
        width: 1920,
        height: 1080,
        hash: true,
        center: false,
        progress: true,
        slideNumber: true,
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        backgroundTransition: 'slide', // none/fade/slide/convex/concave/zoom
        transitionSpeed: 'default', // default/fast/slow
        plugins: [ RevealZoom, RevealNotes, RevealHighlight, RevealMath.KaTeX ],
        history: true,
        pdfSeparateFragments: false,
        fragments: true,
        fragmentInURL: true,
        katex: {
            version: 'latest',
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
        }
    });

    // Expose Reveal deck on window for tooling (e.g., DeckTape) that expects a global
    // reference to the Reveal API when using ESM builds.
    if (typeof window !== 'undefined') {
        window.Reveal = deck;
    }

    deck.initialize().then(() => {
        console.log('Reveal.js initialized with options:', options);

    });

    return deck;
}