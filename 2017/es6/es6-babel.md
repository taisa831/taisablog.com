ECMAScript 6を触ってみる -モダンになった文法-

<a href="https://twitter.com/t_wada" target="_blank">@t_wada</a>さんの言うとおり<a href="https://www.amazon.co.jp/WEB-DB-PRESS-Vol-87-%E4%BD%90%E8%97%A4/dp/4774173703?SubscriptionId=AKIAJPATVFHYPKSNTR4A&amp;tag=joghmasami-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=4774173703" title="WEB+DB PRESS Vol.87" target="_blank">WEB+DB PRESS Vol.87</a>はES6を速習するのにとても良いコンテンツだと思う。

個人的には「<a href="https://www.amazon.co.jp/JavaScript-Parts-%E2%80%95%E3%80%8C%E8%89%AF%E3%81%84%E3%83%91%E3%83%BC%E3%83%84%E3%80%8D%E3%81%AB%E3%82%88%E3%82%8B%E3%83%99%E3%82%B9%E3%83%88%E3%83%97%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%82%B9-Douglas-Crockford/dp/4873113911?SubscriptionId=AKIAJPATVFHYPKSNTR4A&amp;tag=joghmasami-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=4873113911" title="JavaScript: The Good Parts ―「良いパーツ」によるベストプラクティス" target="_blank">JavaScript: The Good Parts ―「良いパーツ」によるベストプラクティス</a>」よりも「<a href="https://www.amazon.co.jp/JavaScript%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3-%E2%80%95%E5%84%AA%E3%82%8C%E3%81%9F%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E4%BD%9C%E6%B3%95-Stoyan-Stefanov/dp/4873114888?SubscriptionId=AKIAJPATVFHYPKSNTR4A&amp;tag=joghmasami-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=4873114888" title="JavaScriptパターン ―優れたアプリケーションのための作法" target="_blank">JavaScriptパターン ―優れたアプリケーションのための作法</a>」の方が良いとは思うものの、どちらも優れた本なので個人的には、「JavaScriptパターン」と「WEB+DB PRESS Vol.87 第1特集」とプラスαで「JavaScript:The Good Parts」で全体像をつかむという速習コースの実践をしたい。

ということで今回は「WEB+DB PRESS Vol.87 第1特集」の第3章-モダンになった文法-を確認するコース

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">『JavaScript: The Good Parts』と『WEB+DB PRESS Vol.87 第1特集』のあわせて250ページ未満でES6までの全体像をつかむ速習コースのご提案 <a href="http://t.co/doPQ7V4enw">http://t.co/doPQ7V4enw</a> <a href="http://t.co/NKTGz3syk7">http://t.co/NKTGz3syk7</a></p>&mdash; Takuto Wada (@t_wada) <a href="https://twitter.com/t_wada/status/630687620889079812">2015年8月10日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[amazonjs asin="4774173703" locale="JP" title="WEB+DB PRESS Vol.87"]

## BabelはES6のトランスパイラ
<a href="https://babeljs.io/" target="_blank">こちら</a>が本家サイト

### Babelを使ってES6をES5にトランスパイルしてみる

npmを初期化する
```
npm init
```

babelをインストールする
```
npm install --save-dev babel-cli babel-preset-env
```

.babelrcに以下を追加する
```
{
    "presets": ["env"]
}
```

ES6を記述
<pre>
"use strict";

var add = (a, b) => {
    return a + b;
};
</pre>

以下のコマンドを実行する
```
# ファイル指定
./node_modules/.bin/babel -o src/es5/sample.js src/es6/sample.es6

# ディレクトリ指定
./node_modules/.bin/babel -d src/es5/ src/es6/
```

ES5にトランスパイルされる
```
var add = function add(a, b) {
    return a + b;
};
```

これで、ES6をES5にトランスパイルする環境が整ったので、次から新しく追加された文法を確認していく

## モダンになった文法を確認する

