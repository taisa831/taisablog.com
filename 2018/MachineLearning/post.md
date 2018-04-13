映画の推薦システムをつくる

## 事前準備

<pre>
$ pip3 install numpy
$ pip3 install scipy
$ pip3 install scikit-learn
$ pip3 install jupyter
$ pip3 install pandas
$ pip3 install matplotlib
</pre>

## シナリオ

映画の推薦システムを作るために、MovieLensという映画のレーティングサイトのデータを用いて、ユーザーが評価した星の数を予測する

MovieLens
https://movielens.org/

### 推薦システムとは

- AmazonなどのECサイトで表示される「この商品を買った人はこれも買っています」のような、関連する商品をオススメする
- 5段階の星で示される評価値に基づいて楽曲がお薦めされる音楽アプリ

何かしらのユーザーの行動やアイテムの情報から、ユーザーが好むであろう関連アイテムを提示するのが目的

### 応用シーン

Eコマースにおける推薦システムの応用シーンは、運用目的に応じて以下の5つに整理されるとしてる

- 概要推薦
- 利用者評価
- 通知サービス
- 関連アイテム推薦
- パーソナライゼーション

#### 概要推薦

今週の人気商品のような統計情報ベースのおすすめや、編集者のセレクトしたアイテムを薦める場合など、人によらず大まかに行う推薦で、システムを利用し始めたユーザーや、たまにしか利用しないユーザーに特に効果を発揮する

#### 利用者評価

ユーザーが☆を付けた評価やコメントを他のユーザーに見せたり、評価値の平均など統計情報として見せたりする。他社の情報をもとに判断する基準を与えることができる。

#### 通知サービス

プッシュ通知やメールでユーザーが興味をもつアイテムを推薦することによりサイトへの再訪を促す

#### 関連アイテム推薦

関連アイテムやその情報を元のアイテムと同時に示すことで、アイテムを同時に購入したり別のアイテムと比較したりすることを助ける

#### パーソナライゼーション

人気のアイテムリストや編集者のおすすめリストと並べて、ユーザーが好みそうなアイテムリストを表示することで、そのユーザーが気に入ったアイテムに出会えるようにする。また、検索結果を個人によってカスタマイズする方法もある。

## 推薦システムをもっと知ろう

## データの設計と取得

推薦システムの入力データとなりうる情報は、いくつか情報がある

- 嗜好データ
- 検索クエリ
- 批評
- アイテム特徴
- デモグラフィック特徴
- コンテキスト特徴

#### 嗜好データ

ユーザーのアイテムに対する「好き」という感情や5段階で「2」という評価など、その好みを表すもの

#### 検索クエリ

レストラン検索時に「5000円以下の和食の店」と指定する検索キーワードの情報

#### 批評

商品やお店に対する口コミなどを指す

#### アイテム特徴

商品説明文中の単語などの情報

#### デモグラフィック特徴

ユーザー自身の性別や年齢などの情報

#### コンテキスト特徴

推薦されたアイテムを使った日付や位置の情報、アイテムの在庫状況など、推薦に関連する文脈の情報


なるべく正しい情報を多く集める工夫が必要で、そのためには、ユーザーがアイテムを評価するコストを下げるか、ユーザーの評価回数が少なくても良いような何らかの工夫が必要

- 音楽の評価は大きなコストにならないので多く集まる
- 式場や家の購入など、人生に何回もないようなイベントではアイテムの評価に対するコストが高いため、WebページのPVのような別の指標を使うなどの工夫が必要

### 明示的データと暗黙的データ

嗜好データを獲得する方法は大きく2つある

- 明示的データ：ユーザーに直接好き嫌いや関心のあるなしを質問して回答してもらう
- 暗黙的データ：利用者が商品を購入したり閲覧したりといったアイテムは関心があるとみなす

それぞれ長所と短所がある

嗜好データの獲得方による長所・短所

|種類 |明示的 |暗黙的 |
|----|------|-------|
|データ量 | ✕ | ◯ |
|データの正確さ| ◯ | ✕ |
|未評価と不支持の区別| ◯ | ✕ |
|利用者の認知| ◯ | ✕ |


- データ量
    - データ量は明示的データより暗黙的データの方が圧倒的に多くなる
    - 明示的データ数を増やすのは難しい
- データの正確さ
    - 明示的データは正確なことが多い
    - 暗黙的データは正確性が低い場合が多く、質を担保するために、閲覧情報であれば滞在時間でフィルタリングするなどのデータの前処理が必要になる
- 未評価と不支持の区別
    - 暗黙的データは未評価と不支持の区別ができない
    - 暗黙的データは「嫌い」に相当するネガティブな評価を取得できない
