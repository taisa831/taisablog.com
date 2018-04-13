from sklearn.metrics import mean_squared_error
from fastFM import mcmc
import numpy as np
from sklearn.feature_extraction import DictVectorizer
from sklearn.model_selection import train_test_split

fm = mcmc.FMRegression(n_iter=300, rank=32, random_state=seed)
y_pred = fm.fit_predict(X_train, y_train, X_test)
np.sqrt(mean_squared_error(y_pred, y_test))

from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
y_train_norm = scaler.fit_transform(y_train.reshape(-1, 1)).ravel()
fm = mcmc.FMRegression(n_iter=300, rank=32, random_state=seed)
y_pred = fm.fit_predict(X_train, y_train_norm, X_test)
np.sqrt(mean_squared_error(scaler.inverse_transform(y_pred), y_test))

lens['user_id'] = lens['user_id'].astype(str)
lens['movie_id'] = lens['movie_id'].astype(str)
lens['year'] = lens['date'].apply(str).str.split('-').str.get(0)
lens['release_year'] = lens['release_date'].apply(str).str.split('-').str.get(2)
lens['year'] = lens['date'].apply(str).str.split('-').str.get(0)
lens['release_year'] = lens['release_date'].apply(str).str.split('-').str.get(2)


candidate_columns = [
    ['user_id', 'movie_id', 'release_year', 'age', 'sex', 'year', 'rating'], #A
    ['user_id', 'movie_id', 'age', 'sex', 'year', 'rating'], #B
    ['user_id', 'movie_id', 'sex', 'year', 'rating'], #C
    ['user_id', 'movie_id', 'age', 'sex', 'rating'], #D
    ['user_id', 'movie_id', 'rating'], #E
]

rmse_test = []

# カラム候補郡ごとに評価を行う
for column in candidate_columns:
    # 欠損値を落とす
    filtered_lens = lens[column].dropna()
    # 入力データをダミー変数に変換する
    v = DictVectorizer()
    X_more_feature = v.fit_transform(list(filtered_lens.drop('rating', axis=1).T.to_dict().values()))
    # 教師となるレーティングを代入する
    y_more_feature = filtered_lens['rating'].tolist()

    # 教師データの学習用と評価用の分割
    X_mf_train, X_mf_test, y_mf_train, y_mf_test = train_test_split(X_more_feature, y_more_feature, test_size=0.1, random_state=42)

    # ratingの正規化をする
    scaler = StandardScaler()
    y_mf_train_norm = scaler.fit_transform(np.array(y_mf_train)).ravel()

    # MCMCを使ったモデルの学習
    fm = mcmc.FMRegression(n_iter=500, rank=8, random_state=123)
    fm.fit_predict(X_mf_train, y_mf_train_norm, X_mf_test)

    # テストデータでの予測結果のRMSEの取得
    y_pred = fm.fit_predict(X_mf_train, y_mf_train_norm, X_mf_test)
    rmse = np.sqrt(mean_squared_error(scaler.inverse_transform(y_pred), y_mf_test))
    rmse_test.append(rmse)


# RMSEをプロットする
ind = np.arange(len(rmse_test))
bar = plt.bar(ind, height=rmse_test)
plt.xticks(ind, ('A', 'B', 'C', 'D', 'E'))
plt.ylim((0.88, 0.90))
