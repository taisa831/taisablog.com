// 4.6 即時オブジェクト初期化

({
    maxwidth: 600,
    maxheight: 400,

    gimmeMax: function () {
        return this.maxwidth + "x" + this.maxheight;
    },

    init: function () {
        console.log(this.gimmeMax());
        // その他の初期化作業
    }

}).init();

