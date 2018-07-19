「はじめてのフロントエンド開発」という共著を出版しました

『React，Angular，Vue.js，React Nativeを使って学ぶ はじめてのフロントエンド開発』という共著本を2018年5月9日に出版しました。自分は環境構築の章を担当しました。おかげさまでパンダ本として現在売れ行きは好調ですが、一方で誤植もいくつか見つかっているのでそれらの情報についてもこの投稿でお知らせしたいと思います。

[amazonjs asin="4774197068" locale="JP" title="React、Angular、Vue.js、React Nativeを使って学ぶ はじめてのフロントエンド開発"]

どんな本かなどについては、共著者である新井正貴のブログ投稿に以下の内容がまとまっているのでこちらにて確認してみてください。

- どんな本か
- こんな方におすすめ
- 書いたきっかけ
- パンダの由来
- サポートリポジトリ

<blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://massa142.hatenablog.com/entry/2018/05/12/161236">「はじめてのフロントエンド開発」という本を書きました - massa142's blog</a></h4><p>共著者として参加していた書籍『React，Angular，Vue.js，React Nativeを使って学ぶ はじめてのフロントエンド開発』が、2018/5/9に 技術評論社 さまより発売となりました。 React、Angular、Vue.js、React Nativeそれぞれが、同じサーバの APIを参照し、同様の機能を持ったアプリケーションとして作成します。React Nativeは、ネイティブアプリを開発するための フレームワークなため、SPA（Single-page application）だけでなく、 スマートフォン アプリ開発 についても学習ができます。 つまり、同一のアプリケーションを、それぞれのフロントエンド フレームワーク で作ると、作り方にどのような違いがあるのかということもわかる書籍となっているのです。 ちょっと言い過ぎかもしれませんが、 JavaScriptフロントエンド フレームワークの ロゼッタストーン と言えるかもしれません。（はじめに より） </p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

## 本書籍のアウトライン

書籍タイトルが『React，Angular，Vue.js，React Nativeを使って学ぶ はじめてのフロントエンド開発』となっていますが、フロントエンドの最新動向、環境構築、ES2015、TypeScript、Firebaseについても書かれています。パット見では分からないところもあると思うので、本書籍がどのようなアウトラインになっているかを簡単にまとめてみます。

- Part1：JavaScriptフロントエンドフレームワーク最新動向
    - 第1章：JavaScriptフロントフレームワークの興隆
    - 第2章：SPA、PWA - フロントエンド実装技術の最新トピック
- Part2：フロントエンドJavaScript開発のための基礎知識と環境構築
    - 第3章：フロントエンドJavaScript開発のための環境構築
    - 第4章：フロントエンドJavaScript開発のための基礎知識
    - 第5章：フロントエンドJavaScript開発のためのサーバ構築
- Part3：Slackライクなサンプルで比べて学ぶ React/Angular/Vue.js
    - 第6章：React入門 & 徹底活用
    - 第7章：Angular入門 & 徹底活用
    - 第8章：Vue.js入門 & 徹底活用
- Part4：Slackライクなサンプルで学ぶ React Native
    - 第9章：React Native 入門 & 徹底活用

## 本書籍の大きな流れ

Part1でJavaScriptフロントエンドの最新動向を解説し、Part2で環境構築、ES2015やTypeScriptの解説、FirebaseによるAPIサーバの構築など開発に必要な事前準備をします。Part3では、React、Angular、Vue.jsそれぞれで同一のAPIを利用してSlackライクなサンプルアプリを作りそれぞれの特徴がなるべく分かるようにしています。Part4では、React NativeでPart3と同じようにSlackライクなサンプルアプリを作ります。また、Part3、Part4はただサンプルアプリを作るだけでなく、それぞれの章の最初に入門があり、基礎知識を解説してからアプリをつくる流れになっています。

## 各Partをもう少し補足説明

### Part 1：JavaScriptフロントエンドフレームワーク最新動向

