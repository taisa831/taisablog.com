ECMAScript 6を触ってみる -非同期処理 PromiseとGeneratorによるフロー制御-

[前回](http://taisablog.com/archives/407)に引き続きJSの速習コースを実践。今回は「WEB+DB PRESS Vol.87 第1特集 第5章-簡潔で柔軟な非同期処理-」を速習する。

## PromiseとGeneratorによるフロー制御

- [これまでの非同期処理と新たな非同期処理](#pre)
- [Promise](#promise)
- [Generator](#generator)

## <a name="pre">これまでの非同期処理と新たな非同期処理</a>

従来の非同期処理
```
function getFirstItem(callback) {
    getUrl("/item", function (err, items) {
        // 最初のリクエストのエラー処理
        if (err) {
            return callback(err);
        }
        // 先頭のアイテムの詳細情報の取得
        getUrl("/item" + items[0].id, function (err, detail) {
            // 2つ目のリクエストのエラー処理
            if (err) {
                return callback(err);
            }
            // 成功
            callback(null, detail);
        });
    });
}

getFirstItem(function (err, item) {
    // エラー処理
    if (err) {
        console.error(err);
    }
    // 本来やりたかった処理
    someProcess(item);
});
```

上記コードの問題点は、2つの非同期処理が直列に実行されているにもかかわらず、コードがどんどんネストしていく為、フローが複雑になる。これによりエラー処理が複数の場所で必要になったり、callbackがすべての条件でもれなく実行されているか一見して把握することが難しくなる。

### Promiseによる解決

Promiseによる非同期処理
```
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
```

- ネストの改装が浅くなる
- エラー処理のコードが減って見通しがよくなる
- 以下のような取得したアイテムリストの全アイテムの詳細情報を並列に取得する処理も簡単に書ける

Promise.allを使った非同期処理
```
function getAllItems() {
    return getUrl("/items").then(list => {
        return Promise.all(list.map(item => {
            return getUrl("/items/" + item.id);
        }));
    });
}
```

### Generatorによるさらなる改善

Generatorを組み合わせることで同期処理のようなスタイルで非同期処理を書ける

```
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
```

Generatorをベースにしたライブラリcoを使うとネストとコールバックが消え、getUrlを同期処理関数のように扱うことができる

## <a name="promise">Promise</a>

Promiseは非同期処理を抽象化する統一的なインターフェース

### Promiseの基本

```
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
```

- まずPromiseオブジェクトをPromiseコンストラクタで生成する
- コンストラクタ引数にはresolveとrejectという2つの関数が渡される
- resolveを実行するとPromiseオブジェクトにthenメソッドで登録したコールバック関数が実行される
- resolveに指定した引数はコールバック関数の引数として渡される
- thenメソッドは新たなPromiseオブジェクトを返すので、メソッドチェインにより連続して複数のコールバックを登録できる

### Promiseのエラー処理

```
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
```

- XMLHttpRequestで何らかのエラーが発生した場合、コンストラクタのコールバック関数の引数であるrejectを呼ぶ
- これによりthenメソッドで登録した正常系のコールバックは呼ばれず、catchメソッドで登録したコールバックが呼ばれる

### すべての非同期処理が終わるまで待つ

Promise.allを使えば複数のPromiseオブジェクトを配列で受けて、全てが完了したらコールバック関数を呼ぶPromiseオブジェクトを生成できる

```
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
```

- /fooと/barに同時並行でリクエストを投げる
- 両方のレスポンスが完了したら次のコールバック関数が呼ばれる
- 複数のPromiseオブジェクトのうちどれか1つでも完了したらコールバックを呼ぶPromise.raceというスタティックメソッドもある

## <a name="generator">Generator</a>

停止したり再開したりできる特殊な関数。またIterableインターフェースを実装していて、イテレータを生成できる関数でもある

### Generatorの基本

```
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
```

- ジェネレータ関数はfunctionキーワードと関数名の間に*を付けて定義する
- yieldによってイテレーションの区切りを指定する
- ジェネレータ関数を実行するとイテレータが返る
- このイテレータのnextメソッドを呼ぶと、ジェネレータ関数の最初のyieldまで実行され、yield式の結果をvalueとして返す
- ジェネレータ関数が生成するイテレータはIterableなので、for/ofなどIterableを期待する場面で利用できる

### yieldに値を渡す

nextメソッドに値を渡すことでジェネレータ関数の外側から内側に値を渡すことができる

```
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
```

- 変数ret1にyield式を代入している
- このyield式の評価結果としてnext("next 1")の引数「next 1」が返る為、ret1に文字列「next1」が代入される
- 最初のnextを読んだ時点でyield式に与えた代入式msg("yield 1")が実行される
- 停止するのはyield式を変数ret1に代入する手前の時点

### 非同期処理との組み合わせ

Generatorはyieldとnextによって関数を停止・再開できたり、関数の呼び出し先と呼び出し元で値を交換できたりする

```
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
```

- 本体のフロー自体をジェネレータ関数をして書き、フローの制御はasyncflowという関数に任せている
- asyncflowはGeneratorのnextを呼び、本体のフローから非同期処理のPromiseをyield経由でもらう
- そのPromiseが完了したら、thenのコールバックで次のnextを結果を渡しつつ呼ぶ