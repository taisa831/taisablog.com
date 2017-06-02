# AWS 基調講演 CTO

- セールスではなく教育である
- cisco、ibm、hpeはマイナス成長。他にもsalseforceとかあるけど古い保守派の企業は成長してない（オンプレミスはおわってる）
- プレミアコンサルティングパートナーが国内に7社ある
- ISVパートナーもいる
- ストックホルム、中国、大阪リージョン追加
- ワールドワイドなリージョンの運用が可能

# ソラコム

- デバイスを直接クラウドに接続する（インターネットを経由しない）
- キャリアと連携して直接AWSにアクセスする網を作った
- awsを活用してapiを使ってmicroservicesで構成している
- DynamoDB使ってる
- 疎結合化と非同期化
- kinesis+lambda functionを使ってる
- awsをフル活用することで小さなスタートアップでもすごい速度でサービス開発ができている
- IoTとクラウドを直接つなぐ

# CTO

- 2014年
    - クラウドが明確に当たり前になった
- 今は進化の過程のどこにいるのか？
    - 2015年
        - プロダクションの中心（IT自体が差別化にはならない）
        - 検索はできなければならない、できなければ劣るだけ
- AWSはスーパーパワーを与えた
    - 超音速
    - プロダクトをユニークにすることだけに集中すればいい
    - AWSが開発の制約になってはいけない（利用者の目標を達成してもらう為にやっている）
- 過ちを犯す可能性がある
    - IOが制約になってしまったり
    - CPUが制約になってしまったり
    - メモリが制約になってしまったり
- コンピュート
    - いろんな選択肢がある
    - EC2のElastic GPU
    - F1インスタンス

# NTT東日本 いかに超高速で動かしているか

- CloudGateway (re:connect)
    - もともと社内で使ってたもの
- コスト、セキュリティ、アジリティ
- 企業の基幹システムでクラウド利用が進まない
- NTTがAWSと直結するサービス
    - 安く、すぐに、使いたい分だけ
    - セキュアなとこにも広げたい

# CTO

- 目に見えないスーパーパワー
    - サーバレス
        - 常に可用性が高い
        - AWS Lambdaを使えば簡単にアプリを実行できる
    - Finra
        - 常にマーケットイベントを処理しているがそれらをLambdaを利用して稼働できている
    - 複数の関数を使う場合は？
        - AWS Step Functionsを使うことが可能
        - いろんな枝分かれしたものでもAWS Step FunctionsでLambda実行利用可能
    - AWS X-Ray
        - 分散型の情報のトレーシングができる
    - Amazon DynamoDB
        - 他のNoSQLにはコンフィグがたくさんあったがやりたいことは一貫したパフォーマンスが必要だということ
        - レイテンシが非常に重要
        - マイクロ秒での速度が求められている
        - 応答時間をマイクロ秒に短縮
        - DynamoDB Accelerator(DAX)（マネージド）
            - DynamoDBの10倍速（インメモリ）
        - コスト効果が高い、サーバレス

# ソニーモバイルコミュニケーション

- エレクトロニクス、エンタテイメント、金融
- デザイン、デバイス、ネットワーク&クラウド、AI → System Integrate
-

# CTO

- AWS IoT
    - デバイスゲートウェイ
    - デバイスシャドー
- Rules Engine
- ほとんどのマシンデータはクラウドに保存されてないない
- IoTの3つの柱
    - もの、クラウド、知能
- クラウドとすべてやりとりする必要はないが、サマリはクラウドに必要
- ローカルで開発がしたい
    - AWS Greengrass
        - クラウドに行かなくても実行できる
        - レイテンシがない
- スーパーパワー（飛び立つ）
    - 古いDBベンダーから飛んで（逃げて）行きたいのでは？
    - 高価、独自仕様、ロックイン、罰則的なライセンス、最後にはすべてを利用できていない
        - だからこそオープンDBへ移行する
            - AWSマイグレーションサービスを提供
        - もっとエンタープライズのDBが欲しい
            - MySQL五感、ハイエンドで最大5倍、可用性、Postgresも、コストは1/10

# Gree

- 2013年から業績が下降してきている（株価も）
    - まだ居たの？と自虐
- 過去2回の4半期はよい業績を出すことができた
- いろんなことを試した
- 数千台のオンプレミスサーバをAWSへ移行
    - 1年くらい（トータル2年くらい）
- どう実現したか？
    - Direct Connectはなくてはならなかった
- do or do not やるかっやらないか
    - まず決める、そしてやり通す（1%）
