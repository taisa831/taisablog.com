// メモ化

var myFunc = function (param) {
    if (!myFunc.cache[param]) {
        var result = {};
        // ...重たい処理...
        myFunc.cache[param] = result;
    }
};

// キャッシュの記憶領域
myFunc.cache = {};

// -----------------------------------------------------------------------------

var myFunc = function () {

    var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
        result;

    if (!myFunc.cache[cachekey]) {
        result = {};
        // ...重たい処理...
        myFunc.cache[cachekey] = result;
    }
    return myFunc.cache[cachekey];
};

// キャッシュの記憶領域
myFunc.cache = {};