「<a href="https://www.amazon.co.jp/%E3%81%BE%E3%81%A4%E3%82%82%E3%81%A8%E3%82%86%E3%81%8D%E3%81%B2%E3%82%8D-%E8%A8%80%E8%AA%9E%E3%81%AE%E3%81%97%E3%81%8F%E3%81%BF-ebook/dp/B01N7JZXMD?SubscriptionId=AKIAJPATVFHYPKSNTR4A&amp;tag=joghmasami-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=B01N7JZXMD" title="まつもとゆきひろ 言語のしくみ" target="_blank">まつもとゆきひろ 言語のしくみ</a>」と「<a href="https://talkpython.fm/episodes/show/100/python-past-present-and-future-with-guido-van-rossum" target="_blank">Talk Python #100</a>」のGuidoの回をたまたま同時期に見聞きしたら言語の歴史を調べたくなった。言語は少なからず他の言語から影響を受けたり、他の言語に影響を与えたりしている。ということでその影響関係をwikipediaの情報を元に見える化してみた。

<a href="http://taisablog.com/wp-content/uploads/2017/05/all.jpg"><img src="http://taisablog.com/wp-content/uploads/2017/05/all.jpg" alt="" width="1440" height="2212" class="aligncenter size-full wp-image-576" /></a>

ぐちゃ〜。。。これだけ見ると複雑に絡み合ってよくわからない。ただ見たい言語をクリックするとその言語がフォーカスされどの言語がどの言語に影響を与えどの言語に影響を受けたかが見やすくなる。

<a href="http://taisablog.com/wp-content/uploads/2017/05/1989466d3d1d72210569651b013b3dec.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/1989466d3d1d72210569651b013b3dec.png" alt="" width="619" height="804" class="aligncenter size-full wp-image-509" /></a>

## 使い方

ソースはこちら

### GitHub
<blockquote class="embedly-card"><h4><a href="https://github.com/taisa831/Langury">taisa831/Langury</a></h4><p>Contribute to Langury development by creating an account on GitHub.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

多重継承が可能なC++で（ただクラスをつくってるだけ）doxygenとgraphvizを使って出力している。

## インストール

DoxygenとGraphvizをインストールする。

```
brew install doxygen
brew install graphviz
```

Languryをクローンする。

```
git clone git@github.com:taisa831/Langury.git
cd Langury
```

## 出力

doxygenコマンドを実行してHTMLを出力して開く。

<pre>
doxygen
open html/index.html
select Classes -> Class Hierarchy
</pre>

### 対象言語

ここで取り上げた言語はwikipediaの以下を対象にした。
<small>※一部記載なし。</small>
<small>※実際とは異なっていたり足りてない箇所があるご注意ください。</small>

<a href="http://taisablog.com/wp-content/uploads/2017/05/3f7fc114e4606850a9cc05ca98f152cf.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/3f7fc114e4606850a9cc05ca98f152cf.png" alt="" width="1217" height="265" class="aligncenter size-full wp-image-458" /></a>

## 各言語について

