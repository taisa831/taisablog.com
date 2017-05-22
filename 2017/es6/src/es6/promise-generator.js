
function getFirstItem() {
    return getUrl("/items").then(items => {
        return getUrl("/items" + items[0].id);
    });
}

// 本体からの呼び出し
getFirstItem().then(item => {
    someProcess(item);
}).catch(e => {
    console.error(e);
});

///////////////////////////////////////////////////////////////////////////

function getAllItems() {
    return getUrl("/items").then(list => {
        return Promise.all(list.map(item => {
            return getUrl("/items/" + item.id);
        }));
    });
}

///////////////////////////////////////////////////////////////////////////

function *getFirstItem() {
    var items = yield getUrl("/items");
    var item = yield getUrl("/items/" + items[0].id);
    return item;
}

var co = require("co");
co(function () {
    try {
        var item = yield getFirstItem();
        someProcess(item);
    } catch (e) {
        console.log(e);
    }
});

///////////////////////////////////////////////////////////////////////////

function wait(time) {
    // 1. Promiseオブジェクトの生成
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 2. resolveすると最初のthenが呼ばれる
            resolve("wait: " + time)
        }, time);
    });
}

// Promiseの実行
// 3. thenで次に実行する処理を登録
wait(1000).then(value => {
    // 4. 1000ミリ秒後に実行される
    console.log(value);
}).then(value => {
    // 5. 上記4のあとすぐ非同期で呼ばれる
    // valueは引き継がれずundefinedになる
    console.log(value);
});

///////////////////////////////////////////////////////////////////////////

function getUrl(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xht.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.statusText);
            } else {
                // エラーの場合rejectを呼ぶ
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = () => {
            // エラーの場合rejectを呼ぶ
            reject(new Error(xhr.statusText))
        };
        xhr.send();
    });
}

getUrl("/items").then(res => {
    // エラーの場合呼ばれない
    var items = JSON.parse(res);
    someProcess(items);
}).catch(e => {
    // エラーの場合だけ呼ばれる
    console.log(e);
});

///////////////////////////////////////////////////////////////////////////

Promise.all([
    getUrl("/foo"), getUrl("/bar")
]).then(res => {
    // "/foo"のレスポンス
    console.log(res[0]);
    // "/bar"のレスポンス
    console.log(res[1]);
}).catch(e => {
    // どちらかでエラーが発生したら呼ばれる
    console.error(e);
});

///////////////////////////////////////////////////////////////////////////

// Generator

// Generator関数の定義
function *generator1() {
    // yieldでイテレータの区切りを指定
    yield 1;
    yield 2;
    return 3;
}

// イテレータの生成
var g = generator1();
// 1つ目のyieldまで実行
console.log(g.next()); // {value: 1, done: false}
// 2つ目のyieldまで実行
console.log(g.next()); // {value: 2, done: false}
// 関数の最後まで実行
console.log(g.next()); // {value: 3, done: true}

// for/ofと組み合わせる
for (let n of generator1()) {
    console.log(n);
}
// 1
// 2

///////////////////////////////////////////////////////////////////////////

// ロギング用関数
function msg(str) {
    console.log("msg:", str);
    return str;
}

function *generator2() {
    console.log("start");
    // ret1はnext()から値を受け取る
    var ret1 = yield msg("yield 1");
    console.log("ret1:", ret1);
    var ret2 = yield msg("yield 2");
    console.log("ret2:", ret2);
    return "end";
}

var g = generator2();
// 最初のyieldまで進める
var next1 = g.next();
// start
// "msg: yield 1"
console.log(next1);
// {value: "yield 1", done: false}
// yieldに値を渡す
var next2 = g.next("next 1");
// "ret1: next 1"
// "msg: yield 2"
console.log(next2);
// {value: "yield 2", done: false}
var next3 = g.next("next 2");
// "ret2: next 2"
console.log(next3);
// {value: "end", done: true}

///////////////////////////////////////////////////////////////////////////

// 本体のフロー
asyncflow(function *() {
    // yieldにPromiseを渡す
    var items = yield getUrl("/items");
    var id = items[0].id;
    var item = yield getUrl("/items/" + id);
    console.log(item);
});

// フロー制御関数
function asyncflow(generator) {
    var g = generator();
    var next = value => {
        // Promiseを受け取る
        var result = g.next(value);
        if (!result.done) {
            var promise = result.value;
            promise.then(value => {
                // Promiseが完了したらnext関数に結果を返す
                next(value);
            });
        }
    };
    next();
}

//- 本体のフロー自体をジェネレータ関数をして書き、フローの制御はasyncflowという関数に任せている
//- asyncflowはGeneratorのnextを呼び、本体のフローから非同期処理のPromiseをyield経由でもらう
//- そのPromiseが完了したら、thenのコールバックで次のnextを結果を渡しつつ呼ぶ