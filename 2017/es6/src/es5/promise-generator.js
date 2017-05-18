
function getFirstItem(callback) {
    getUrl("/item", function (err, items) {
        // 最初のリクエストのエラー処理
        if (err) {
            return callback(err);
        }
        // 先頭のアイテムの詳細情報の取得
        getUrl("/item" + items[0].id, function (err, detail) {
            // 2つ目のリクエストのエラー処理
            if (err) {
                return callback(err);
            }
            // 成功
            callback(null, detail);
        });
    });
}

getFirstItem(function (err, item) {
    // エラー処理
    if (err) {
        console.error(e);
    }
    // 本来やりたかった処理
    someProcess(item);
});

function someProcess(item) {

}