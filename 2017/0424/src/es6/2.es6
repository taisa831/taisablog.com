"use strict";

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

var m = new Map([["k1", "v1"], ["k2", "v2"]]);
for (let [k, v] of m) {
    console.log(k, v);
    // K1 v1
    // k2 v2
}
