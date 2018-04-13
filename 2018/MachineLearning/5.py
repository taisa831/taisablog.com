from sklearn.metrics import mean_squared_error
from fastFM import mcmc
import numpy as np
from sklearn.feature_extraction import DictVectorizer
from sklearn.model_selection import train_test_split


def load_data(filename, path="ml-100k/"):
    data = []
    y = []
    with open(path + filename) as f:
        for line in f:
            (user, movieid, rating, ts) = line.split('\t')
            data.append({"user_id": str(user), "movie_id": str(movieid)})
            y.append(float(rating))

    return (data, np.array(y))


(dev_data, y_dev) = load_data("ua.base")
(test_data, y_test) = load_data("ua.test")


v = DictVectorizer()
X_dev = v.fit_transform(dev_data)
X_test = v.transform(test_data)
np.std(y_test)
X_train, X_dev_test, y_train, y_dev_test = train_test_split(X_dev, y_dev, test_size=0.1, random_state=42)


# fastFMのパラメータの指定
n_iter = 300
step_size = 1
seed = 123
rank = 4

# MCMCを使った回帰のFMモデルを初期化する
fm = mcmc.FMRegression(n_iter=0, rank=rank, random_state=seed)
fm.fit_predict(X_train, y_train, X_dev_test)

rmse_dev_test = []
rmse_test = []
hyper_param = np.zeros((n_iter -1, 3 + 2 * rank), dtype=np.float64)

# イテレーション回数を変化させて、予測結果の性能とハイパーパラメータを得る
for nr, i in enumerate(range(1, n_iter)):
    fm.random_state = i * seed
    y_pred = fm.fit_predict(X_train, y_train, X_dev_test, n_more_iter=step_size)
    rmse_test.append(np.sqrt(mean_squared_error(y_pred, y_dev_test)))
    hyper_param[nr, :] = fm.hyper_param_

# 最初の5回は値が落ち着いていないので無視する
values = np.arange(1, n_iter)
x = values * step_size
burn_in = 5
x = x[burn_in:]

# RMSEとハイパーパラメータをプロット
from matplotlib import pyplot as plt
flg, axes = plt.subplot(nrows=2, ncols=2, sharex=True, figsize=(15, 8))

axes[0, 0].plot(x, rmse_test[burn_in:], ncols=2, sharex=True, figsize=(15, 8))
axes[0, 0].legend()
axes[0, 1].plot(x, hyper_param[burn_in:, 0], label='alpha', color="b")
axes[0, 1].legend()
axes[1, 0].plot(x, hyper_param[burn_in:, 1], label='lambda_w', color="g")
axes[1, 0].legend()
axes[1, 1].plot(x, hyper_param[burn_in:, 3], label='mu_w', color="g")
axes[1, 1].legend()
