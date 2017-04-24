// 初期化時分岐

// 変更前
var utils = {
    addListener: function (el, type, fn) {
        if (typeof window.addEventListener === 'function') {
            el.addEventListener(type, fn, false);
        } else if (typeof document.attachEvent === 'function') { // IE
            el.attachEvent('on' + type, fn);
        } else { // order browsers
            el['on' + type] = fn
        }
    },
    removeListener: function (el, type, fn) {
        // 同様の処理
    }
};


// 変更後
// インターフェース
var utils = {
    addListener: null,
    removeListener: null,
};

// 実装
if (typeof window.addEventListener === 'function') {
    utils.addListener = function (el, type, fn) {
        el.addEventListener(type, fn, false);
    };
    utils.removeListener = function (el, type, fn) {
        el.removeEventListener(type, fn, false);
    }
} else if (typeof document.attachEvent === 'function') { // IE
    utils.addListener = function (el, type, fn) {
        el.addEventListener('on' + type, fn);
    };
    utils.removeListener = function (el, type, fn) {
        el.removeEventListener('on' + type, fn);
    };
} else { //その他のブラウザ
    utils.addListener = function (el, type, fn) {
        el['on' + type] = fn;
    };
    utils.removeListener = function (el, type, fn) {
        el['on' + type] = null;
    }
}
