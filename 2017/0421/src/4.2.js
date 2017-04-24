// 4.2 コールバック

// コールバックパターン
function writeCode(callback) {
    // 何か処理する...
    callback();
}

function introduceBugs() {
    // バグを作る
}

writeCode(introduceBugs);

var findNodes = function () {
    var i = 10000, // 果てしないループ
        nodes = [], // ここに結果を格納
        found; // 次のノード
    while (i) {
        i -= 1;
        // 複雑なロジック
        nodes.push(found);
    }
    return nodes;
};

var hide = function (nodes) {
    var i = 0, max = nodes.length;
    for (; i < max; i += 1) {
        nodes[i].style.display = "none";
    }
};

// この関数を実行
hide(findNodes());

var findNodes = function (callback) {
    var i = 10000,
        nodes = [],
        found;

    // callbackが呼び出しできるか検査
    if (typeof callback !== "function") {
        callback = false;
    }

    while (i) {
        i -= 1;

        // 複雑なロジック

        // ここでコールバック
        if (callback) {
            callback(found);
        }

        nodes.push(found);
    }
    return nodes;
};

// コールバック関数
var hide = function (node) {
    node.style.display = "none";
};

// ノードを見つけたら隠す
findNodes(hide);

var thePlotThinkens = function () {
    console.log('500ミリ秒後...');
};

setTimeout(thePlotThinkens, 500);

var myapp = {};
myapp.color = "green";
myapp.paint = function (node) {
    node.style.color = this.color;
};

var findNodes = function (callback) {
    // ...
    if (typeof callback === "function") {
        callback(found);
    }
    // ...
};