- Direct ConnectによるL3
- プロダクトサイドの協力
- リクルート宣伝
- サービスは増やすよりも減らすほうが難しい
- 技術選択
    - いろんな要素があるのがご存知の通りだが正解・不正解を決めきるのは難しい
        - 未来はどうなるかわからない
            - 「速さは裏切らない」という最後の決断としている
                - AWSを使えば早いよ

# CTO

- 透視（X-RAY VISION）
- AWSでペタバイト規模のデータを分析可能
- Amazon Athena、Amazon EMR
- Athena
    - S3に格納
    - クエリ分だけ支払い
    - アドホッククエリ
- EMR (より細かい)
    - Hadoop、Spark、Pれst、HBase
- Redshift
    - 前の2つとは毛色が違う
    - データウェアハウス
        - データを引っ張ってくることに特化
    - AWSの中でも一番使われてるサービス
    - データレイクで検索できないかという要求
        - Redshift Spectrum
            - Redshiftにデータを移す必要がない
    - エクサバイト規模のデータセットに対する複雑なクエリ（1000ノード）
    - Hive：5年
    - Spectrum：155秒
        - 非常にコストがさがる
- 予見（スーパーパワー）
    - 機械学習
        - マシンラーニングは初日から使っている
    - apache MXNet投資
    - トレーニング
        - S3、Redshift、AMI、カスタム深層学習モデル
    - 機械学習にエキスパートは必要ない
        - みなさんがつくるのはアプリケーション
    - Amazon Rekognition
        - 画像認識サービス
            - 属性を認識することができる
            - トレーニングデータも組合わせ可能
        - コンテンツもでレーション
            - スコアリングすることができる
            - 下着か？水着か？ということが判別できる
    - Amazon Polly
        - 本物そっくりの音声の生成ができる
        - ライセンスフリー
        - 感情を付加することが可能（スピーチマークやささやき）
            - 口の動きに合わせてテキストを朗読できる
    - Amazon Lex
        - 自動音声認識と自然言語理解

- 最後に
    - 不朽（IMMORTALITY)
        - スタートアップがほぼすべての業界に新しい命を吹き込んでいる
        - 企業が生き残る為にの鍵はデジタルトランスフォーメーション
            - GE
                - 夜製造業として寝るが朝アナリティクスの企業として活動する
        - 現在は15年で存在しなくなる
            - 若いスタートアップ企業でいきる
        - ビルドするなら絶好のタイミングである（2008年では24機能）
    - Go Build!!!

# 実践機械学習 XGBoostをつかった広告クリック率の予測システム - smartnews

- 機械学習ドリブンのオンラインシステムを構築する際のパターン
- パフォーマンスを出すことのキーは問題とモデルに対する理解
- パフォーマンスとコストとバランスのポイントを選ぶ
- AI is new Electric
- AIではなくリアルワールドの機械学習
- なぜリアルワールド？
- 特定のユーザと特定のContextにてたくさんの候補から一番いい広告を選ぶ
- GBDT (Randamforestとは違う)

# greengrass Deep Dive

- 機械が発生したデータはクラウドにあがっていない
    - 医療機器、産業機械、極端な環境
    - Edgeで処理していく必要がある
- 物理的、経済的、地域的な問題がある
- IoTにおける3つのれいや
    - Things、cloud、Intelligence
- AWS IoT
    - GreengrassはAWS IoTの拡張
    - Device Gateway、Authentication & Authorization (Registry)、Devie State
    - Device Shadow
        - オフラインでもデータがたまりオンラインになったら通信する
- AWS IoTはEdgeまで拡張する
    - 同じ機能や同じFeatureを使ってEdgeでも利用できる（Lambdaを利用できる）
    - SecurityモデルはAWS IoTと同じ
    - Shadowと通信ができる
- メリット
    - ローカルイベントを早くレスポンス
    - オンラインでの運用
    - シンプルなでデバイスプログラミング
    - IoTアプリケーションコストを削除
        - 5年に1回通信すればよい
- Greengrass Components (GGC) (Greengrass Core)
    - Lambdaの実行、メッセージング、Device Shadow、セキュリティ及びクラウドとの直接連携を可能にするランタイム（ソフトウェア）
    - 小さな端末でも大丈夫（ラズベリーパイでも起動可能）
- SDK
    - ローカルネットワークを介してGreengrass Coreと通信可能
    - 現在はC++のみ
- デバイスはローカルで稼働
    - Greengrass GroupはCoreとその他のデバイス群のコミュニケーションに関する設定セット
- Groups + Deploymentsの利点
    - Lambda関数をGG Coresにデプロイ
    - ルートテーブルの設定のデプロイ
    - すべてのデバイスを集中管理
