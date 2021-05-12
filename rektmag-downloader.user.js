// ==UserScript==
// @name         RektMag downloader
// @namespace    http://jma.dev/
// @version      0.1.0
// @description  Download RektMag Post Images 
// @author       imjma
// @match        *://*.rektmag.net/*
// @icon         https://www.google.com/s2/favicons?domain=rektmag.net
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        GM_download
// ==/UserScript==

(function($) {
    'use strict';

    var saveItems = () => {
        var images = $('.sqs-gallery').find(".thumb-image");
        if (images.length) {
            for (let i = 0; i < images.length; i++) {
                if (images[i].dataset.type == "image") {
                    direct_download(images[i].dataset.src);
                }
            }
        }
    }
    window.addEventListener('keydown', (e) => {
        if (!e.altKey && e.shiftKey && e.ctrlKey && e.code == 'KeyF') {
            saveItems();
        }
    })
})(jQuery);

/* dynamic download link */
function direct_download(url) {
    var filename = url.match('[^/]*$')[0];
    var arg = { url: url, name: filename };
    GM_download(arg);
}

