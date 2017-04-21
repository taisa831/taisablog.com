「JavaScriptパターン」第4章-関数-が面白かったからまとめながら写経した

タイトルにあるようにとても面白かったというのと、JavaScriptパターンの輪読会で第4章「関数」の後半を担当したのでその記録も兼ねて内容まとめながら写経した。

[amazonjs asin="4873114888" locale="JP" title="JavaScriptパターン ―優れたアプリケーションのための作法"]

## はじめに

<blockquote>
JavaScriptでは関数がさまざまな目的で使われるので、JavaScriptプログラマにとって関数の取得は必須です。他の言語なら特別な構文があるような処理でもJavaScriptでは関数で処理されます。

<a href="https://www.amazon.co.jp/JavaScript%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3-%E2%80%95%E5%84%AA%E3%82%8C%E3%81%9F%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E4%BD%9C%E6%B3%95-Stoyan-Stefanov/dp/4873114888?SubscriptionId=AKIAJPATVFHYPKSNTR4A&amp;tag=joghmasami-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=4873114888" title="JavaScriptパターン ―優れたアプリケーションのための作法" target="_blank">JavaScriptパターン ―優れたアプリケーションのための作法</a>
</blockquote>

<blockquote>
JavaScriptで最もすばらしいのは、関数の実装方法である。

<a href="https://www.amazon.co.jp/JavaScript-Parts-%E2%80%95%E3%80%8C%E8%89%AF%E3%81%84%E3%83%91%E3%83%BC%E3%83%84%E3%80%8D%E3%81%AB%E3%82%88%E3%82%8B%E3%83%99%E3%82%B9%E3%83%88%E3%83%97%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%82%B9-Douglas-Crockford/dp/4873113911?SubscriptionId=AKIAJPATVFHYPKSNTR4A&amp;tag=joghmasami-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=4873113911" title="JavaScript: The Good Parts ―「良いパーツ」によるベストプラクティス" target="_blank">JavaScript: The Good Parts ―「良いパーツ」によるベストプラクティス</a>
</blockquote>

上記にあるようにJavaScriptは関数にいろんな構文が集約されていて関数の理解は必須だった。これまでJavaScript辛いなって思いながら今までノリでやってきたけど、この本を読んでJavaScript面白いわ〜ってなった。

## 4.1 背景

JavaScriptの関数には2つの大きな特徴がある

1. 第一級オブジェクト
2. スコープを提供する

> 第一級オブジェクト（ファーストクラスオブジェクト、first-class object）は、あるプログラミング言語において、たとえば生成、代入、演算、（引数・戻り値としての）受け渡しといったその言語における基本的な操作を制限なしに使用できる対象のことである。
>
> [第一級オブジェクト - Wikipedia](https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88)

関数とは次のオブジェクトのことを指す

- プログラムの実行時に動的に作成できる
- 変数に代入できる、他の変数にコピーされた関数への参照を持てる、拡張できる、いくつかの例外状況を除いて削除できる
- 他の関数に引数として渡せる、他の関数の戻り値にできる
- 独自のプロパティとメソッドを持てる

**スコープを提供するとは**

- JavaScriptには波括弧を使ったローカルスコープはない（言い換えるとブロックはスコープを作らない）
- JavaScriptにあるのは関数スコープだけ
- ifの条件部あるいはforやwhileのループの内部でvarを使って変数を定義しても、その変数はそれらの内部で゙ローカルな変数にはならない（その変数は関数の中でのみローカル）
- 関数で囲んでなければその変数はグローバル変数になる

### 4.1.1 用語の整理

名前付き関数式
```
var add = function add(a, b) {
    return a + b;
};
```

関数式（無名関数）
```
var add = function (a, b) {
    return a + b;
};
```

関数宣言
```
function foo(a, b) {
    return a + b
}
```

### 4.1.2 宣言と式：名前と巻き上げ

構文上の制約で宣言が使えない時には関数式を使う

