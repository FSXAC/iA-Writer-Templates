// Author: @jhermsmeier
; (function () {
    function $$(selector, context) {
        return (context || document).querySelectorAll(selector)
    }

    // Run highlight.js on load
    hljs.initHighlightingOnLoad()

    // Re-highlight code
    window.addEventListener('DOMContentLoaded', function () {
        document.body.addEventListener('ia-writer-change', () => {
            let blocks = $$('pre > code')
            for (let i = 0; i < blocks.length; i++) {
                try { hljs.highlightBlock(blocks[i]) } catch (error) { }
            }
        })
    })
})()