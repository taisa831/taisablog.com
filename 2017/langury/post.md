「まつもとゆきひろ 言語のしくみ」と「Talk Python #100」のGuidoの回をたまたま同時期に見聞きしたら言語の歴史が知りたくなった。言語は様々存在するがそれらは少なからず他の言語の影響を受け他の言語に影響を与えている。なのでその影響関係をwikipediaの情報を元に見える化してみた。

<img src="http://taisablog.com/wp-content/uploads/2017/05/1.jpg" alt="" width="1259" height="2005" class="aligncenter size-full wp-image-454" />

これだけ見ると複雑に絡み合ってよくわからなけど、見たい言語をクリックすると、以下のようにどの言語に影響を受けどの言語に影響を与えたかが見えるようになる。また影響を受けた言語がさらにどの言語に影響を受けたというのもひと目で分かる。

<img src="http://taisablog.com/wp-content/uploads/2017/05/2.png" alt="" width="579" height="671" class="aligncenter size-full wp-image-455" />

ソースはこちら
<blockquote class="embedly-card"><h4><a href="https://github.com/taisa831/Langury">taisa831/Langury</a></h4><p>Contribute to Langury development by creating an account on GitHub.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

ここで取り上げた言語は今のところwikipediaのこの部分を対象にしている。

<img src="http://taisablog.com/wp-content/uploads/2017/05/3f7fc114e4606850a9cc05ca98f152cf.png" alt="" width="1217" height="265" class="aligncenter size-full wp-image-458" />

## 言語について
wikipediaでは上記のように年代別に分かれていて見やすかったのでそのくくりでみてみる。

### 1950年代

#### [FORTRAN](https://ja.wikipedia.org/wiki/FORTRAN)
- 1954年にIBMの[ジョン・バッカス](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%BB%E3%83%90%E3%83%83%E3%82%AB%E3%82%B9)によって考案された
- コンピュータにおいて広く使われたプログラミング史上最初の高水準言語

#### [LISP](https://ja.wikipedia.org/wiki/LISP)
- 設計者は[ジョン・マッカーシー](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%BB%E3%83%9E%E3%83%83%E3%82%AB%E3%83%BC%E3%82%B7%E3%83%BC)
- 1958年にはじめて設計され、高水準プログラミング言語の中ではFORTRANに次いで2番目に古い
- LISPの名前は、「list processor」に由来している

#### [ALGOL](https://ja.wikipedia.org/wiki/ALGOL)
- 設計者：バウアー、 ルティシュハウザー、 サメルソン、 バッカス、 パリス、 ナウア、 ファン・ワインハールデン、 マッカーシー他
- 「ALGOL」は「アルゴリズム言語」を意味する英語「algorithmic language」に由来する
- ほぼ同世代の高水準言語であるFORTRAN、LISP、COBOLに比べて最も成功した
- FORTRANで明らかとなった問題を防ぐよう設計され、BCPL、B、Pascal、Simula、Cといった様々なプログラミング言語に影響を与えた
- BEGEN END記法が特徴

### 1960年代

#### [CPL）](https://ja.wikipedia.org/wiki/CPL_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))
- Combined Programming Language、「統合プログラミング言語」の意
- C言語の遠い祖先となった言語
- CPLはケンブリッジ大学の数学研究所とロンドン大学コンピュータ部の共同プロジェクトとして1960年代に開発された
- [クリストファー・ストレイチー](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%88%E3%83%95%E3%82%A1%E3%83%BC%E3%83%BB%E3%82%B9%E3%83%88%E3%83%AC%E3%82%A4%E3%83%81%E3%83%BC)が関与

#### [BASIC](https://ja.wikipedia.org/wiki/BASIC)
- 1964年、米国ダートマス大学にて、数学者ジョン・ケメニーとトーマス・カーツにより、教育用などを目的としてダートマスBASICが開発された
- 初心者向けのプログラミング言語として、1970年代以降のコンピュータ（特にパソコン）で広く使われた
- Windowsアプリケーションの主力開発言語であるVisual Basicの文法に影を残している

#### [PL/I](https://ja.wikipedia.org/wiki/PL/I)
- 「programming language one」に由来する（ピーエルワン）
- 1964年に生まれ、教育機関、商用、工業で使用され現在も使われている

