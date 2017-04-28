ECMAScript 6を触ってみる -強化された標準ライブラリ-


[amazonjs asin="4774173703" locale="JP" title="WEB+DB PRESS Vol.87"]

## 強化された標準ライブラリを確認する

- [データ構造を表す新しいクラス](#structure)
- [メタプログラミングの強化](#meta)
- [既存クラスの拡張](#extends)

### <a name="structure">データ構造を表す新しいクラス</a>

#### Map

ES6ではMapが導入された

```
// コンストラクタ
var map = new Map();

// 値の設定
map.set("key1", "value1");

// 値の取得
map.get("key1"); // value1

// 値の存在チェック
map.has("key1"); // true

// 値の削除
map.delete("key1");
map.has("key1"); // false

// 一括設定
var map2 = new Map([["k1", "v1"], ["k2", "v2"]]);
map2.get("k1"); // v1

// サイズの取得
map2.size; // 2

// 全データのクリア
map2.clear();
map2.size; // 0
```
MapはIterableなので以下のように書けるしArrayと同じ形式のforEachメソッドも使える

```
var m = new Map([["k1", "v1"], ["k2", "v2"]]);
for (let [k, v] of m) {
    console.log(k, v);
    // K1 v1
    // k2 v2
} 
```
#### Set

Setは重複がないユニークな値の集合を表すデータ型で、SetもMapとほぼ同様の使い方で利用が可能

### <a name="meta">メタプログラミングの強化</a>

#### Symbol

- ES6で導入された新しいプリミティブ型
- オブジェクトのプロパティのキーとして使うことができるユニークなキーを生成する
- 特別なWell-known Symbolを使うことでイテレータなどのオブジェクトの振る舞いを変更できる

```
```


