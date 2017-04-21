// カリー化

// 関数の適用

// 関数を定義
var sayHi = function (who) {
    return "Hello" + (who ? ", " + who : "") + "!";
};

// 関数を呼び出し
sayHi(); // Hello!
sayHi('world'); // Hello, world!

// 関数を適用
sayHi.apply(null, ["hello"]); // Hello, hello!

var alien = {
    sayHi: function (who) {
        return "Hello" + (who ? ", " + who : "") + "!";
    }
};

alien.sayHi("world"); // Hello, world!
alien.sayHi.apply(alien, ["humans"]); // Hello, humans!
alien.sayHi.apply(null, ["humans"]); // Hello, humans!

sayHi.apply(alien, ["humans"]); // Hello, humans!
sayHi.call(alien, "humans"); // Hello, humans!

// // 部分適用
// // 以下のコードは確認の為のコード
//
// // この関数があるとして
// function add(x, y) {
//     return x + y;
// }
//
// // 引数もわかってる
// add(5, 4);
//
// // ステップ1 最初の引数を置き換える
// function add(5, y) {
//     return 5 + y;
// }
//
// // ステップ2 2番目の引数を置き換える
// function add(5, 4) {
//     return 5 + 4
// }
//
// var add = function (x, y) {
//     return x + y;
// };
//
// // 完全適用
// add.apply(null, [5, 4]); // 9
//
// // 部分適用
// var newadd = add.partialApply(null, [5]);
// newadd.apply(null, [4]); // 9


// カリー化

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

// yをローカル変数として再利用する

// カリー化されたadd
// 引数の部分リストを受け取る
function add(x, y) {
    if (typeof y === "undefined") { // 部分適用
        return function (y) {
            return x + y;
        }
    }
    // 完全適用
    return x + y;
}

add(3)(4); // 7

// 汎用のカリー化関数例
function schonfinkelize(fn) {
    var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1); // 引数をslice
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

// 複数の場合

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