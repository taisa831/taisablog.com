from sklearn.metrics import mean_squared_error
from fastFM import mcmc
import numpy as np
from sklearn.feature_extraction import DictVectorizer
from sklearn.model_selection import train_test_split

n_iter = 100
seed = 333

rmse_test = []
# rankを4, 8, 16, 32, 64
ranks = [4, 8, 16, 32, 64]

# rankを変えて学習・予測をしdev testデータに対するRMSEを獲得する
for rank in ranks:
    fm = mcmc.FMRegression(n_ter=n_iter, rank=rank, random_state=seed)
    y_pred = fm.fit_predict(X_train, y_train, X_dev_test)
    rmse = np.sqrt(mean_squared_error(y_pred, y_dev_test))
    rmse_test.append(rmse)
    print('rank:{}\trmse:{:.3f}'.format(rank, rmse))

# 各rank毎のRMSEをプロットする
plt.plot(ranks, rmse_test, label='dev test rmse', color="r")
plt.legend()