これは関数式
引数として関数callMeに渡している
```
callMe(function () {

});
```

これは名前付き関数式
```
callMe(function me(){
    // 名前付き関数式
    // 名前は me
});
```

これも関数式
```
var myobject = {
    say: function () {
        // 関数式
    }
};
```

関数宣言で定義されたものは変数やプロパティに代入することができず、関数呼び出しのときのパラメータとして現れることもない。

```
// グローバルスコープ
function foo() {}

function local() {
    // ローカルスコープ
    function bar() {}
    return bar;
}
```

### 4.1.3 関数のnameプロパティ

読み取り専用のnameプロパティが利用できる
※関数宣言パターンではと記載してあるけど今は名前付き関数式でもnameは取得できるみたい

```
// 関数のnameプロパティ
function foo() {} // 関数宣言
var bar = function () {}; // 名前なし関数式
var baz = function baz() {}; // 名前付き関数式

foo.name; // foo
bar.name; // bar
baz.name; // baz
```

名前付き関数式を使うケースは再帰処理のときなどレアケース

### 4.1.4 関数の巻き上げ

関数宣言と名前付き関数式の振る舞いは関数の巻き上げがあるかどうかの違いがある

```
// グローバル関数
function foo() {
    alert('global foo');
}

function bar() {
    alert('global bar');
}

function hoistMe() {
    console.log(typeof foo); // function
    console.log(typeof bar); // undefined

    foo(); // local foo
    bar(); // TypeError: bas is not a function

    // 関数宣言
    // 変数fooとその実装が巻き上げられる
    function foo() {
        console.log('local foo');
    }

    // 関数式
    // 変数barだけ巻き上げられる
    // 実装は巻き上げられない
    var bar = function () {
        console.log('local bar');
    };
}

hoistMe();
```

- hoistMe()の中のfooとbarは先頭に移動しグローバルにあるfooとbarは上書きされる
- ローカルな関数宣言のfooは仕様のあとで定義されていても巻き上げられて上手く動作する
- ローカルな関数式のbarは宣言だけが巻き上げられて定義は巻き上げられない（コードの実行がbar()に到達するまでbarはundefinedのまま）

## 4.2 コールバックパターン

関数はオブジェクトなので他の関数に引数として渡すことができる

```
// コールバックパターン
function writeCode(callback) {
    // 何か処理する...
    callback();
}

function introduceBugs() {
    // バグを作る
}

writeCode(introduceBugs);
```

- 引数を渡す時括弧がない点に注意
- 括弧があると関数は実行されてしまう
- この関数を実行するタイミングはwiriteCode()に任せる

### 4.2.1 コールバックの例

「コールバックなし」と「コールバックあり」の動作を確認する

**コールバックなし**

<pre>
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
</pre>

findNodes()が返したノードの配列をhide()がループする必要があるからこの実装は非効率

**コールバックあり**

```
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
```

hide()はコードをループする必要がなくなるので実装が簡潔になる

もっと省略して無名コールバックを渡す書き方も可能
```
findNodes(function (node) {
    node.style.display = "block";
});
```

### 4.2.2 コールバックとスコープ

コールバックメソッドが属しているオブジェクトを使う時予期せぬ振る舞いになるので注意が必要。次の例ではmyappというオブジェクトのpaint()メソッドをコールバックとして使う状況を想定する。

```
var myapp = {};
myapp.color = "green";
myapp.paint = function (node) {
    node.style.color = this.color;
}

var findNodes = function (callback) {
    // ...
    if (typeof callback === "function") {
        callback(found);
    }
    // ...
}
```

この場合、findNodes(myapp.paint)の呼び出しはthis.colorが定義されていない為、期待通りに動作しない。findNodes()はグローバル関数なので、オブジェクトthisはグローバルオブジェクトを参照する。この問題は、コールバック関すと一緒にこのコールバックが属しているオブジェクトを渡せば解決する。

