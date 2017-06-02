## 基調講演

### オープニング

三味線、バイオリン、ギターのライブから始まった

https://twitter.com/awscloud_jp

https://twitter.com/awscloud_jp/status/869723273965182976

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">AWS Summit Tokyo スペシャルバンドによる演奏でAWS Summit Tokyo 2017 Day2 基調講演がはじまりました！<a href="https://twitter.com/hashtag/AWSSummit?src=hash">#AWSSummit</a> <a href="https://t.co/SMkfuUfRIG">pic.twitter.com/SMkfuUfRIG</a></p>&mdash; アマゾン ウェブ サービス (@awscloud_jp) <a href="https://twitter.com/awscloud_jp/status/869723273965182976">2017年5月31日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### アマゾン ウェブ サービス ジャパン 長崎忠雄（ホストスピーカー）

Registration 20,000人以上
世界で一番多い

去年の2倍

1.4兆円
13.3ビリオン

スタートアップ企業の支援を強化

16分野のコンピテンシーがある
事例大全集がダウンロードできる
ユーザコミュニティがある
  JAWS-UG
  エンタープライズもある
  明日の夜にふれあい会ある

サービスコンソールを6月末までに100%日本語化予定

### ゲストスピーカー/三菱UFJファイナンシャルグループ 村林 聡

自分たちをレガシー企業
→ デジタルトランスフォーメーション
オープンイノベーション

API、BlockChain、AI、その他

7年後に銀行のコアの業務を4割置き換えられる

オンプレから移行予定

現在稼働中5つ
→ 100くらい検討中

退任する

### ホストに戻る
90以上のサービスがある

2016年に1017の新サービスおよび機能改善数
数年前は100程度

IoT
Amazon AIが使えるようになる（echoの仕組み）

ルービックキューブ
4325ケイ
35年かかる
→0.9秒になる

マシンラーニング
コストが1億円
10日かかってたのが10分

# スモールスタート

5/31からAmazonLightSailがTokyoリージョンで使える
月額5ドルからデータ転送量込み

### ゲストスピーカー/セイコーエプソン 熊倉一徳

ものづくりの企業
リアルな世界に提供するのは変わらない
サイバー空間も重要

クラウドへの移行はかなり困難だった
サーバレスアーキテクチャを採用

# ホストに戻る

## クラウドジャーニー

### データの移行が課題

AWS Database Migration ServiceでDB簡単移行可能
25,000以上移行済み

- オープンなDBに移行する理由
 Max5倍早くてコストは1/10

## ゲストスピーカー/レコチョク 稲荷 幹夫

AWS全面移行後の姿

一番懸念点はDBだった

運用工数0、ライセンス費用0(オラクル)、パフォーマンス障害0

## VRの取り組み

配信方法、端末負荷、画質・音質

## ホストに戻る

ペタバイト旧のデータ移行

AWS Snowball
東京リージョンでプライベートプレビュー

AWSサポート
　ベーシック、開発者、エンタープライズサポート

コストダウン
61回の値下げをしてる
(2006年サービスインから)

オンプレからAWSとのハイブリットのつなぎを重要視
無料利用枠
WorkSpaceが追加された

フルマネージドサービスで運用負荷軽減

## ゲストスピーカー/Sansan 塩見 賢治

サービス30以上使ってる

メリット
セキュリティ、止まらない、拡張性高い（システム入れ替えしてない）

デメリット
言及なし

eightの共有

## IoT

災害に対するリスクは高い
OsakaLocalRegion 2018に利用可能予定

変革

セキュリティとコンプライアンスの要件を満たす

CoE

## IoT/Bigdata/AI時代におけるスケーラブルなDeepLearning実行基盤と応用

### スピーカー
    - ABEJA：カズンズ・ジェーン

### 所感

### サマリ

AIを投入する
LocalでAIを導入
ABEJAPlatform
chalice zappa
Falcon API特化
Python Fire (Google製)

## DeepLearningのスケール

Deep Learningの開発プロセス
データを集める
DataPreparation
  Collection
  Annotation
    pandas,numpy
Model Depelopment
  Exploration
  Training
    jupyter,caffe,pytorch,k,aws deeplearning
