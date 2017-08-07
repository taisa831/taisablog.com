おれ的フロントエンド速習コース

3ヶ月間で自分のフロントエンド力を向上させるにあたって取り組んだことを書く。

## フロントエンドって？

どこからどこまで？何を指してる？と引っかかる人がいるかもしれないけどそこら辺はなんとなくお察しください。

## 3ヶ月前まで

- JSとjQueryのみ
- 毎回ノリで書いていた（もちろんカオスにならないように最大限工夫はしてるけど）
- 流れが早いからモダン情報のキャッチアップはタイミングを見計らっている
- けど2017年中にはなんとかしたい
- やるなら一気にやりたい

始める前まではこんな感じだったけど、そろそろいってもいいかな？ということでやり始めた。

## 速習後

もともとは既存プロダクトをどうにかするつもりで始めていたけど、タイミングよく新規プロダクトを立ち上げることになったので採用した。何もしてなかったらかなり勇気が必要だったと思う。

- ES6
- React
- VueJS
- Webpack
- Babel
- PostCSS
- Go
- PHP(継続)

## 3ヶ月でやった事

- JavaScript(ES5)を速習する
- ES6を速習する
- React(でSPAを)速習する
- マークアップを速習する
- Podcastで速習する
- 勉強会で速習する
- チームメンバーと速習する

### JavaScript(ES5)を速習する

オライリー本で速習

[amazonjs asin="4873114888" locale="JP" title="JavaScriptパターン ―優れたアプリケーションのための作法"]

「<a href="https://www.amazon.co.jp/JavaScript-Parts-%E2%80%95%E3%80%8C%E8%89%AF%E3%81%84%E3%83%91%E3%83%BC%E3%83%84%E3%80%8D%E3%81%AB%E3%82%88%E3%82%8B%E3%83%99%E3%82%B9%E3%83%88%E3%83%97%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%82%B9-Douglas-Crockford/dp/4873113911?SubscriptionId=AKIAJPATVFHYPKSNTR4A&amp;tag=joghmasami-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=4873113911" title="JavaScript: The Good Parts ―「良いパーツ」によるベストプラクティス" target="_blank">JavaScript: The Good Parts ―「良いパーツ」によるベストプラクティス</a>」や他の本もいいけど個人的にはこの本がお薦め（発売時期がよい）。
※デザインパターンの章は他に「<a href="https://www.amazon.co.jp/JavaScript%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3-Addy-Osmani/dp/487311618X?SubscriptionId=AKIAJPATVFHYPKSNTR4A&amp;tag=joghmasami-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=487311618X" title="JavaScriptデザインパターン" target="_blank">JavaScriptデザインパターン</a>」という書籍があるしここでは読み飛ばしてもよいと思う。

### ES6を速習する

WEB+DB PRESS Vol.87で速習

[amazonjs asin="4774173703" locale="JP" title="WEB+DB PRESS Vol.87"]

非常に分かりやすく端的に説明されていてとてもよい。
（こんなツイートも↓）

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">『JavaScript: The Good Parts』と『WEB+DB PRESS Vol.87 第1特集』のあわせて250ページ未満でES6までの全体像をつかむ速習コースのご提案 <a href="http://t.co/doPQ7V4enw">http://t.co/doPQ7V4enw</a> <a href="http://t.co/NKTGz3syk7">http://t.co/NKTGz3syk7</a></p>&mdash; Takuto Wada (@t_wada) <a href="https://twitter.com/t_wada/status/630687620889079812">2015年8月10日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### React(でSPA)を速習する

[amazonjs asin="4774187283" locale="JP" title="WEB+DB PRESS Vol.97"]で速習

React+Flux、クライアントサイドルーティング、サーバサイドレンダリング、webpackについて丁寧に説明されている。他にもマネジメントやPythonに関する内容があってとても読みごたえがある。

#### すぐに「理解できた」という訳にはいかない

Reactはそれなりに初期学習コストがあるので以下のことを繰り返しながらじっくり理解を進めていった。

- [サンプルコードを動かす](http://gihyo.jp/magazine/wdpress/archive/2017/vol97/support)
- [本家サイトチェック](https://facebook.github.io/react/)
- ブログ記事チェック
    - [今話題のReact.jsはどのようなWebアプリケーションに適しているか？（お薦め記事）](https://html5experts.jp/hokaccha/13301/)
- サンプルコードを作る
- Web+DB PRESS見直す

### マークアップを速習する

マークアップも一人でできるようになりたいというメンバーが多かったのもあり、社内のUI/UXデザイナーにハンズオンをしてもらった。このハンズオンの目的としては**何から手をつけていいか分からない**という状況から脱却して**自分でもなんとか勉強できる**状態にすることでこれだけでなんとかしようというものではない。

<script async class="speakerdeck-embed" data-id="b3c335b30aaa4e30980e5b0898d6abdd" data-ratio="1.41436464088398" src="//speakerdeck.com/assets/embed.js"></script>

**関連リンク**
- [初心者向けざっくりHTML/CSSコーディングハンズオン資料](https://speakerdeck.com/oremega/csskodeinguhanzuonzi-liao)
- [社内エンジニア向けにマークアップハンズオンを開催しました](http://tech.aainc.co.jp/archives/10837)

## その他の方法

### Podcastで速習する

- [現場.fm](https://genba.fm/)
- [現場.fm というフロントエンドの現場について話すラジオを始めた](http://mizchi.hatenablog.com/entry/2017/04/19/123753)

### 勉強会で速習する

コミュニケーションしながら疑問点を解決してもらえたのでとても助かった。他にもReact、VueJS、Angular以外も含めたフレームワーク発表会をやったりした。またそれをうけてあたらめてReact、VueJS、Angularはいいなと実感した。

<a href="http://taisablog.com/wp-content/uploads/2017/08/6DAjmBCmTZ8BMUmgaW2J4X.jpg"><img src="http://taisablog.com/wp-content/uploads/2017/08/6DAjmBCmTZ8BMUmgaW2J4X-450x600.jpg" alt="" width="450" height="600" class="aligncenter size-medium wp-image-726" /></a>

### チームメンバーと速習する

- 今QはJSをやろうと全員で決めた（※この間業務でJS触る機会は0だった）
- 情報共有しやすい
- ここでもチームメンバーで分担してReact、VueJS、Angularを調べて発表会をした
- チームメンバーのJSに対する意識が全体的に変わって導入障壁が低くなった

## まとめ

- 業務でJS触る機会が0だったとしても3ヶ月あれば結構イケる
- 他にやりたいことができてもなるべく我慢してJSやるの大事
- あとは実践あるのみ（※無謀な挑戦にならなくて済んだ）

## 結果

**JSが好きになった&#x1f917;**


※ この内容は[「slideship Tech Dive vol.1 フロントエンド特集」でLTしてきた」](http://taisablog.com/archives/667)で発表した内容をベースにしています。