- 利用者の認知
    - 明示的データはシステムが根拠のある出力を行っていると思ってもらえることから、ユーザーに好印象を与えやすくなる

### 推薦システムのアルゴリズム

推薦システムのアルゴリズムは、大きく以下の2つにわけられる

- 協調フィルタリング
    - 映画の趣味が似ている人にオススメを聞くように、評価の似ている人を探したり、似たような評価をされる映画を探したりする
- 内容ベースフィルタリング
    - 映画の監督名やジャンル、タイトル中の単語など内容が似た映画を探す
    
協調フィルタリングの分類

- 似た人を探すアプローチを**ユーザー間フィルタリング**
- 似たアイテムを探すアプローチを**アイテム間型協調フィルタリング**
- これらはシステムを持っているデータを元に、直接近いユーザー/アイテムを提示するため、**メモリベース協調フィルタリング**の一種であると言われる
- メモリベースと違うアプローチとして、回帰や分類などの予測モデルを学習する**モベルベース協調フィルタリングもある**

### ユーザ間型協調フィルタリング

ユーザ間型協調フィルタリングは、以下の流れで行う

1. ユーザーの情報をベクトルで表現する
2. ユーザー間がどれくらい似ているか（類似度）を決める
3. 類似度にもとづいて評価値を算出する

代表的な類似度

- ピアソンの相関係数
- コサイン類似度
- ジャッカード係数

ピアソンの相関係数

<pre>
import numpy as np
def pearson_coefficient(u, v):
    u_diff = u - np.mean(u)
    v_diff = v - np.mean(v)
    numerator = np.dot(u_diff, v_diff)
    denominator = np.sqrt(sum(u_diff **2)) * np.sqrt(sum(v_diff **2))
    return numerator / denominator
</pre>

SciPyを使った場合

<pre>
from scipy.spatial.distance import correlation
1 - correlation(u, v)
</pre>

コサイン類似度

<pre>
from scipy.spatial.distance import cosine
1 - cosine(u, v)
</pre>

ジャッカード係数

<pre>
from scipy.spatial.distance import cosine
1 - cosine(u, v)
</pre>

### アイテム間型協調フィルタリング

調整済みコサイン類似度

<pre>
def adjusted_cosine_coefficient(m, n, u_mean):
    adjusted_m = m - u_mean
    adjusted_n = n - u_mean
    numerator = np.dot(adjusted_m, adjusted_n)
    denominator = np.sqrt(sum(adjusted_m **2)) * np.sqrt(sum(adjusted_n **2))
    return numerator / denominator
</pre>

<pre>
rating = np.asarray([[5, 0, 2],[4, 0, 1], [0, 4, 5]])
u_mean = rating.mean(axis=1)
# array([ 2.33333333, 1.6666667, 3.])
</pre>

### モデルベース協調フィルタリング

### 内容ベースフィルタリング

映画のタイトルや監督、ジャンルや俳優、口コミなどアイテムを表現する情報に着目し、それらの過去のデータから推薦を行う

### 協調フィルタリングと内容ベースフィルタリングの得手・不得手

- 協調フィルタリングの得手
    - ジャンルやテキストに含まれている単語が似ていなくても良い
    - 多様性のある推薦結果を得られる可能性が高い
- 協調フィルタリングの不得手
    - 新規ユーザーや新アイテムに対する推薦がデータが少なくなりがちで推薦が困難（コールドスタート問題）
    - システムの利用者が少ないと良い推薦ができず、推薦が使われないと利用者が増えないという負のループにはまるリスクがある
- 内容ベースフィルタリングの得手
    - 新しいサービスで行動データが蓄積されなくても、比較的適切な推薦をしやすい手法
    - 日本語だと形態素解析をするため辞書をメンテナンスする必要があるなど、ドメインに特化した情報をどのように扱うかが課題となる

### 評価尺度

## MovieLensのデータの傾向を見る

<pre>
wget http://files.grouplens.org/papers/ml-100k.zip
unzip ml-100k.zip
</pre>

ユーザー情報を読み込んでpandasのDataFrameに格納する

<pre>
import pandas as pd

u_cols = ['user_id', 'age', 'sex', 'occupation', 'zip_code']
users = pd.read_csv('ml-100k/u.user', sep='|', names=u_cols)
users.head()
</pre>

ユーザー情報一部の表

評価値情報を読み込む

<pre>
r_cols = ['user_id', 'movie_id', 'rating', 'unix_timestamp']
ratings = pd.read_csv('ml-100k/u.data', sep='\t', names=r_cols)
ratings['date'] = pd.to_datetime(ratings['unix_timestamp'], unit='s')
ratings.head()
</pre>

