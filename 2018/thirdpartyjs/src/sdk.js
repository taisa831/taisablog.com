var KASIKALibUrl = 'http://localhost:63342/taisablog/2018/thirdpartyjs/src/lib.js';
var jQueryUrl = 'https://code.jquery.com/jquery-2.2.4.min.js';
var styleCssUrl = 'http://localhost:63342/taisablog/2018/thirdpartyjs/src/style.css';

KASIKA = (function(){
    return {
        loadScript: function(url, callback) {
            var script = document.createElement('script');
            script.async = true;
            script.src = url;

            var entry = document.getElementsByTagName('script')[0];
            entry.parentNode.insertBefore(script, entry);

            script.onload = script.onreadystatechange = function() {
                var rdyState = script.readyState;

                if (!rdyState || /complete|loaded/.test(script.readyState)) {
                    callback();
                    script.onload = null;
                    script.onreadystatechange = null;
                }
            };
        },
        loadLibrary: function () {
            var script = document.createElement('script'),
                entry = document.getElementsByTagName('script')[0];
            script.async = true;
            script.src   = KASIKALibUrl;
            entry.parentNode.insertBefore(script, entry);
        },
        loadStyleSheet: function(url) {
            var link = document.createElement('link');

            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = url;

            // Append <link/> tag
            var entry = document.getElementsByTagName('script')[0];
            entry.parentNode.insertBefore(link, entry);
        }
    }
})();

if (typeof jQuery == "undefined") {
    KASIKA.loadScript(jQueryUrl, function() {
        KASIKA.loadStyleSheet(styleCssUrl);
        KASIKA.loadLibrary()
    });
} else {
    KASIKA.loadStyleSheet(styleCssUrl);
    KASIKA.loadLibrary()
}