- [アロー関数](#allow)
- [クラスと継承](#class_extends)
- [オブジェクトリテラルの拡張](#object)
- [letとconstによるブロックスコープ](#block_scope)
- [デフォルトパラメータ](#default)
- [関数パラメータの拡張](#func)
- [分割代入](#split)
- [イテレータとfor/of文](#iterator)
- [テンプレートリテラル](#template)

### <a name="allow">アロー関数</a>

ES5
```
var add = function add(a, b) {
    return a + b;
};
```

ES6
```
var add = (a, b) => {
    return a + b;
};
```

#### thisの補足

ES5
```
var john = {
    name: "john",
    helloLater: function helloLater() {
        var _this = this;

        setTimeout(function () {
            // アロー関数を使わないと、ここでのthisはjohnではなので変数に保存する必要がある
            console.log("Hello, I'm " + _this.name);
        }, 1000);
    }
};
```

ES6
<pre>
var john = {
    name: "john",
    helloLater: function () {
        setTimeout(() => {
            // アロー関数を使うと、ここでのthisはjohnなのでそのまま使える
            console.log("Hello, I'm " + this.name)
        }, 1000);
    }
};
</pre>

## <a name="class_extends">クラスと継承</a>

- 見て分かる通りわかりやすいクラス構造になってる
- 組み込みクラスのErrorやArrayなどを継承することができるようになった

```
// ES5でのクラス表現

// コンストラクタ
function Person(name) {
    this.name = name;
}

// インスタンスメソッド
Person.prototype.greet = function() {
    console.log("Hello, I'm " + this.name);
};

// スタティックメソッド
Person.create = function(name) {
    return new Person(name);
};

```

```
// ES6でのクラス表現

// クラスと継承
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, I'm " + this.name);
    }

    static create(name) {
        return new Person(name);
    }
}

// インスタンスの生成
var bob = new Person("Bob");
bob.greet(); // Hello, I'm Bob

// スタティック
var john = Person.create("John");
```

### クラスの継承

ES6
```
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, I'm " + this.name);
    }

    static create(name) {
        return new Person(name);
    }
}

// クラスの継承
class Author extends Person {

    constructor(name, book) {
        super(name);
        this.book = book;
    }

    greet() {
        super.greet();
        console.log("I wrote " + this.book);
    }

    static create(name, book) {
        return new Author(name, book);
    }
}

var author = new Author("Gillian Flynn", "Gone Girl");
author.greet();
// Hello, I'm Gillian Flynn
// I wrote Gone Girl
```

## <a name="object">オブジェクトリテラルの拡張</a>

### プロパティ省略記法

オブジェクトプロパティ名のキー名と値の変数名が等しいばあい、省略記法がつかえるようになった

```
var foo = 0, bar = 1;
```

ES5
```
var obj = {foo: foo, bar: bar}
console.log(obj.foo, obj, bar);
// 0, 1
```

ES6
```
var obj = {foo, bar}
```

### コンピューテッドプロパティ

プロパティのキー名が変数に入った文字列であるとき、一度オブジェクトｗ生成する必要があったがES6ではキーを角括弧で囲むことで直接変数や式を指定できるようになった

```
var key = "foo";
```

ES5
```
var obj = {}
obj[key] = 0;
obj[key + "_bar"] = 1
console.log(obj.foo, obj.foo_bar);
// 0, 1
```

ES6
```
var obj {
    [key]: 0,
    [key + "_bar"]: 1
};
```

### メソッド定義

オブジェクトのメソッドをfunctionキーワードを使わずに短く定義できるメソッド定義記法が導入された

ES5
```
var counter = {
    count: 0,
    increment: function() {
    this.count++;
};
counter.increment();
```

ES6
```
var counter = {
    count: 0,
    increment() {
        this.count++;
    }
};
```

ここでアロー関数を使うと、thisの補足が発動してしまうのでこのケースではthisを束縛しないメソッド定義記法を使う

## <a name="block_scope">letとconstによるブロックスコープ</a>

### for分のブロックスコープ

ES5
```
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 100);
}
//5が5回表示されてしまう

//ES5でただしく動作するコード
for (var i = 0; i < 5; i++)  {
    (function(x) {
        setTimeout(function () {
            console.log(x)
        }, x * 100)
    })(i);
}
```

ES6
```
for (let i = 0; i < 5; i++) {
    // iは各ループ（ブロックスコープ）毎に保存される
    setTimeout(function () {
        console.log(i)
    }, i * 100);
}
```

### constで呈すを宣言
letと同時に導入されてconstを使うことでブロックスコープの定数を宣言できる

```
const foo = 1;
console.log(foo); // 1
foo = 100; // エラー
const foo = 0; // エラー
```

## <a name="func">関数パラメータの拡張</a>

### デフォルトパラメータ
関数の引数のデフォルト値を簡単に指定できるようになった

### レフトパラメータ
可変長引数をとる関数を簡単に書けるようになった

```
function foo(first, second, ...rest) {
    console.log("first:", first);
    console.log("second:", second);
    console.log("rest:" , rest);
}
foo(1, 2, 3, 4, 5);
// first: 1
// second: 2
// rest: [3, 4, 5]
```

## <a name="operator">スプレッドオペレータ</a>
スプレッドオペレータのドット記法によりシンプルに配列を引数として展開できるようになった

```
var nums = [3, 1, 2];
```

ES5
```
var nums = [3, 1, 2];
Math.max(...nums); // 3
```

ES6
```
var nums = [3, 1, 2];
Math.max(...nums); // 3
```

## <a name="split">分割代入</a>
配列やオブジェクトから構造がマッチするデータを抽出できる機能で、変数への代入と関数引数の指定という2つの場面で使える

### 変数への分割

```
var nums = [3, 1, 2];
Math.max(...nums); // 3

// 配列の分割代入
var [year, month, day] = [2015, 12, 31];
console.log(year, month, day); // 2015 12 31

// 2番目の値だけを代入
var [, month] = [2015, 12, 31];
console.log(month); // 12

// レスとパラメータの活用
var [year, ...monthday] = [2015, 12, 31];
console.log(year, monthday); // 2015, [12, 31]

// 値の交換に便利
var x =1, y= 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// オブジェクトの分割代入
var {name: a, age: b} = {name: "Bob", age: 20};
console.log(a, b); // "Bob" 20

// プロパティ省略記法を使った分割代入
var {name, age} = {name: "Bob", age: 20};
console.log(a, b); // "Bob" 20

// デフォルト値の指定
var {name, age = 18} = {name: "Bob"};
console.log(name, age); // "Bob" 20

// ネストしたオブジェクトからの抽出
var {foo: {bar: [, x]}} = {foo: {bar: [1, 2, 3]}};
console.log(x); // 2
```

## <a name="iterator">イテレータとfor/of文</a>

ES6では汎用的な繰り返し処理用のインターフェースとしてIterableとIteratorが導入された

### イテレータを使った反復処理

**for/of文**

```
var iter = [1, 2, 3];
for (let n of iter) {
    console.log(n);
}
```

iterの部分にはIterableであればどんなオブジェクトが入っても構わない

**スプレッドオペレータと分割代入**
スプレッドオペレータと分割代入も、Iterableなオブジェクトを受け付けることができる

```
// スプレッドオペレータ
var arr = [..."foo"];
// ["f", "o", "o"]
```

```
// 分割代入
var [c1, c2, ...rest] = "ecma";
console.log(c1, c2, rest);
// "e", "c", ["m", "a"]
```

他にもArray，Map、Set、PromiseなどがIterableを受け取るメソッドをもっていて、イテレータはES6で集合データを扱う為の共通基盤となっている。

## <a name="template">テンプレートリテラル</a>
文字列を定義する新しいリテラルとしてテンプレートリテラルが導入された

### 変数の埋込
テンプレートリテラルはバッククオートで囲んだ文字列で、途中に変数を埋め込むことができる

```
var name = "Bob";
console.log(`Hello, ${name}.`);
// Hello, Bob.
```

### 複数行文字列

改行を含む複数行の文字列もそのまま表示できる

```
var text = 
`line 1
line 2
line 3`;
```

### タグ付きテンプレート

タグ付きテンプレートとは、テンプレートタグと呼ばれる関数をつかってテンプレートリテラルを変換する仕組み

<pre>
var name = "Bob <script>";
// タグ付きテンプレート
el.innerHTML = html`<p>Hello, ${name}</p>`;

// タグ関数
function html(templates, ...values) {
    var result = "";
    for (let i = 0; i < templates.length; i++)  {
        result += templates[i];
        if (i < values.length) {
            // 変数をHTMLエスケープ
            result += escapeHtml(values[i]);
        }
    }
    return result;
    // <p>Hello, Bob &lt;script&gt;</p>
}
</pre>

- タグ付きテンプレートは、テンプレートリテラルの前にタグを書く
- タグの実態は普通の関数
- タグ関数は第1引数に変数埋め込みで分割されたテンプレートリテラルの配列、第2引数移行に埋め込まれる値を受け取る
- 埋め込まれる値をHTMLエスケープする

テンプレートリテラルの変数埋め込み、複数行テキスト、タグ付きテンプレートを組み合わせることで、さまざまなDSL(Domain Specific Language)が書けるようになる