第1章では、React、Angular、Vue.js、React Nativeに関する解説や比較表もありますが、それ以外のフレームワーク（Polymer、Ember.js、Riot.js、Vanilla.js、Native Script、Weex、A-Frame、React VR）についてもそれぞれジャンル分けをしつつ取り上げて解説しています。第2章では、SPA、PWAに関連する技術的な内容（クライアントサイドルーティング、CSS in JS、コンポーネント指向、SSRとプリレンダリング、バーチャルDOM、MVCとMVPとMVVM、Flux、PWA、Electronなど）を取り上げて解説しています。Part1を読むことで最新のJavaScriptフレームワークの動向をつかみつつ、フロントエンドに関する技術的な内容などを全体的に把握することができると思います。

### Part 2：フロントエンドJavaScript開発のための基礎知識と環境構築

第3章では、node.jsのインストールから、npm、package.json、webpack、IDE（VS Code）まで、開発に必要な環境構築について取り上げて解説しています。既に環境がある人にとっては飛ばしても良いですし、一方で環境構築周りで躓く人も一定数いると思うのでその場合はこの章を進めていけば環境を整えることができます。第4章では、ES2015、TypeScriptについて解説しています。第5章では、Firebaseを使ってAPIサーバを立ち上げるのですが、この章を進めていけばさくっと立ち上げられます。

### Part 3、4：Slackライクなサンプルで比べて学ぶ React/Angular/Vue.js、Slackライクなサンプルで学ぶ React Native

第6、7、8、9章ではそれぞれまず各フレームワークやライブラリの入門ということで、仕組みや特徴について解説しています。入門のあとにサンプルアプリを作るという流れになります。本書籍のコンセプトとして、特にPart3、4については読み進めるよりも実際にコードを書いて動かしてみてほしいというのがあります。中には「はじめての」と書いてある割には敷居が高いと感じる人もいるかもしれませんが、とにかく書いて動かしてみて違いを感じてみてほしいです。ただ他の章と比べてボリュームがあるのでご注意ください。

## まとめ

自分は去年のはじめにJavaScriptのキャッチアップをしてプロダクトに適用しようと決めて活動していました（言い方を変えると脱jQueryをしてもっと楽がしたいと）。それでまずES5、ES2015、TypeScript、webpackを触りつつ、どのフレームワーク/ライブラリを使うかを選定する為に、チームメンバーで分担してReact、Angular、Vue.jsを触るなどのキャッチアップをしてもらい発表会をして使うフレームワークを決めました。最終的にはVue.jsにしてプロダクトをつくったのですが、そのときのプロダクトの特徴でもありますが、出来上がったあとこれらを全部jQueryでやってたらやばかったな。という経験をしました。また、去年やったキャッチアップまでの活動は本書籍に詰め込まれてるように思います。なのでこれからやろうという方は是非参考にしてみてください。

去年のフロントエンド勉強会でLTしてきた時の記事とスライドは以下ですので合わせて参考にしてみてください。

<blockquote class="embedly-card" data-card-controls="0"><h4><a href="http://taisablog.com/archives/667">「slideship Tech Dive vol.1 フロントエンド特集」でLTしてきた</a></h4><p>connpassリンク slideship Tech Dive v1.0 #React / ReactVR / #VueJs Webフロントエンド特集 「slideship Tech Dive v1.0 #React / ReactVR / #VueJs Webフロントエンド特集」でLTしてきた。タイムテーブルは、メインセッションがVue、ReactVR、React SPAになっていてその後LT4本で親睦会という構成。自分は「フロントエンド速習コース」というタイトルでLTをさせてもらった。</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

<iframe width="460" height="284" allowfullscreen frameborder=0 src="https://slideship.com/embed/presentations/UKchseXVcVnDXVPWfkUsxb/"></iframe>

## サポートリポジトリ

本書に登場するコードは、以下のリポジトリで公開しています。

https://github.com/okachijs/jsframeworkbook

## 誤植情報

誤植情報については以下のページにまとめていて、随時更新していますので何かあったらTweetしたりissuesにあげてもらえると助かります。

https://github.com/okachijs/jsframeworkbook/wiki/%E8%AA%A4%E6%A4%8D%E8%A8%82%E6%AD%A3%E6%83%85%E5%A0%B1