Model Management
  Inferrring
  Monitoring
    Falcon,Requests

Falconはどうなってる？
  簡単に
Sample Predictor

## AWSアーキテクチャについて

### 課題：データ収集

Kinesis Streams
  スケーラブルなQueueサービス
  1000req/sec/shard
  データサイズは1MBが制限

### データの保管

- 言わずもがなS3
- データレイク

### 学習環境

並列実行やGPU環境
スケーラビリティの高い環境
安価に必要な時に必要な分だけ
開発スピードを落とさない

- ECS
  - マネージドなDocker管理サービス
  - EC2の上に薄く載る感じ
  - ローカルで開発可能
  - G少しパラメータを変えて数十台分同時実行することも可能
  - GPUも利用可能

### なぜGPU？

- Core数が多く、並列計算が得意
- 行列計算が得意
- Voltaはそのうちawsでも使える

### アーキテクチャ

API Gateway → Kinesis → Lambda → S3 ← ECS ← LB ← Annotation

※ Kinesisに依存しないためにAPI Gatewayを利用してる
※ Kinesis Firefhose使ってみたい
※ API Gatewayはやめたい
※ データにAWS Glueも興味ある

### モデル作成

S3からトレーニングデータから取得してESCでJupiterなどを使ってS3に返す

- Scalable
- AWS Batch?
- Spot Fleet

### Model Management

- CodeBuild

### アーキテクチャ

- S3を間に置いて疎結合にしてる

### まとめ

- 疎結合を意識してる
- 小さく開発を意識して開発
- AIの過渡期だから

質疑応答はスピーカーズラウンジで
アンケートのアナウンス
アンケートに回答してもらえると記念品がもらえる

## ChatWorkの新メッセージングシステムを支える技術

スピーカー：ChatWork かとじゅんさん、大村 伸吾

## Falconアーキテクチャ詳解

- 社内FW、既存相乗りもサービス公開
- 改善も限界がきた
- システム刷新

- ライブマイグレーションプランで移行を実行
  - いろんな問題が起きてプロジェクトを再起動

- 新しいアーキテクチャに移行することにした
- 大規模なデータ移行完了（2016年に）

## 新しいアーキテクチャの方針

- メッセージ数の遷移が毎年増えてる
- 保守性を維持するためにDDDは継続
- リアクティブシステム(Akka)をベースにしたCQRS+ESを採用
- CQRSとCQS
- cassandra + arora

##

- Error Kernel pattern
  - 危険な作業をヒエラルキーの末端に委譲する

- Let-it-crash pattern
  -

# 次の人

## モチベーション

- 現行
  - EC2、Jenkins、Cap、Fabric
- 困ってたこと
  - デプロイフローの改修が大変
  - 負荷試験もカジュアルにやりたい

- 達成駅た
  - 負荷試験を通ったアプリコードを維持できてチームだけでできた

## どうやった？

- 実行環境をkubernetes
- CIをConcourse CIに
- 負荷テストツールの自動化
  - ECS等

## それぞれ

- kubernetesにした理由
  - デファクト
  - 開発が活発
  - kube-awsのメンテなが社内にいる@mumoshuさんが社内にいる
  - ローカル開発環境minicubeがある
  - インフラチームと開発チームの責務が分離できる
- 責務の分離
  - 必要なAWSリソースはteraformを利用

- concourse CI
  - パイプラインが特徴
- 特徴
  - パイプライン
  - YAML
  - Dependable Results
  - プラグインが不要
- CIサーバの運用が楽になった
- ローカルで開発したパイプラインがそのまま本番にデプロイできる
- vagrant upで簡単にローカル起動可能
- Gitlab flow with Environment Branchesを採用
- 通知はchat

- 負荷テストの自動化
  - これまではFullBokを利用していた
  - Amazon ECS + Gatlingを使った負荷テスト自動化ツールの導入
  - DSLでシナリオがコードで作れる
- Gatlingの苦手
  - クラスタ実行
  - 複数レポートのaggregation

## 【ライブコーディングも実施】Amazon Payの仕組みと実装方法

