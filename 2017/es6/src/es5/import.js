"use strict";

var _module = require("./module");

console.log(_module.foo); // メンバ毎にインポート

(0, _module.bar)();
new _module.Baz();