#### [BCPL](https://ja.wikipedia.org/wiki/BCPL)
- Basic Combined Programming Language
- 1966年にケンブリッジ大学の[マーチン・リチャーズ](https://ja.wikipedia.org/w/index.php?title=%E3%83%9E%E3%83%BC%E3%83%81%E3%83%B3%E3%83%BB%E3%83%AA%E3%83%81%E3%83%A3%E3%83%BC%E3%82%BA&action=edit&redlink=1)が設計
- B言語の基礎で、B言語から派生したC言語は文法的にBCPLの亜種

#### [Simula](https://ja.wikipedia.org/wiki/Simula)
- [オルヨハン・ダール](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%AB%E3%83%A8%E3%83%8F%E3%83%B3%E3%83%BB%E3%83%80%E3%83%BC%E3%83%AB)と[クリステン・ニガード](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%86%E3%83%B3%E3%83%BB%E3%83%8B%E3%82%AC%E3%83%BC%E3%83%89)によってALGOL60を拡張する形で1960年代に開発が始められたシミュレーション用途のプログラミング言語（登場時期は1967年）
- 最初期のオブジェクト指向言語であるとも言われる
- begin...endブロック

#### [LOGO](https://ja.wikipedia.org/wiki/LOGO)
- 1967年に教育（特に構成主義教育）のために、ダニエル・G・ボブロウ（英語版）、Wally Feurzeig、シーモア・パパート、シンシア・ソロモンによって開発された
- 名称はギリシャ語のlogos（言葉）に由来する

#### [B](https://ja.wikipedia.org/wiki/B%E8%A8%80%E8%AA%9E)
- AT&Tベル研究所の[ケン・トンプソン](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%B3%E3%83%BB%E3%83%88%E3%83%B3%E3%83%97%E3%82%BD%E3%83%B3)によって開発された
- 1969年頃に登場
- トンプソン自身とデニス・リッチー、ブライアン・カーニハンによって改良を加えられ、NewB(NB)を経てC言語へと発展した

### 1970年代

### 1980年代

### 1990年代

### 2000年代

#### [C#](https://ja.wikipedia.org/wiki/C_Sharp)
- 2000年にマイクロソフトが開発した
- 開発にはボーランド社のTurbo PascalやDelphiを開発したアンダース・ヘルスバーグを筆頭に多数のDelphi開発陣が参加している

#### [Scala](https://ja.wikipedia.org/wiki/Scala)
- 2003年の暮れに内部で公開された後、2004年の始めにJavaのプラットフォームにリリースされた
- ScalaはJavaプラットフォーム（Java仮想マシン）上で動作する
- スイス・ローザンヌにあるスイス連邦工科大学 (EPFL) のマーティン・オーダスキー教授によって設計された

#### [D](https://ja.wikipedia.org/wiki/D%E8%A8%80%E8%AA%9E)
- C言語をベースとしABI互換を保ちつつも、テンプレートによるジェネリックプログラミングやオブジェクト指向プログラミング、関数型プログラミングなどをサポートする
- 2001年にウォルター・ブライト, アンドレイ・アレキサンドレスクによって設計された

#### [F#](https://ja.wikipedia.org/wiki/F_Sharp)
- マイクロソフトが開発した.NET Framework向け言語
- 2005年に登場
- F#のFはFunctional programming language（関数型プログラミング言語）およびSystem Fが由来で、Fortranとは無関係

#### [Go](https://ja.wikipedia.org/wiki/Go_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))
- 2009年にGoogleによって開発され、設計に[ロブ・パイク](https://ja.wikipedia.org/wiki/Go_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))、[ケン・トンプソン](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%B3%E3%83%BB%E3%83%88%E3%83%B3%E3%83%97%E3%82%BD%E3%83%B3)らが関わっている。
- 軽量スレッディングのための機能、Pythonのような動的型付け言語のようなプログラミングの容易性が特長

### 2010年代

#### [Ceylon](https://ja.wikipedia.org/wiki/Ceylon)
- レッドハット社によって開発されたプログラミング言語およびソフトウェア開発キット
- Java言語をもとに作られ、Java仮想マシンおよびJavaScript実行環境上で動作する

#### [Rust](https://ja.wikipedia.org/wiki/Rust_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))
- 2010年にMozillaによって開発された
- 関数型プログラミング、並列アクターモデル、手続き型プログラミング、オブジェクト指向プログラミングをサポートする実用的な言語を目指している

#### [Dart](https://ja.wikipedia.org/wiki/Dart)
- 2011年にグーグル社から公開された
- JavaScriptの代替となることを目的に作られた

#### [Elixir](https://ja.wikipedia.org/wiki/Elixir_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))
- José Valimによて開発され2012年に登場した
- 並行処理の機能や関数型といった特徴を持つ、Erlangの仮想マシン (BEAM) 上で動作するコンピュータプログラミング言語
- Erlangで実装されているため、分散システム、耐障害性、ソフトリアルタイムシステム等の機能を使用することができる
- 拡張機能として、マクロを使ったメタプログラミング、そしてポリモーフィズムなどのプログラミング・パラダイムもプロトコルを介して実装されている

#### [Hack](https://ja.wikipedia.org/wiki/Hack_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))
- 2014年にFacebookにより開発された
- PHP実行環境のHipHop仮想マシン (HHVM) で動作する

#### [Swift](https://ja.wikipedia.org/wiki/Swift_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))
- 2014年のアップルのWWDCにて発表された
- LLVMコンパイラが使われており、ライブコーディングに対応していることが特徴

[amazonjs asin="4822239179" locale="JP" title="まつもとゆきひろ 言語のしくみ"]

[podcast]
