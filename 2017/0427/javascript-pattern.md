Javascriptパターン 第4章

Javascriptパターン輪読会で第4章「関数」の後半を担当したのでその記録をする

## 4.8 関数プロパティによるメモ化パターン



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
- apply()にはパラメータが 2つある
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
- 関数の呼び出しはシンタックスシュガーにすぎず、関数の適用と等価である
- Function.prototypeオブジェクトにはapply()とcall()メソッドがあるが、これはapply()のシンタックスシュガーにすぎないがシンタックスシュガーを使った方が良い場合もある

```
sayHi.apply(alien, ["humans"]); // Hello, humans!
sayHi.call(alien, "humans"); // Hello, humans!
```

パラメータをひとつしか取らない関数は、call()を使えば配列を作らなくてすむ

```EcmaSctipt.js
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

<blockquote>
糖衣構文（とういこうぶん、syntactic sugar）は、プログラミング言語において、読み書きのしやすさのために導入される書き方であり、複雑でわかりにくい書き方と全く同じ意味になるものを、よりシンプルでわかりやすい書き方で書くことができるもののことである。構文上の書換えとして定義できるものであるとも言える[1]。英: syntactic sugar の直訳に近い構文糖（こうぶんとう）とも言い、糖衣構文あるいは構文糖衣とするのは少々意訳的だがよく言われている。
[糖衣構文 - Wikipedia](https://ja.wikipedia.org/wiki/%E7%B3%96%E8%A1%A3%E6%A7%8B%E6%96%87)
</blockquote>

### 4.10.2 部分適用

下記は部分適用を説明する為のコードで、妥当なコードではない

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

- 最初の引数の値を取得したら、未知のxを既知の値5で関数全体を置き換える
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
    - add(5)(4)を使うかわりに、これと似たadd(5, 4)を使うのは、シンタックスシュガーにすぎないと考えることができる

上記までのコードはデフォルトではこのような振る舞いをしないが、JavaScriptはこれを実現させることができる。
この関数に部分適用を理解させて処理させることを**カリー化**という。

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

4.10.4 いつカリー化を使うべきか

- 同じ関数をほとんど同じパラメータで呼び出している箇所があった場合
    - 関数に引数のセットを部分適用することで新しい関数を動的に作成することができる
- 新しい関数には繰り返されるパタメータが格納されてるので（毎回渡す必要がない）、元の関数が期待する引数の完全なリストを事前に用意しておける
