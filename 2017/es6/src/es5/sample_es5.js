
// コンストラクタ
function Person(name) {
    this.name = name;
}

// インスタンスメソッド
Person.prototype.greet = function() {
    console.log("Hello, I'm " + this.name);
};

// スタティックメソッド
Person.create = function(name) {
    return new Person(name);
};

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 100);
}
//5が5回表示されてしまう

//ES5でただしく動作するコード
for (var i = 0; i < 5; i++)  {
    (function(x) {
        setTimeout(function () {
            console.log(x)
        }, x * 100)
    })(i);
}

var nums = [3, 1, 2];
Math.max.apply(null, nums); // 3