- Local Lambda
    - 現在はPython2.7で実行可能
- Local Lambdaは何ができるか
    - コマンドとコントロール
    - オフライン実行
- Shadows
    - デバイスとLambdaの造替を示すJsonドキュメント
    - 車、エンジンなど
    - クラウドとsyncすることもローカルに保持することも可能
- Messaging
    - ローカルなMQTT Pub/Sub messaging
    - Brokerの特徴
- Security
    - ローカル/クラウドどちらにおいても相互認証
    - 直接AWSサービスを呼び出せる
- 要求仕様
    - Linux 4.4
    - glibc2.14
    - python 2.7
    - SQLite

# Cloud connect the world as a Glue (メルカリ)

- SRE Teamの紹介
    - Site Relability Engineeringの略
    - 運用チームを率いるBen Treynorが提唱
    - Site Relability Engineerging (オライリー)
    - 運用を50%以下に下げる
    - エラーバジェット
- Mercasri SRE
    - 信頼性の高いサービス実現
    - インフラチームからSREへ
    - インフラよりもサーイス指向
    - 6人で募集中
    - 新しい機能開発以外全部やる
- Global Service
    - JP、US、UK
    - Tokyo、サンフランシスコ、ロンドン
- Globalの進め方
    - Slack、PRレビュー、ハングアウト、リモートペアプロ
    - 自立したチームとして課題解決する
    - チーム丸ごと出張
- SREチームのケース
    - 6人のうち1一人が長期US出張中
- アーキテクチャ
    - JP
        - SAKURA Internet 石狩DC
        - 2013年/7月リリース
            - VPS1台にWebとDB同梱
        - 検索：Solr
        - Diagonal Scale指向
        - DBにはioMemory
    - US
        - AWS
        - 2014/09リリース
        - AWSにてサービス構築
    - UK
        - Google Platform
        - DB:GCE
            - 構成はほぼ同じ
    - 2015年kazeburo入社
        - SRE発足
- サーバ中心のアーキテクチャ
    - 少人数での運用
    - Ansible Playbook再利用
    - スケールが先行しているJPで実績ある功績
- まとめ
    - JS/JS/JKは採用してるものは違うけど構成は同じ
    - ここまではそこまでAWSをつかってない
- Globalインフラストラクチャ
    - それぞれのインフラは独立している
    - Route53、CloudFront、GoogleBigQuery、S3(一番下でバックアップとして利用してる)
- Route53
    - DNS-RRにRoute53のHealth Checkを使い解決
- 内部DNS
    - すべてのサーバにunboundを導入
- ログ
    - batch+awscli
    - fluentd + S3
- バックアップ
    - xtrabackup + aws cli
- S3 as a Hub
    - S3をhubとして疎結合を実現
- 機械学習への取り組み
    - 価格のサジェストとか
- 距離を超えて世界を繋ぐ
    - 距離とレイテンシ
    - 光は50msecで地球半周

#マゴチャンネル

物を売る
デバイスの管理
などの管理がある

配達管理

動画トランスコーダーは自前
トランスコーダーのレビューをしてほしい

lambdaをつかったら？
月額料金
どうやってサブスクリプションコストをカバーすると考えてる？

プラットフォーマーになって課金してもらってマネタイズしたい

おじいちゃんおばあちゃんのコストは？

ケーブル2本とテレビのリモコンでできる

出荷前に設定してる

# アクセルスペース

人工衛星に関する研究者
超小型の衛星でワンストップでやる

専用衛星を作って打ち上げる

アクセルグローブに力入れてる
地球全体の写真を毎日更新する

50き
7pbをawsに任せる

解析結果をユーザに売るビジネス

どれくらいの大きさ？
200kg

50機は何回？
10 15機
2020年までに打ち上げる

デジタルグローブがあるけど？
競合優勢は？
地球全体をデイリーで取れるカバレッジが強い
どれくらいのニーズがある？
数千億から
新たなインサイトができることを期待している
いくつかのモデルを考えてる

# リプロ CTO

マーケター向けサービス
ECSがまとめてやってくれる
プッシュ通知をLambdaでやってる
スポットフリート
テラフォームで個人の環境を作ってる

なぜRubyを選んだ？
既にRubyだったから

なぜ通知を同時に送る必要が？
短時間でキャンペーンを通知したいケースがある

コスト計算が必要だよ

どこの軸がビジネスになるのかと同時ににインフラコストも合わせて考える必要がある

オラクルで過去の注文履歴を持ってた
S3に変えた。
注文履歴はS3から持って来てる
変わらないデータだから
現在の軸だけをDBに

無制限の使用を許可するのはそれなりの代償が伴う