評価値情報の表

映画情報を読み込む

<pre>
m_cols = ['movie_id', 'title', 'release_date', 'video_relase_date', 'imdb_url']
movies = pd.read_csv('ml-100k/u.item', sep='|', names=m_cols, usecols=range(5), encoding = "latin1")
movies.head()
</pre>

映画情報の表

すべての表をマージする

<pre>
movie_rating = pd.merge(movies, ratings)
lens = pd.merge(movie_rating, users)
</pre>

全データの中で、最も評価された25作品を見てみると1位はスターウォーズの583件

<pre>
lens.title.value_counts()[:25]
</pre>

評価の数と平均を集計し、平均値の高い順に並べ替えをする

<pre>
movie_stats = lens.groupby('title').agg({'rating': [np.size, np.mean]})
movie_stats.sort_values(by=[('rating', 'mean')], ascending=False).head()
</pre>

評価件数が1件と少ないため評価の平均が高くなる映画が上位に来てしまう

これを防ぐために評価数の多いもののみで平均する

<pre>
atleast_100 = movie_stats['rating']['size'] >= 100
movie_stats[atleast_100].sort_values(by=[('rating', 'mean')], ascending=False)[:15]
</pre>

評価回数の分布

<pre>
from matplotlib import pyplot as plt
plt.style.use('ggplot')

lens.groupby('user_id').size().sort_values(ascending=False).hist()

plt.xlabel('rating size')
plt.ylabel('count of rating')
</pre>

ユーザーごとの評価数と評価値の平均について調べてみる

<pre>
user_stats = lens.groupby('user_id').agg({'rating': [np.size, np.mean]})
user_stats['raging'].describe()
</pre>

評価値の平均に着目をすると、最低が平均1.49点の辛口のユーザーから4.87点の甘めのユーザーまで、ユーザーごとにバイアスがあることがわかる

## 推薦システムの実装

MovieLensのデータを使って、映画の評価値を予測する

### Factorization Machineを使った推薦

ここではFactorization Machinesを使って推薦する

- Matrix Factorizationではユーザーとアイテムの情報しか扱えなかったが、Factorization Machinesはそれ以外の特徴量も扱うことができる
- ロジスティック回帰などと異なり、Matrix Factorizationと同じく疎な行列を扱うことができる
- 特徴量の間で影響を与え合う交互作用を考慮することができるので、相関関係がある特徴量も適切に扱うことができる

factFMを使う

<pre>
pip3 install fastFM
</pre>

fastFMの利用するアルゴリズム

- ALS
- SGD
- MCMC
- マルコフチェインモンテカルロ法

ALS

<pre>
from sklearn.feature_extraction import DictVectorizer


train = [
    {"user": "1", "item": "5", "age": 19},
    {"user": "2", "item": "43", "age": 33},
    {"user": "3", "item": "20", "age": 55},
    {"user": "4", "item": "10", "age": 20},
]


V = DictVectorizer()
X = V.fit_transform(train)
print(X.toarray())
</pre>

<pre>
from fastFM import als
import numpy as np

y = np.array([5.0, 1.0, 2.0, 4.0])
fm = als.FMRegression(n_iter=1000, init_stdev=0.1, rank=2, l2_reg_w=0.1, l2_reg_V=0.5)
fm.fit(X, y)
fm.predict(V.transform({"user": "5", "item": "10", "age": 24}))
</pre>


### いよいよFactorization Machineで学習する

全体の傾向が分かったので、実際に映画の評価値を予測してみる。

<pre>
def load_data(filename, path="ml-100k/"):
    data = []
    y = []
    with open(path+filename) as f:
        for line in f:
            (user, movieid, rating, ts) = line.split('\t')
            data.append({"user_id": str(user), "movie_id": str(movieid)})
            y.append(float(rating))

    return (data, np.array(y))
    

(dev_data, y_dev) = load_data("ua.base")
(test_data, y_test) = load_data("ua.test")
</pre>

<pre>
from sklearn.model_selection import train_test_split

v = DictVectorizer()
X_dev = v.fit_transform(dev_data)
X_test = v.transform(test_data)
np.std(y_test)
X_train, X_dev_test, y_train, y_dev_test = train_test_split(X_dev, y_dev, test_size=0.1, random_state=42)
</pre>

<pre>

</pre>

グラフ

<pre>

</pre>

グラフ

<pre>

</pre>

<pre>

</pre>

### ユーザーと映画以外のコンテキストも加える

<pre>

</pre>

<pre>

</pre>

<pre>

</pre>

グラフ
