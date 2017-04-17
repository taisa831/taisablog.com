Javascriptパターン 第4章

Javascriptパターン輪読会で4章関数の後半を担当したのでその記録

## 4.10 カリー化

カリー化の確認の前に関数の適用の正確な意味を考える。

### 4.10.1 関数の適用

純粋な関数プログラミング言語においては、関数は呼び出されるものとしてではなく、むしろ適
用されるものとして説明される。関数は実際にはオブジェクトであり、メソッドを持っている。

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