```
findNodes(myapp.paint, myapp);

var findNodes = function (callback, callback_obj) {
    //...
    if (typeof callback === "function") {
        callback.call(callback_obj, found);
    }
    //...
}
```

メソッドを文字列で渡すやり方もある

```
findNodes("paint", myapp);

var findNodes = function (callback, callback_obj) {
    if (typeob callback === "string") {
        callback = callback_obj[callback];
    }

    //...
    if (typeof callback === "function") {
        callback.call(callback_obj, found);
    }
    //...
};
```

### 4.2.3 非同期イベントリスナ

```
document.addEventListener("click", console.log, false);
```

- クライアント側でのプログラミングのほとんどはイベント駆動（load、click、keypress、mouseoverなど）
- コールバックを使うと非同期に実行可能

### 4.2.4 タイムアウト

ブラウザのwindowオブジェクトが提供するタイムアウトメソッドは、コールバックパターンの例の1つ

```
var thePlotThinkens = function () {
    console.log('500ミリ秒後...');
};
setTimeout(thePlotThinkens, 500);
```

- 関数thePlotThinkensは変数として渡す（関数へのポインタを渡してるだけ）
- 関数のポインタのかわりに文字列"thePlotThinkens"を渡すのはeval()と同じアンチパターン

## 4.3 関数を返す

関数はオブジェクトなので戻り値として使うことができる

```
var setup = function () {
    alert(1);
    return function () {
        alert(2);
    };
};

var my = setup(); // アラートで1が表示される
my(); // アラートで2が表示される
```

クロージャーを使うとプライベートデータを格納することができる

```
var setup = function () {
    var count = 0;
    return function () {
        return (count += 1);
    };
};

var next = setup();
next(); // 1が返る
next(); // 2
next(); // 3
```

## 4.4 自己定義関数

関数の定義を動的に行い、変数に代入することができる

```
var scareMe = function () {
    alert("Boo!");
    scareMe = function () {
        alert("Double boo!");
    };
};

// 自己定義関数を使う
scareMe(); // Boo!
scareMe(); // Double boo!
```

関数に初期化による準備作業があり、その準備作業の実行を1回きりにする必要があるときに便利

## 4.5 即時関数

関数を定義したらすぐにその関数を実行するための構文

即時関数は次の上の書き方と下の書き方があるがJSLintは上の構文を推奨する

```
// JSLint推奨
(function () {
    alert('watch out!')
}());
```

```
(function () {
    alert('watch out!')
})();
```

```
(function (){
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today = new Date(),
        msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();

    alert(msg);
}()); // Today is Fri, 13
```

- このパターンは初期化のコードの為にスコープ上のサンドボックスを提供するのに役に立つ
- コードをすべてのローカルスコープに閉じ込め、グローバル変数がもれないようにすることができる

### 4.5.1 即時関数のパラメータ

即時関数に引数を渡すことができる

```
// 以下が表示される
// I met Joe Black on Fri Aug 13 2010 23:26:59 GMT-0800 (PST)

(function (who, when) {
    console.log("I met " + who + " on " + when);
}("joe Black", new Date()));
```

一般に即時関数の引数にはグローバルオブジェクトを渡す

### 4.5.2 即時関数からの戻り値

即時関数も他の関数と同じように値を返すことができ、その戻り値は変数に代入できる

```
var result = (function () {
    return 2 + 2;
}());
```

