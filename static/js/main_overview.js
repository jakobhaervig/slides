Reveal.initialize({
    width: 1920, // 1460
    height: 1080, // 1050
    margin: 0.06,
    minScale: 0.2,
    maxScale: 2.0,
    center: true,
    history: true,
    pdfSeparateFragments: false,
    fragments: true,
    fragmentInURL: true,
    plugins: [
        RevealMarkdown,
        RevealMath.KaTeX,
        RevealSearch,
        RevealHighlight,
    ],
    katex: {
        version: 'latest',
        delimiters: [{
                left: '$$',
                right: '$$',
                display: true
            },
            {
                left: '$',
                right: '$',
                display: false
            },
            {
                left: '\\(',
                right: '\\)',
                display: false
            },
            {
                left: '\\[',
                right: '\\]',
                display: true
            }
        ],
        
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }
    })

    window.addEventListener("load", function() {
        revealDiv = document.querySelector("body div.reveal")
        footer = document.getElementById("footer");
        revealDiv.appendChild(footer);
    });