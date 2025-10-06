window.onload = function() {
    Reveal.initialize({
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
};