// ==UserScript==
// @name        Markdown Link
// @description Copy title and url as makrdown link
// @namespace   https://jma.dev/
// @version     0.1.0
// @author      imjma
// @match       *://*.*
// @inject-into content
// ==/UserScript==
(function() {
    'use strict';
    var copyText = (content) => {
        const input = document.createElement('textarea');

        input.setAttribute('readonly', 'readonly');
        input.setAttribute('value', content);
        input.innerHTML = (content);
        input.setAttribute('style', 'position: fixed; top:0; left:0;z-index: 9999');
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, input.value.length);

        let ok = false;
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            ok = true;
        }
        document.body.removeChild(input);

        if (!ok) {
            alert("copy markdown link failed");
        }
    }
    var getTitle = () => {
        return document.title;
    }
    window.addEventListener('keydown', (e) => {
        if (!e.altKey && !e.shiftKey && e.ctrlKey && e.key == 't') {
            copyText(`[${getTitle()}](${location.href})`);
        }
    })
})();
