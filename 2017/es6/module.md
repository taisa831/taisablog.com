ECMAScript 6を触ってみる - 標準化されたモジュール管理システム

[前回](http://taisablog.com/archives/589)に引き続きJSの速習コース実践ラスト。最後は「WEB+DB PRESS Vol.87 第1特集 第6章-標準化されたモジュール管理システム-」を速習する。

## これまでのモジュール管理

JavaScriptにはモジュール管理するしくみがないため、モジュール管理の仕組みは言語の外側で作られてきた。

### CommonJSモジュール

Node.jsに採用されているサーバサイド向けのモジュール管理仕様で、require関数を呼ぶだけで同期的にほかのモジュールを読み込むことができる

```
// module.js
exports.foo = "foo!";

// import.js
var mod = require('./module');
console.log(mod.foo); // foo!
```

### AMD

サーバ向けに作られたCommonJSモジュールに対して、ブラウザ向けに作られたモジュール機構がAMD。AMDではdefine関数でモジュールを定義し、require関数でモジュールを読み込む

```
// module.js
define(function () {
    return {bar: "bar!"}
});

// import.js
require(["./module"], function (mod) {
    console.log(mod.foo); // foo!
});
```

これらにはそれぞれメリットもあるがデメリットも多い

## ES6モジュールの基本

### ES6モジュールの特長

- 宣言的でシンプルなモジュールのインポートとエクスポートの文法
- 読み込み方法は同期にも非同期にも対応可能

### ES6モジュールのインポートとエクスポート

#### 名前付きエクスポート

```
// module.js
// 1. 各メンバをエクスポート
export var foo = "foo!";
export function bar() {}
export class Baz {
    baz() {}
}

// import.js
// 2. メンバ毎にインポート
import {foo, bar, Baz} from "./module";
console.log(foo);
bar();
new Baz();

// 3. インポートする変数名の指定
import {foo as poo} from "./module";
console.log(poo); // foo!

// 4. モジュールをまとめてインポート
import * as module from "./module";
console.log(module.foo); // foo!
```

- 1では変数や関数、クラスの宣言文の先頭にexportを付けると、その名前のままモジュールのメンバとして外部にエクスポートされる
- 2では1でエクスポートされたモジュールをインポートしている
- importのあとにインポートしたいメンバの名前を指定し続いてfromのあとにモジュールの識別子を指定する
- エクスポートされたメンバの名前とは別の変数名としてインポートしたい場合は、import文でasを使う(3)
- 4はモジュールのメンバは個別ではなくモジュール全体をまとめてインポートするシンタックス

#### デフォルトエクスポート

名前付きエクスポートでは、インポートするためにはエクスポートされたメンバの名前を知っている必要があったが、これに対してモジュール1つに対して1つのメンバに限り名前指定不要でインポートできる仕組みがある

```
// foo.js
// デフォルトエクスポート
export default "foo!";

// bar.js
// デフォルトエクスポート
export default function () {
    console.log("bar!");
}

// baz.js 
// デフォルトエクスポート
export default class {
    constructor() {
        console.log("Baz!")
    }
}

// default-import.js
import a from "./foo";
import b from "./bar";
import c from "./baz";
console.log(a); // foo!
b(); // bar!
new c(); // Baz!
```

- exportではなくexport defaultでエクスポートするメンバを指定する
- importは名前付きエクスポートと違って自由に変数名を指定できる
- 名前付きエクスポートに比べてデフォルトエクスポートはシンタックスも使い方もシンプル


### モジュールの定義位置と巻き上げ

- import文やexport文はモジュールのトップレベル以外に書くことはできない
- if文や関数の中に書くとエラーになる
- import文は関数宣言文などとおなじように巻き上げ(hoisting)が発生し、どこに書いてもモジュールの冒頭で宣言したことになる

### モジュールないはstrictモード

- ES6モジュールは必ずstrictモードとして実行される
- ブラウザでは通常スクリプトのトップレベルのthisはwindowオブジェクトだったが、ES6モジュール内ではトップレベルのthisはundefinedになる 

## まとめ

JavaScript、ES5とES6について「JavaScriptパターン」と「WEB+DB PRESS Vol.87」で速習した。これらはとても良本なのでかなりおすすめ。

- 速習ブログ
    - [「JavaScriptパターン」第4章-関数-が面白かったからまとめながら写経した](http://taisablog.com/archives/378)
    - [ECMAScript 6を触ってみる - モダンになった文法](http://taisablog.com/archives/407)
    - [ECMAScript 6を触ってみる - 非同期処理 PromiseとGeneratorによるフロー制御](http://taisablog.com/archives/589)
    - [ECMAScript 6を触ってみる - 標準化されたモジュール管理システム]()