### スピーカー
    - アマゾンジャパン：Johnathan David Froeming、吉村周造

### 所感

### サマリ

- 特徴
  - 利便性
  - スピード（2クリック）
  - 安心感（マケプレ保証）
  - 実績
    - 1000社オーバー
- 日本赤十字社
  - 熊本地震
    - 寄付はしてみたいけど・・・
    - より多くの肩にネット経由で寄付を
  - 課題
    - 信頼できるページ
      - amazon.co.jp
    - 管理を楽にしたい
      - awsを使ってる
    - すぐに開始したい
      - 画面でぽちぽち+JSとSDK開発のみ
    - AmazonPayの仕組み
      - フロント：Javascriptだけで可能
      - バックエンド：SDKで実装
    - LB + EC2?API Gateway + Lambda?
      - Lambdaを選択
      - 困ってる人を早く助けたい
        - AWSならそれができる
      - グローバルで利用可能
- 購入画面BestPractice
  - ECサイトのゴールは何？
    - 商品購入（たくさん商品を購入してほしい）
  - 代表的な課題にカゴ落ちがある
    - 一番の理由は面倒だから（入力が多すぎる）
  - amazon pay 商品購入の機会最大化
  - Golden Rule（日本初公開）
    - 14項目ある
      - 1ページで購入
      - 項目は最小限
      - ゲスト購入OK
- ライブコーディング
  - ウィジェットを読み込む

## GunosyにおけるAWS上での自然言語処理・機会学習の活用事例

### スピーカー
    - Gunosy：大曽根 圭輔

### 所感

### サマリ

- ニュースパスアプリ
- ユーザの行動分析を担当
- ブログ開設してる
  - http://data.gunosy.io/
- JSAI 2017, COLING 2016に参加
- 8割当たる予測機をつくるのは難しくない時代だがユーザ満足につなげるのはまだ壁がある
- Gunosyと機会学習
  - 600超の媒体と契約し記事を収集して分類してリスト作成してユーザに届ける
  - 記事分類
    - 文言からカテゴリ分類
  - 同一イベント判定
    - 内容が似ている記事をまとめる
  - 代表記事選択
  - ユーザの行動ログをリアルタイムで収集
  - ユーザの属性推定
    - スコアリング（ユーザ属性ごとのCTR予測しリストを並べ替え）
      - 評価（配信アルゴリズムの効果を測定）
- 記事分類
  - 大中小でカテゴライズしている
  - 形態素解析
  - カテゴリ分類器
  - カテゴリ分類APIにエンキューして分類してRDBに格納
  - Ops
  - モデルはS3に保存してdeploy時に
- 属性推定+スコアリング
  - ユーザ行動ログ→ユーザ属性推定→スコアリング
  - 属性毎に性別、年齢、地域でクリックの傾向がかなり別れる
  - どうやって属性を知るか
    - ユーザが読んだ記事情報をもとに属性を推定している
  - 年齢推定にはCNN for NLPを応用
    - 畳み込みニューラルネットワークを使ってる
  - AWSでは？
    - ユーザのログをS3に格納
    - GPUインスタンスを使って学習させてる
    - 集計後データをRDBに入れる
    - prestoを使ってslackやredashなどで可視化して随時通知したり表示
    - logはkinesis streamを利用、kinesis analyticsで集計してkinesis firehorseを使ってelasticsearch serviceから検索（リアルタイム通知）
  - 評価（ABテスト）
    - よくない例は機能リリース後に大きなイベントが発生してやまが大きくなると計測不能
    - イベントに左右されにくい
    - ABテスト対象の選定
      - ハッシュ関数を利用した割り当てをしてる
  - スコアリング(Python)→Dynamo DB→ 記事リストAPI（Go)→ユーザ
    - どのABにあたってるかをs3にいれる。
    - 細かいことを確認するにはjupiter notebookを使ったりしてる
    - Github上で集計コードを共通化
- 自動集計
  - Group Validation
  - ABテストが適切に割り当てられてるか
  - 自動化進行中
- 伝えたかったこと
  - 実際のサービスで動かすことが重要
  - gunosy-dm.connpass.com
    - 勉強会もやってる
