KASIKA.lib = (function(){
    return {
        init: function() {
            KASIKA.lib.btmOpenFlg = false;
            KASIKA.lib.openFlag = false;
        },
        appendWidgetMarkup: function(html) {
            $('script[data-slide]').first().removeAttr('data-slide').before(html);
        },
        panelSwitch: function() {
            var slide = $('#slide');
            var openBtn = $('#open-btn img');

            //閉じる
            if (KASIKA.lib.openFlag == true ) {
                slide.stop().animate({'width' : '200px','height' : '30px'}, 500);
                openBtn.show(); //開くボタンにする
            }
            //開く
            else if (KASIKA.lib.openFlag == false) {
                slide.stop().animate({'width' : '400px','height' : '200px'}, 500);
                openBtn.hide(); //閉じるボタンにする
            }
        },
        scroll: function() {
            var bottomPos = $(document).height() - $(window).height();
            $(window).scroll(function () {
                if (!KASIKA.lib.btnOpenFlag) {
                    if ($(this).scrollTop() >= bottomPos) {
                        if (KASIKA.lib.openFlag == false) {
                            KASIKA.lib.panelSwitch();
                            KASIKA.lib.openFlag = true;
                        }
                    } else {
                        if (KASIKA.lib.openFlag) {
                            KASIKA.lib.panelSwitch();
                            KASIKA.lib.openFlag = false;
                        }
                    }
                }
            });
        },
    }
})();

$(function() {

    // URLマッチチェック
    if (document.URL.match("/thirdpartyjs")) {
        // markupセット
        KASIKA.lib.appendWidgetMarkup("" +
            "<div id='slide'>" +
            "<div id='slide-in'>" +
            "<div id='open-btn'>" +
            "<img src='/taisablog/2018/thirdpartyjs/src/open-btn.gif' width='20' height='20' />" +
            "</div>" +
            "<h3>開くかも</h3>" +
            "<div id='slide-contents'><p>これは開くかもしれない。開きましたか？</p></div>" +
            "</div>" +
            "</div>"
        );

        // 初期化
        KASIKA.lib.init();

        // 開くボタンクリックした場合
        $('#open-btn').click(function(){
            KASIKA.lib.panelSwitch();
            KASIKA.lib.openFlag = !KASIKA.lib.openFlag;
            KASIKA.lib.btnOpenFlag = true;
        });

        // スクロールイベント
        KASIKA.lib.scroll();
    }
});
