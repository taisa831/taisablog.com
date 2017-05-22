// メンバ毎にインポート
import {foo, bar, Baz} from "./module";
console.log(foo);
bar();
new Baz();

// インポートする変数名の指定
import {foo as poo} from "./module";
console.log(poo); // foo!

// モジュールをまとめてインポート
import * as module from "./module";
console.log(module.foo); // foo!