- **[1950年代](#1950)**：[FORTRAN](#FORTRAN)、[LISP](#LISP)、[ALGOL](#ALGOL)、[COBOL](#COBOL)
- **[1960年代](#1960)**：[CPL](#CPL)、[BASIC](#BASIC)、[PL/I](#PL)、[BCPL](#BCPL)、[Simula](#Simula)、[LOGO](#LOGO)、[B](#B)
- **[1970年代](#1970)**：[Forth](#Forth)、[Pascal](#Pascal)、[C](#C)、[Prolog](#Prolog)、[Smalltalk](#Smalltalk)、[ML](#ML)、[AWK](#AWK)、[Ada](#Ada)
- **[1980年代](#1980)**：[C++](#CPlusPlus)、[Objective-C](#ObjectiveC)、[Common Lisp](#CommonLisp)、[Eiffel](#Eiffel)、[Erlang](#Erlang)、[Perl](#Perl)
- **[1990年代](#1990)**：[Python](#Python)、[Tcl/Tk](#Tcl)、[Haskell](#Haskell)、[Visual Basic](#VB)、[Ruby](#Ruby)、[Lua](#Lua)、[Delphi](#Delphi)、[Java](#Java)、[JavaScript](#JavaScript)、[PHP](#PHP)、[OCaml](#OCaml)、[SuperCollider](#SuperCollider)、[R](#R)
- **[2000年代](#2000)**：[C#](#CSharp)、[Scala](#Scala)、[D](#D)、[F#](#FSharp)、[Go](#Go)
- **[2010年代](#2010)**：[Ceylon](#Ceylon)、[Rust](#Rust)、[Dart](#Dart)、[Elixir](#Elixir)、[Hack](#Hack)、[Swift](#Swift)

### <a name='1950'>1950年代</a>

#### <a href='https://ja.wikipedia.org/wiki/FORTRAN' name='FORTRAN'>FORTRAN</a>
1954年にIBMの[ジョン・バッカス](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%BB%E3%83%90%E3%83%83%E3%82%AB%E3%82%B9)によって考案された。コンピュータにおいて広く使われたプログラミング史上最初の高水準言語。

<a href="http://taisablog.com/wp-content/uploads/2017/05/fortran.jpg"><img src="http://taisablog.com/wp-content/uploads/2017/05/fortran.jpg" alt="" width="1578" height="867" class="aligncenter size-full wp-image-511" /></a>

#### <a href='https://ja.wikipedia.org/wiki/LISP' name='LISP'>LISP</a>
1958年に[ジョン・マッカーシー](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%BB%E3%83%9E%E3%83%83%E3%82%AB%E3%83%BC%E3%82%B7%E3%83%BC)によってはじめて設計された。高水準プログラミング言語の中ではFORTRANに次いで2番目に古い。LISPの名前は「list processor」に由来している。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Lisp.jpg"><img src="http://taisablog.com/wp-content/uploads/2017/05/Lisp.jpg" alt="" width="1005" height="1547" class="aligncenter size-full wp-image-515" /></a>

#### <a href='https://ja.wikipedia.org/wiki/ALGOL' name='ALGOL'>ALGOL</a>
1950年代中ごろに開発され、多くの言語に影響を及ぼした。ACMや教科書や学術論文などでアルゴリズム記述のデファクトスタンダードとして30年以上使われ、ほぼ同世代の高水準言語であるFORTRAN、LISP、COBOLに比べて最も成功した。設計者はバウアー、 ルティシュハウザー、 サメルソン、 バッカス、 パリス、 ナウア、 ファン・ワインハールデン、 マッカーシー他。FORTRANで明らかとなった問題を防ぐよう設計された。「ALGOL」は「アルゴリズム言語」を意味する英語「algorithmic language」に由来する。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Algol.jpg"><img src="http://taisablog.com/wp-content/uploads/2017/05/Algol.jpg" alt="" width="1584" height="1035" class="aligncenter size-full wp-image-513" /></a>

#### <a href='https://ja.wikipedia.org/wiki/COBOL' name='COBOL'>COBOL</a>
1959年に事務処理用に開発されたプログラミング言語。名前は「Common Business Oriented Language」（共通事務処理用言語）に由来する。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Cobol.jpg"><img src="http://taisablog.com/wp-content/uploads/2017/05/Cobol.jpg" alt="" width="956" height="721" class="aligncenter size-full wp-image-514" /></a>

### <a name='1960'>1960年代</a>

#### <a href='(https://ja.wikipedia.org/wiki/CPL_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))' name='CPL'>CPL</a>
CPLはケンブリッジ大学の数学研究所とロンドン大学コンピュータ部の共同プロジェクトとして1960年代に開発された。C言語の遠い祖先となった言語で[クリストファー・ストレイチー](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%88%E3%83%95%E3%82%A1%E3%83%BC%E3%83%BB%E3%82%B9%E3%83%88%E3%83%AC%E3%82%A4%E3%83%81%E3%83%BC)が関与している。Combined Programming Language「統合プログラミング言語」の意。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Cpl.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Cpl.png" alt="" width="951" height="867" class="aligncenter size-full wp-image-523" /></a>

#### <a href='https://ja.wikipedia.org/wiki/BASIC' name='BASIC'>BASIC</a>
1964年に米国ダートマス大学にて数学者ジョン・ケメニーとトーマス・カーツにより教育用などを目的としてダートマスBASICが開発された。初心者向けのプログラミング言語として、1970年代以降のコンピュータ（特にパソコン）で広く使われた。Windowsアプリケーションの主力な開発言語であるVisual Basicの文法に影を残している。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Basic.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Basic.png" alt="" width="259" height="166" class="aligncenter size-full wp-image-522" /></a>

#### <a href=https://ja.wikipedia.org/wiki/PL/I name='PL'>PL/I</a>
1964年に生まれ。教育機関、商用、工業で使用され現在も使われている。「programming language one」（ピーエルワン）に由来する。

<a href="http://taisablog.com/wp-content/uploads/2017/05/PLI.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/PLI.png" alt="" width="948" height="796" class="aligncenter size-full wp-image-521" /></a>

#### <a href='https://ja.wikipedia.org/wiki/BCPL' name='BCPL'>BCPL</a>
Basic Combined Programming Language、Basic-CPLは、1966年にケンブリッジ大学の[マーチン・リチャーズ](https://ja.wikipedia.org/w/index.php?title=%E3%83%9E%E3%83%BC%E3%83%81%E3%83%B3%E3%83%BB%E3%83%AA%E3%83%81%E3%83%A3%E3%83%BC%E3%82%BA&action=edit&redlink=1)が設計した。B言語の基礎で、B言語から派生したC言語は文法的にBCPLの亜種。

<a href="http://taisablog.com/wp-content/uploads/2017/05/BCPL.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/BCPL.png" alt="" width="948" height="865" class="aligncenter size-full wp-image-520" /></a>

#### <a href=https://ja.wikipedia.org/wiki/Simula name='Simula'>Simula</a>
[オルヨハン・ダール](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%AB%E3%83%A8%E3%83%8F%E3%83%B3%E3%83%BB%E3%83%80%E3%83%BC%E3%83%AB)と[クリステン・ニガード](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%86%E3%83%B3%E3%83%BB%E3%83%8B%E3%82%AC%E3%83%BC%E3%83%89)によってALGOL60を拡張する形で1960年代に開発が始められたシミュレーション用途のプログラミング言語（登場時期は1967年）。世界最初のオブジェクト指向言語であると言われる。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Simula.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Simula.png" alt="" width="1070" height="655" class="aligncenter size-full wp-image-519" /></a>

#### <a href='https://ja.wikipedia.org/wiki/LOGO' name='LOGO'>LOGO</a>
1967年に教育（特に構成主義教育）のために、ダニエル・G・ボブロウ、Wally Feurzeig、シーモア・パパート、シンシア・ソロモンによって開発された。名称はギリシャ語のlogos（言葉）に由来する。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Logo.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Logo.png" alt="" width="869" height="522" class="aligncenter size-full wp-image-518" /></a>

#### <a href='https://ja.wikipedia.org/wiki/B%E8%A8%80%E8%AA%9E' name='B'>B</a>
AT&Tベル研究所の[ケン・トンプソン](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%B3%E3%83%BB%E3%83%88%E3%83%B3%E3%83%97%E3%82%BD%E3%83%B3)によって開発され1969年頃に登場した。トンプソン自身とデニス・リッチー、ブライアン・カーニハンによって改良を加えられ、NewB(NB)を経てC言語へと発展した。

<a href="http://taisablog.com/wp-content/uploads/2017/05/B.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/B.png" alt="" width="963" height="860" class="aligncenter size-full wp-image-517" /></a>

### <a name='1970'>1970年代</a>

#### <a href='https://ja.wikipedia.org/wiki/Forth' name='Forth'>Forth</a>
スタック指向言語

<a href="http://taisablog.com/wp-content/uploads/2017/05/Forth.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Forth.png" alt="" width="203" height="162" class="aligncenter size-full wp-image-533" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Pascal' name='Pascal'>Pascal</a>
[ニクラウス・ヴィルト](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%82%AF%E3%83%A9%E3%82%A6%E3%82%B9%E3%83%BB%E3%83%B4%E3%82%A3%E3%83%AB%E3%83%88)の設計による言語。登場時期は1970年。名前は、哲学者・数学者・科学者で、機械式計算機を製作するなど技術者でもあったブレーズ・パスカルにあやかったもの。ALGOL（直接的にはその一派生であるヴィルトが関与したALGOL W）などの影響があるが、個人の設計であることに由来する簡素だがよく整った言語仕様（構文と意味）を持つ。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Pascal.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Pascal.png" alt="" width="938" height="711" class="aligncenter size-full wp-image-532" /></a>

#### <a href='https://ja.wikipedia.org/wiki/C%E8%A8%80%E8%AA%9E' name='C'>C</a>
1972年にAT&Tベル研究所の[デニス・リッチー](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%8B%E3%82%B9%E3%83%BB%E3%83%AA%E3%83%83%E3%83%81%E3%83%BC)が主体となって開発した言語。AT&Tベル研究所の[ケン・トンプソン](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%B3%E3%83%BB%E3%83%88%E3%83%B3%E3%83%97%E3%82%BD%E3%83%B3)が開発したB言語の改良として誕生した。

<a href="http://taisablog.com/wp-content/uploads/2017/05/C.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/C.png" alt="" width="951" height="860" class="aligncenter size-full wp-image-531" /></a>

#### <a href'https://ja.wikipedia.org/wiki/Prolog' name='Prolog'>Prolog</a>
1972年頃にフランスのアラン・カルメラウアーとフィリップ・ルーセルによって考案された非手続き型言語。名称は「論理を使ったプログラミング」を意味するフランス語「programmation en logique」に由来する。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Prolog.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Prolog.png" alt="" width="384" height="294" class="aligncenter size-full wp-image-530" /></a>

#### <a href'https://ja.wikipedia.org/wiki/Smalltalk' name='Smalltalk'>Smalltalk</a>
Simulaのオブジェクト（およびクラス）、LISPの徹底した動的性、LOGOのタートル操作や描画機能に、[アラン・ケイ](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%82%B1%E3%82%A4)の「メッセージング」というアイデアを組み合わせて作られたクラスベースの純粋オブジェクト指向言語。1972年に開発が開始され1980年に公開された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Smalltalk.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Smalltalk.png" alt="" width="852" height="583" class="aligncenter size-full wp-image-529" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Scheme' name='Scheme'>Scheme</a>
構文スコープを持つLISPの方言の1つ。登場時期は1975年。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Scheme.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Scheme.png" alt="" width="333" height="438" class="aligncenter size-full wp-image-528" /></a>

#### <a href='https://ja.wikipedia.org/wiki/ML_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)' name='ML'>ML</a>
関数型言語の1つであるが、純粋関数型でない特徴や機能を持つ。登場時期は1970年代。

<a href="http://taisablog.com/wp-content/uploads/2017/05/ML.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/ML.png" alt="" width="698" height="443" class="aligncenter size-full wp-image-527" /></a>

#### <a href='https://ja.wikipedia.org/wiki/AWK' name='AWK'>AWK</a>
AWK(オーク)はベル研究所におけるUNIX開発の過程で、sedやgrepのようなテキスト処理ツールに演算機能を持たせた拡張ツールとして開発された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/AWK.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/AWK.png" alt="" width="391" height="364" class="aligncenter size-full wp-image-526" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Ada' name='Ada'>Ada</a>
Ada(エイダ)は強力な言語機能を豊富に持ち、高度な型の体系をもつ言語の1つで構文はAlgol系。登場時期は1983年で設計者は[ジャン・イシュビア](https://ja.wikipedia.org/w/index.php?title=%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%BB%E3%82%A4%E3%82%B7%E3%83%A5%E3%83%93%E3%82%A2&action=edit&redlink=1)。史上初のプログラマとされる[エイダ・ラブレス](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%A4%E3%83%80%E3%83%BB%E3%83%A9%E3%83%96%E3%83%AC%E3%82%B9)の名前にちなんでAdaと命名されている。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Ada.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Ada.png" alt="" width="766" height="877" class="aligncenter size-full wp-image-525" /></a>

### <a name='1980'>1980年代</a>

#### <a href='https://ja.wikipedia.org/wiki/C%2B%2B' name='CPlusPlus'>C++</a>
汎用プログラミング言語の1つ。1983年にベル研究所のコンピュータ科学者の[ビャーネ・ストロヴストルップ](https://ja.wikipedia.org/wiki/%E3%83%93%E3%83%A3%E3%83%BC%E3%83%8D%E3%83%BB%E3%82%B9%E3%83%88%E3%83%AD%E3%83%B4%E3%82%B9%E3%83%88%E3%83%AB%E3%83%83%E3%83%97)が、C言語の拡張として開発した。

<a href="http://taisablog.com/wp-content/uploads/2017/05/CPlusPlus.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/CPlusPlus.png" alt="" width="782" height="879" class="aligncenter size-full wp-image-547" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Objective-C' name='ObjectiveC'>Objective-C</a>
C言語をベースにSmalltalk型のオブジェクト指向機能を持たせた上位互換言語。NeXT、macOSのOSに標準付属する公式開発言語。1983年に[ブラッド・コックス](https://ja.wikipedia.org/w/index.php?title=%E3%83%96%E3%83%A9%E3%83%83%E3%83%89%E3%83%BB%E3%82%B3%E3%83%83%E3%82%AF%E3%82%B9&action=edit&redlink=1)によって開発された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/ObjectiveC.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/ObjectiveC.png" alt="" width="483" height="733" class="aligncenter size-full wp-image-546" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Common_Lisp' name='CommonLisp'>Common Lisp</a>
関数型言語でLISP方言の一種。登場時期1984年で1994年にANSIにより標準化された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/CommonLisp.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/CommonLisp.png" alt="" width="253" height="449" class="aligncenter size-full wp-image-545" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Eiffel' name='Eiffel'>Eiffel</a>
頑健なソフトウェアの生産に注力したオブジェクト指向言語。1985年に[バートランド・メイヤー](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%BC%E3%83%88%E3%83%A9%E3%83%B3%E3%83%89%E3%83%BB%E3%83%A1%E3%82%A4%E3%83%A4%E3%83%BC)によって考案された。言語名の由来は、エッフェル塔ではなく、その設計者の[ギュスターヴ・エッフェル](https://ja.wikipedia.org/wiki/%E3%82%AE%E3%83%A5%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%B4%E3%83%BB%E3%82%A8%E3%83%83%E3%83%95%E3%82%A7%E3%83%AB)。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Eiffel.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Eiffel.png" alt="" width="799" height="878" class="aligncenter size-full wp-image-544" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Erlang' name='Erlang'>Erlang</a>
汎用的な用途に使うことができる並行処理指向言語および実行環境。直列処理のサブセットの言語は、関数型言語。登場時期は1986年で開発者は[エリクソン](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%BD%E3%83%B3)。Erlangは数学者の[アグナー・アーラン](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B0%E3%83%8A%E3%83%BC%E3%83%BB%E3%82%A2%E3%83%BC%E3%83%A9%E3%83%B3)から名前をとって命名された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Erlang.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Erlang.png" alt="" width="398" height="510" class="aligncenter size-full wp-image-543" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Perl' name='Perl'>Perl</a>
[ラリー・ウォール](https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%AA%E3%83%BC%E3%83%BB%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%AB)によって開発された言語。登場時期は1987年。プログラマの三大美徳を唱えた。実用性と多様性を重視しており、C言語やsed、awk、シェルスクリプトなど他のプログラミング言語の優れた機能を取り入れている。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Perl.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Perl.png" alt="" width="516" height="811" class="aligncenter size-full wp-image-542" /></a>

### <a name='1990'>1990年代</a>

#### <a href='https://ja.wikipedia.org/wiki/Python' name='Python'>Python</a>
汎用のプログラミング言語である。コードがシンプルで扱いやすく設計され、C言語などに比べて、さまざまなプログラムを分かりやすく、少ないコード行数で書けるといった特徴がある。1991年にオランダ人の[グイド・ヴァンロッサム](https://ja.wikipedia.org/wiki/%E3%82%B0%E3%82%A4%E3%83%89%E3%83%BB%E3%83%B4%E3%82%A1%E3%83%B3%E3%83%AD%E3%83%83%E3%82%B5%E3%83%A0)が開発した。名前の由来はイギリスのテレビ局BBCが製作したコメディ番組『空飛ぶモンティ・パイソン』。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Python.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Python.png" alt="" width="626" height="803" class="aligncenter size-full wp-image-556" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Tcl/Tk' name='Tcl'>Tcl/Tk</a>
ティクル・ティーケーはスクリプト言語Tclと、そのGUIツールキットTkを指す。Tclがカリフォルニア大学バークレー校のジョン・ケネス・オースターハウト博士により最初に開発され、TkはTclように開発され、1990年代初頭にTclにバンドルされる形で公開された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/TclTk.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/TclTk.png" alt="" width="235" height="160" class="aligncenter size-full wp-image-555" /></a>

#### <a href'https://ja.wikipedia.org/wiki/Haskell' name='Haskell'>Haskell</a>
非正格な評価を特徴とする純粋関数型言語である。名称は数学者であり論理学者である[ハスケル・カリー](https://ja.wikipedia.org/wiki/Haskell)に由来する。高階関数や静的多相型付け、定義可能な演算子、例外処理といった多くの言語で採用されている現代的な機能に加え、パターンマッチングやカリー化、リスト内包表記、ガードといった多くの特徴的な機能を持っている。最初の版の Haskell（Haskell 1.0）は1990年に作成された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Haskell.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Haskell.png" alt="" width="719" height="432" class="aligncenter size-full wp-image-554" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Microsoft_Visual_Basic' name='VB'>Visual Basic</a>
マイクロソフトが1990年代に開発していたプログラミング言語およびその処理系。

#### <a href='https://ja.wikipedia.org/wiki/Ruby' name='Ruby'>Ruby</a>
[まつもとゆきひろ（通称 Matz）](https://ja.wikipedia.org/wiki/%E3%81%BE%E3%81%A4%E3%82%82%E3%81%A8%E3%82%86%E3%81%8D%E3%81%B2%E3%82%8D)により開発されたオブジェクト指向スクリプト言語。1995年12月にfj上で発表された。Perlが真珠から名付けられたので、それにならって宝石から名付けようと考え、いくつかの候補からRubyを選んだ。最終候補に残ったのがCoral(サンゴ)とRubyで、結局Rubyの方が短く美しいということで採用された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Ruby.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Ruby.png" alt="" width="903" height="799" class="aligncenter size-full wp-image-553" /></a>

#### <a href'https://ja.wikipedia.org/wiki/Lua' name='Lua'>Lua</a>
リオデジャネイロ・カトリカ大学の、主としてDepartment of Computer Science（コンピュータ科学科）and・or Computer Graphics Technology Group (Tecgraf) に属する、Roberto Ierusalimschy, Waldemar Celes, Luiz Henrique de Figueiredoらによって設計開発されたスクリプト言語およびその処理系の実装。手続き型言語として、また、プロトタイプベースのオブジェクト指向言語としても利用することができ、関数型言語、データ駆動型としての要素も併せ持っている。Luaという名前は、ポルトガル語の月に由来する。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Lua.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Lua.png" alt="" width="218" height="172" class="aligncenter size-full wp-image-552" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Delphi' name='Delphi'>Delphi</a>
Delphi（デルファイ）は、コンソール (CUI)、デスクトップ (GUI)、Web、モバイルアプリケーション開発のための統合開発環境 (IDE)で1995年に登場した 。DelphiのコンパイラはPascalを独自に拡張したObject Pascal (Delphi 言語) を用いて、プラットフォーム毎にネイティブコードを生成する (Windows, macOS, iOS, Android)。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Delphi.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Delphi.png" alt="" width="337" height="224" class="aligncenter size-full wp-image-551" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Java' name='Java'>Java</a>
JavaおよびJavaプラットフォームは、1990年代前半当時、サン・マイクロシステムズに居た[ジェームズ・ゴスリン](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%83%BC%E3%83%A0%E3%82%BA%E3%83%BB%E3%82%B4%E3%82%B9%E3%83%AA%E3%83%B3)、[ビル・ジョイ](https://ja.wikipedia.org/wiki/%E3%83%93%E3%83%AB%E3%83%BB%E3%82%B8%E3%83%A7%E3%82%A4)などの人々によって設計・開発された。それ以前のさまざまな言語の良い部分を引き継ぎ、欠点を克服するよう設計され、オブジェクトモデルはSmalltalkやObjective-Cと同様の簡潔なものを採用している。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Java.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Java.png" alt="" width="556" height="883" class="aligncenter size-full wp-image-550" /></a>

#### <a href='https://ja.wikipedia.org/wiki/JavaScript' name='JavaScript'>JavaScript</a>
JavaScriptはネットスケープコミュニケーションズの[ブレンダン・アイク](https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AC%E3%83%B3%E3%83%80%E3%83%B3%E3%83%BB%E3%82%A2%E3%82%A4%E3%82%AF)によって開発され、Netscape Navigator 2.0で実装された。開発当初はLiveScriptと呼ばれていたが、1995年にサン・マイクロシステムズ（現・オラクル）が開発したプログラミング言語Javaが当時大きな注目を浴びており、ネットスケープとサン・マイクロシステムズが業務提携していた事もあったため、JavaScriptという名前に変更された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/JavaScript.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/JavaScript.png" alt="" width="1229" height="850" class="aligncenter size-full wp-image-549" /></a>

#### <a href='https://ja.wikipedia.org/wiki/PHP_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)' name='PHP'>PHP</a>
"The PHP Development Team" によってコミュニティベースで開発されているオープンソースの汎用プログラミング言語であり、特にサーバーサイドで動的なウェブページ作成するための機能を多く備える。 名称のPHPは再帰的頭字語である"PHP: Hypertext Preprocessor"を意味し、「PHPはHTMLのプリプロセッサである」とPHP自身を再帰的に説明している。 元々は「個人的なホームページ」を意味する英語の"Personal Home Page"に由来し、プログラムが大きく書き直されたバージョン3から現在の意味となった。設計者は[ラスマス・ラードフ](https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%BB%E3%83%A9%E3%83%BC%E3%83%89%E3%83%95)。登場時期は1995年。

<a href="http://taisablog.com/wp-content/uploads/2017/05/PHP.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/PHP.png" alt="" width="771" height="868" class="aligncenter size-full wp-image-557" /></a>

#### <a href'https://ja.wikipedia.org/wiki/OCaml' name='OCaml'>OCaml</a>
オーキャムル、オーキャメルは、フランスの[INRIA](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9%E5%9B%BD%E7%AB%8B%E6%83%85%E5%A0%B1%E5%AD%A6%E8%87%AA%E5%8B%95%E5%88%B6%E5%BE%A1%E7%A0%94%E7%A9%B6%E6%89%80)が開発したプログラミング言語MLの方言とその実装。MLの各要素に加え、オブジェクト指向的要素の追加が特長である。かつてはObjective Camlという名前で、その略としてOCamlと広く呼ばれていたが、正式にOCamlに改名された。登場時期は1996年。

<a href="http://taisablog.com/wp-content/uploads/2017/05/OCaml.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/OCaml.png" alt="" width="206" height="228" class="aligncenter size-full wp-image-548" /></a>

#### <a href='https://ja.wikipedia.org/wiki/SuperCollider' name='SuperCollider'>SuperCollider</a>
音響合成用プログラミング環境および言語。オブジェクト指向型で、リアルタイム音響合成とアルゴリズミック・コンポジションに特化している。SuperColliderは、1996年にJames McCartneyによって開発・発表された。

#### <a href='https://ja.wikipedia.org/wiki/R%E8%A8%80%E8%AA%9E' name='R'>R</a>
オープンソース・フリーソフトウェアの統計解析向けのプログラミング言語及びその開発実行環境。ニュージーランドのオークランド大学の[Ross Ihaka](https://en.wikipedia.org/wiki/Ross_Ihaka)と[Robert Clifford Gentleman](https://en.wikipedia.org/wiki/Robert_Gentleman_(statistician))により作られた。R言語のソースコードは主にC言語、FORTRAN、そしてRによって開発された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/R.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/R.png" alt="" width="274" height="315" class="aligncenter size-full wp-image-558" /></a>

### <a name='2000'>2000年代</a>

#### <a href='https://ja.wikipedia.org/wiki/C_Sharp' name='CSharp'>C#</a>
マイクロソフトが開発したマルチパラダイムプログラミング言語。登場時期は2000年。開発にはボーランド社のTurbo PascalやDelphiを開発したアンダース・ヘルスバーグを筆頭に多数のDelphi開発陣が参加している。

<a href="http://taisablog.com/wp-content/uploads/2017/05/CSharp.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/CSharp.png" alt="" width="393" height="804" class="aligncenter size-full wp-image-563" /></a>

#### <a href'https://ja.wikipedia.org/wiki/Scala' name='Scala'>Scala</a>
2003年の暮れに内部で公開された後、2004年の始めにJavaのプラットフォームにリリースされた。ScalaはJavaプラットフォーム（Java仮想マシン）上で動作する。スイス・ローザンヌにあるスイス連邦工科大学 (EPFL) のマーティン・オーダスキー教授によって設計された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Scala.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Scala.png" alt="" width="763" height="871" class="aligncenter size-full wp-image-562" /></a>

#### <a href='https://ja.wikipedia.org/wiki/D%E8%A8%80%E8%AA%9E' name='D'>D</a>
C言語をベースとしABI互換を保ちつつも、テンプレートによるジェネリックプログラミングやオブジェクト指向プログラミング、関数型プログラミングなどをサポートする。2001年にウォルター・ブライト, アンドレイ・アレキサンドレスクによって設計された。

<a href="http://taisablog.com/wp-content/uploads/2017/05/D.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/D.png" alt="" width="445" height="819" class="aligncenter size-full wp-image-561" /></a>

#### <a href='https://ja.wikipedia.org/wiki/F_Sharp' name='FSharp'>F#</a>
マイクロソフトが開発した.NET Framework向け言語。登場時期は2005年。F#のFはFunctional programming language（関数型プログラミング言語）およびSystem Fが由来で、Fortranとは無関係。

<a href="http://taisablog.com/wp-content/uploads/2017/05/FSharp.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/FSharp.png" alt="" width="458" height="801" class="aligncenter size-full wp-image-560" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Go_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)' name='Go'>Go</a>
Googleによって開発された。設計に[ロブ・パイク](https://ja.wikipedia.org/wiki/Go_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))、[ケン・トンプソン](https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%B3%E3%83%BB%E3%83%88%E3%83%B3%E3%83%97%E3%82%BD%E3%83%B3)らが関わっている。軽量スレッディングのための機能、Pythonのような動的型付け言語のようなプログラミングの容易性が特長。登場時期は2009年。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Go.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Go.png" alt="" width="719" height="730" class="aligncenter size-full wp-image-559" /></a>

### <a name='2010'>2010年代</a>

#### <a href='https://ja.wikipedia.org/wiki/Ceylon' name='Ceylon'>Ceylon</a>
レッドハット社によって開発されたプログラミング言語およびソフトウェア開発キット。Java言語をもとに作られ、Java仮想マシンおよびJavaScript実行環境上で動作する。登場時期は2011年。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Ceylon.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Ceylon.png" alt="" width="894" height="893" class="aligncenter size-full wp-image-569" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Rust_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)' name='Rust'>Rust</a>
Mozillaによって開発された。関数型プログラミング、並列アクターモデル、手続き型プログラミング、オブジェクト指向プログラミングをサポートする実用的な言語を目指している。登場時期は2010年。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Rust.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Rust.png" alt="" width="715" height="647" class="aligncenter size-full wp-image-568" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Dart' name='Dart'>Dart</a>
2011年にグーグル社から公開された。JavaScriptの代替となることを目的に作られた言語。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Dart.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Dart.png" alt="" width="1271" height="846" class="aligncenter size-full wp-image-567" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Elixir_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)' name='Elixir'>Elixir</a>
高い拡張性があり、Erlangの仮想環境上で動作するシステムを目標に、José Valimによって開発された2012年に登場した。Erlangで実装されているため、分散システム、耐障害性、ソフトリアルタイムシステム等の機能が利用できる拡張機能として、マクロを使ったメタプログラミング、そしてポリモーフィズムなどのプログラミング・パラダイムもプロトコルを介して実装されている。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Elixir.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Elixir.png" alt="" width="1196" height="770" class="aligncenter size-full wp-image-566" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Hack_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)' name='Hack'>Hack</a>
Facebookにより開発された。PHP実行環境のHipHop仮想マシン (HHVM) で動作する。登場時期は2014年。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Hack.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Hack.png" alt="" width="863" height="874" class="aligncenter size-full wp-image-565" /></a>

#### <a href='https://ja.wikipedia.org/wiki/Swift_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)' name='Swift'>Swift</a>
2014年のアップルのWWDCにて発表された。LLVMコンパイラが使われており、ライブコーディングに対応していることが特徴。

<a href="http://taisablog.com/wp-content/uploads/2017/05/Swift.png"><img src="http://taisablog.com/wp-content/uploads/2017/05/Swift.png" alt="" width="1343" height="778" class="aligncenter size-full wp-image-564" /></a>

## 最後に

wikipediaの情報を元に出力しているので足りてない部分や誤っている箇所、単純に記述にミスってる部分が多分にあると思いますが参考になればと思います。何かお気づきの際は是非コメントやpull requestを頂けたらうれしいです。

### 参考

[amazonjs asin="4822239179" locale="JP" title="まつもとゆきひろ 言語のしくみ"]

<iframe width="100%" height="166" scrolling="no" frameborder="no"
     src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/309118827&color=ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false">
</iframe>
