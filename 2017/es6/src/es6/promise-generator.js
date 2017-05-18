
function getFirstItem() {
    return getUrl("/items").then(items => {
        return getUrl("/items" + items[0].id);
    });
}

// 本体からの呼び出し
getFirstItem().then(item => {
    someProcess(item);
}).catch(e => {
    console.error(e);
});

function getAllItems() {
    return getUrl("/items").then(list => {
        return Promise.all(list.map(item => {
            return getUrl("/items/" + item.id);
        }));
    });
}

function *getFirstItem() {
    var items = yield getUrl("/items");
    var item = yield getUrl("/items/" + items[0].id);
    return item;
}

var co = require("co");
co(function () {
    try {
        var item = yield getFirstItem();
        someProcess(item);
    } catch (e) {
        console.log(e);
    }
});

function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("wait: " + time)
        }, time);
    });
}

wait(1000).then(value => {
    console.log(value);
}).then(value => {
    console.log(value);
});

function getUrl(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xht.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.statusText);
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = () => {
            reject(new Error(xhr.statusText))
        };
        xhr.send();
    });
}

getUrl("/items").then(res => {
    var items = JSON.parse(res);
    someProcess(items);
}).catch(e => {
    console.log(e);
});

Promise.all([
    getUrl("/hoo"), getUrl("/bar")
]).then(res => {
    console.log(res[0]);
    console.log(res[1]);
}).catch(e => {
    console.error(e);
});

// Generator

function *generator1() {
    yield 1;
    yield 2;
    return 3;
}

var g = generator1();
console.log(g.next());
console.log(g.next());
console.log(g.next());

for (let n of generator1()) {
    console.log(n);
}
// 1
// 2

function msg(str) {
    console.log("msg:", str);
    return str;
}

function *generator2() {
    console.log("start");
    var ret1 = yield msg("yield 1");
    console.log("ret1:", ret1);
    var ret2 = yield msg("yield 2");
    return "end";
}

var g = generator2();
var next1 = g.next();
console.log(next1);
var next2 = g.next("next 1");
console.log(next2);
var next3 = g.next("next 2");
console.log(next3);

asyncflow(function *() {
    var items = yield getUrl("/items");
    var id = items[0].id;
    var item = yield getUrl("/items/" + id);
    console.log(item);
});

function asyncflow(generator) {
    var g = generator();
    var next = value => {
        var result = g.next(value);
        if (!result.done) {
            var promise = result.value;
            promise.then(value => {
                next(value);
            });
        }
    };
    next();
}