関数を囲む括弧を省略しても同じ結果が得られる(即時関数と区別しにくい）

```
var result = function () {
    return 2 + 2;
}();
```

これでも同じ結果が得られる

```
var result = (function () {
    return 2 + 2;
})();
```

即時関数は以下のようにあらゆる型の値を返すことができる

```
var getResult = (function () {
    var res = 2 + 2;
    return function () {
        return res;
    }
}());
```

即時関数はオブジェクトのプロパティを定義するときにも使える

```
var o = {
    message: (function () {
        var who = "me",
            what = "call";
        return what + " " + who;
    }()),
    getMsg: function () {
        return this.message;
    }
}

o.getMsg(); // call me
o.message; // call me
```

### 4.5.3 利点と使い方

- グローバル変数を残さずにやりたい作業を包める

## 4.6 即時オブジェクト初期化

グローバルスコープを汚染から保護するもうひとつの方法に「即時オブジェクト初期化パターン」がある

```
({
    maxwidth: 600,
    maxheight: 400,

    gimmeMax: function () {
        return this.maxwidth + "x" + this.maxheight;
    },

    init: function() {
        console.log(this.gimmeMax());
        // その他の初期化作業
    }

}).init();
```

- 1回きりの初期化作業を実行する間グローバル名前空間を保護する

## 4.7 初期化時分岐

「初期化時分岐」は最適化のパターン

**変更前**
```
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
```

このコードは非効率で、utils.addListener()やutils.removeListener()を呼ぶたびに同じ検査が何度も繰り返し実行されてしまう。初期化分岐を使えば、ブラウザ機能の検査はスクリプトが読み込まれる際に1回だけですむ。

**変更後**
```
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
```

## 4.8 関数プロパティによるメモ化パターン

- 関数はオブジェクトなのでプロパティを持つことができる
- 関数はすぐに使えるプロパティとメソッドを持っている

関数の引数を取得するlengthプロパティが自動的に与えられる

```
function func(a, b, c) {}
console.log(func.length); // 3
```

#### メモ化(memoization)とは

- 関数の結果をキャッシュすること

**メモ化の例**

```
var myFunc = function (param) {
    if (!myFunc.cache[param]) {
        var result = {};
        // ...重たい処理...
        myFunc.cache[param] = result;
    }
};

// キャッシュの記憶領域
myFunc.cache = {};
```

- 関数myFuncはmyFunc.cacheでアクセスできるプロパティcacheを作る
- cacheプロパティはオブジェクト(ハッシュ)で、この関数に渡されたパラメータparamをキーとしその計算結果を値にする
- 必要に応じていくらでも複雑なデータ構造にすることができる

上記コードは、関数が取る引数はparamだけであり、プリミティブのデータ型(文字列など)であることが前提で、パラメータを増やして複雑にするときは、それらをシリアライズすることが一般的な解。以下の例は引数オブジェクトをJSONデータにシリアライズしcacheオブジェクトのキーとしてそのデータを使っている。

```
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
```

シリアライズするとオブジェクトの一意性が失われるので注意が必要で、2つの異なるオブジェクトでプロパティがまったく同じ場合キャッシュのエントリも同じになってしまう

## 4.9 設定オブジェクト

設定オブジェクトはAPIをきれいに提供する方法

```
// 最初のfunction
function addPerson(first, last) {...}

// 後から引数追加
function addPerson(first, last, dob, gender, address) {...}

// この段階ですでにシグネチャが長くなってきているかつ引数の省略はできない為以下のような呼び出しとなる
addPerson("Bruce", "Wayne", new Date(), null, null, "batman")
```

多数のパラメータを渡すのは不便なので以下のようにパラメータをひとつにまとめてオブジェクトにする

```
var conf = {
    username = "batman",
    first: "Bruce",
    last: "Wayne"
};
addPerson(conf);
```

**設定オブジェクトの利点**

- パラメータの順序を覚える必要がない
- オプションのパラメータを安全に省略できる
- コードが読みやすく保守が楽になる
- パラメータの追加や削除が簡単になる

**設定オブジェクトの欠点**

- パラメータの名前を覚える必要がある
- プロパティ名はミニファイされない

このパターンは関数でDOM要素を作る場合や要素のCSSスタイルを設定するときに便利

## 4.10 カリー化

カリー化を確認する前に「関数の適用」の正確な意味を考える。

### 4.10.1 関数の適用

- 純粋な関数プログラミング言語においては、関数は呼び出されるものとしてではなくむしろ適用されるもの
- JavaScriptにおいても同様で、メソッドFunction.prototype.apply()を使って関数を適用することができる
- 関数は実際にはオブジェクトでありメソッドを持っている

```
// 関数を定義
var sayHi = function (who) {
    return "Hello" + (who ? ", " + who : "") + "!";
};

// 関数を呼び出し
sayHi(); // Hello!
sayHi('world'); // Hello, world!

// 関数を適用
sayHi.apply(null, ["hello"]); // Hello, hello!
```

- 関数の呼び出しも関数の適用も同じ結果が得られる
- apply()にはパラメータが2つある
    - 関数の内部でthisに束縛されるオブジェクト
    - 配列で関数の内部で利用可能なargumentsのようなオブジェクト
- 最初のパラメータがnullの場合、thisはグローバルオブジェクトを指す
    - オブジェクトのメソッドではない関数を呼んだときと同じ挙動
    - 関数がオブジェクトのメソッドであるときは、nullを渡してはいけない（そのオブジェクトが apply() の最初の引数になる）

```
var alien = {
    sayHi: function (who) {
        return "Hello" + (who ? ", " + who : "") + "!";
    }
};

alien.sayHi("world"); // Hello, world!
alien.sayHi.apply(alien, ["humans"]); // Hello, humans!
alien.sayHi.apply(null, ["humans"]); // Hello, humans!
```

- sayHi()の内部でthisはalienを指す（前の例ではthisはグローバルオブジェクトを指す）
- 関数の呼び出しはシンタックスシュガー※にすぎず、関数の適用と等価である
- Function.prototypeオブジェクトにはapply()とcall()メソッドがあるが、これはapply()のシンタックスシュガーにすぎないがシンタックスシュガーを使った方が良い場合もある

パラメータをひとつしか取らない関数は、call()を使えば配列を作らなくてすむ

```
sayHi.apply(alien, ["humans"]); // Hello, humans!
sayHi.call(alien, "humans"); // Hello, humans!
```

**applyとcallの定義**
```
/**
@param {Object} [thisArg]
@param {Array} [argArray]
@return {*}
*/
Function.prototype.apply = function(thisArg,argArray) {};
/**
@param {Object} [thisArg]
@param {...*} [args]
@return {*}
*/
Function.prototype.call = function(thisArg,args) {};
```

**シンタックスシュガー（糖衣構文）とは**

<blockquote>
糖衣構文（とういこうぶん、syntactic sugar）は、プログラミング言語において、読み書きのしやすさのために導入される書き方であり、複雑でわかりにくい書き方と全く同じ意味になるものを、よりシンプルでわかりやすい書き方で書くことができるもののことである。構文上の書換えとして定義できるものであるとも言える[1]。英: syntactic sugar の直訳に近い構文糖（こうぶんとう）とも言い、糖衣構文あるいは構文糖衣とするのは少々意訳的だがよく言われている。

<a href=https://ja.wikipedia.org/wiki/%E7%B3%96%E8%A1%A3%E6%A7%8B%E6%96%87>糖衣構文 - Wikipedia</a>
</blockquote>

### 4.10.2 部分適用

下記は部分適用を説明する為のコードで妥当なコードではない

```
// この関数があるとして
function add(x, y) {
    return x + y;
}

// 引数もわかってる
add(5, 4);

// ステップ1 最初の引数を置き換える
function add(5, y) {
    return 5 + y;
}

// ステップ2 2番目の引数を置き換える
function add(5, 4) {
    return 5 + 4
}
```

- 最初の引数の値を取得したら未知のxを既知の値5で関数全体を置き換える
- 残りの引数についても同じ置き換えを繰り返す

以下のコードは想像上のpartialApply()メソッド

```
var add = function (x, y) {
    return x + y;
};

// 完全適用
add.apply(null, [5, 4]); // 9

// 部分適用
var newadd = add.partialApply(null, [5]);
newadd.apply(null, [4]); // 9
```

- 部分適用によって別の関数が得られる
- その関数は別の引数で呼ぶことができる
- 実際にはadd(5)(4)のように書いたのと同じになる
    - add(5) が返す関数 をさらに(4)で呼ぶことできる
    - add(5)(4)を使うかわりにこれと似たadd(5, 4)を使うのは、シンタックスシュガーにすぎないと考えることができる

上記までのコードはデフォルトではこのような振る舞いをしないが、JavaScriptはこれを実現させることができる。この関数に部分適用を理解させて処理させることを**カリー化**という。

## 4.10.3 カリー化

- Haskell Curry という数学者の名前に由来する(Haskell というプログラミング言語もそう)

**カリー化の例**

```
// カリー化されたadd()
// 引数の部分リストを受け取る
function add(x, y) {
    var oldx = x, oldy = y;
    if (typeof oldy === "undefined") { // 部分適用
        return function (newy) {
            return oldx + newy;
        }
    }

    // 完全適用
    return x + y;
}

// テスト
typeof add(5); // function
add(3)(4); // 7

// 新しい関数を作成し格納する
var add2000 = add(2000);
add2000(10); // 2010
```

- 最初にadd()が呼ばれたとき、それが返す内部関数を含むクロージャーを作成する
- このクロージャーは元のxとyの値をそれぞれプライベート変数のoldxとoldyに格納する
- 最初の oldx は内部関数が実行されるときに使われる
- 部分適用がなく、xとyの両方が渡されたとき関数は両者の和を返すた

以下のコードではyをローカル変数として再利用する

```
// カリー化されたadd
// 引数の部分リストを受け取る
function add(x, y) {
    if (typeof y === "undefined") { // 部分適用
        return function(y) {
            return x + y;
        }
    }
    // 完全適用
    return x + y;
}

add(3)(4); // 7
```

汎用のカリー化関数例

```
function schonfinkelize(fn) {
    var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
    return function () {
        var new_args = slice.call(arguments),
            args = stored_args.concat(new_args);
        return fn.apply(null, args);
    }
}

// 通常の関数
function add(x, y) {
    return x + y;
}

// 関数をカリー化して新しい関数にする
var newadd = schonfinkelize(add, 5);
newadd(4); // 9

// もうひとつのやり方 この新しい関数を直接呼ぶ
schonfinkelize(add, 6)(7); // 13
```
- argumentsはJavaScriptの本物の配列ではないのでsliceでargumentsを配列に変換して扱いやすくしている
- schonfinkelize()が最初に呼ばれたとき、slice()メソッドへのプライベートな参照をsliceに格納し、その引数をstored_argsに格納する
- このとき引数の最初の要素はカリー化される関数な ので、この最初の要素を配列から取り除く
- schonfinkelize() は新しい関数を返す
- 新しい関数は古い部分適用された引数(stored_args)と新しい引数(new_args)をマージし、マージされた結果を元の関数fn(これもクロー ジャー内でのプライベートな利用が可能て)に適用する

次のような便利な使い方も可能

```
// 通常の関数
function add(a, b, c, d, e) {
    return a + b + c + d + e;
}

// 引数が複数でも動作する
schonfinkelize(add, 1, 2, 3)(5, 5); // 16

// 2段階のカリー化
var addOne = schonfinkelize(add, 1);
addOne(10, 10, 10, 10); // 41

var addSix = schonfinkelize(addOne, 2, 3);
addSix(5, 5); // 16
```

### 4.10.4 いつカリー化を使うべきか

- 同じ関数をほとんど同じパラメータで呼び出している箇所があった場合
    - 関数に引数のセットを部分適用することで新しい関数を動的に作成することができる
- 新しい関数には繰り返されるパタメータが格納されてるので（毎回渡す必要がない）、元の関数が期待する引数の完全なリストを事前に用意しておける


## 参考文献

[amazonjs asin="4873113911" locale="JP" title="JavaScript: The Good Parts ―「良いパーツ」によるベストプラクティス"]
