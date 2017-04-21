// 4.1 背景

// 名前付き関数式
var add = function add(a, b) {
   return a + b;
};

// 関数式（無名関数）
var add = function (a, b) {
   return a + b;
};

// 関数宣言
function foo(a, b) {
   return a + b
}

//4.1.2 宣言と式：名前と巻き上げ

// グローバルスコープ
function foo() {}

function local() {
   // ローカルスコープ
   function bar() {
       return 1 + 3;
   }
   return bar;
}

bar = local();
bar();

// 関数のnameプロパティ
function foo() {} // 関数宣言
var bar = function () {}; // 名前なし関数式
var baz = function baz() {}; // 名前付き関数式

foo.name; // foo
bar.name; // bar
baz.name; // baz

// 関数の巻き上げ

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