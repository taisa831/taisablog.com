"use strict";

// アロー関数

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var add = function add(a, b) {
    return a + b;
};

// thisの補足
var john = {
    name: "john",
    helloLater: function helloLater() {
        var _this = this;

        setTimeout(function () {
            // アロー関数を使うと、ここでのthisはjohnなのでそのまま使える
            console.log("Hello, I'm " + _this.name);
        }, 1000);
    }
};

// クラスと継承

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: "greet",
        value: function greet() {
            console.log("Hello, I'm " + this.name);
        }
    }], [{
        key: "create",
        value: function create(name) {
            return new Person(name);
        }
    }]);

    return Person;
}();

// インスタンスの生成
var bob = new Person("Bob");
bob.greet(); // Hello, I'm Bob

// スタティック
var john = Person.create("John");

