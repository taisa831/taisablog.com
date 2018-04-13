from sklearn.feature_extraction import DictVectorizer
from sklearn.model_selection import train_test_split

from fastFM import als
import numpy as np

train = [
    {"user": "1", "item": "5", "age": 19},
    {"user": "2", "item": "43", "age": 33},
    {"user": "3", "item": "20", "age": 55},
    {"user": "4", "item": "10", "age": 20},
]


V = DictVectorizer()
X = V.fit_transform(train)
print(X.toarray())


y = np.array([5.0, 1.0, 2.0, 4.0])
fm = als.FMRegression(n_iter=1000, init_stdev=0.1, rank=2, l2_reg_w=0.1, l2_reg_V=0.5)
fm.fit(X, y)
fm.predict(V.transform({"user": "5", "item": "10", "age": 24}))


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

v = DictVectorizer()
X_dev = v.fit_transform(dev_data)
X_test = v.transform(test_data)
np.std(y_test)
X_train, X_dev_test, y_train, y_dev_test = train_test_split(X_dev, y_dev, test_size=0.1, random_state=42)