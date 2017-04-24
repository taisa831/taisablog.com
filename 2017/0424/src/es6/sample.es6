"use strict";

// アロー関数

var add = (a, b) => {
    return a + b;
};

// thisの補足
var john = {
    name: "john",
    helloLater: function () {
        setTimeout(() => {
            // アロー関数を使うと、ここでのthisはjohnなのでそのまま使える
            console.log("Hello, I'm " + this.name)
        }, 1000);
    }
};

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

for (let i = 0; i < 5; i++) {
    // iは各ループ（ブロックスコープ）毎に保存される
    setTimeout(function () {
        console.log(i)
    }, i * 100);
}

function foo(first, second, ...rest) {
    console.log("first:", first);
    console.log("second:", second);
    console.log("rest:" , rest);
}
foo(1, 2, 3, 4, 5);
// first: 1
// second: 2
// rest: [3, 4, 5]

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
