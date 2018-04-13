import numpy as np
import pandas as pd


def pearson_coefficient(u, v):
    u_diff = u - np.mean(u)
    v_diff = v - np.mean(v)
    numerator = np.dot(u_diff, v_diff)
    denominator = np.sqrt(sum(u_diff **2)) * np.sqrt(sum(v_diff **2))
    return numerator / denominator


# ピアソンの相関係数
from scipy.spatial.distance import correlation
1 - correlation(u, v)


# コサイン類似度
from scipy.spatial.distance import cosine
1 - cosine(u, v)


# ジャッカード係数
from scipy.spatial.distance import cosine
1 - cosine(u, v)


def adjusted_cosine_coefficient(m, n, u_mean):
    adjusted_m = m - u_mean
    adjusted_n = n - u_mean
    numerator = np.dot(adjusted_m, adjusted_n)
    denominator = np.sqrt(sum(adjusted_m **2)) * np.sqrt(sum(adjusted_n **2))
    return numerator / denominator


rating = np.asarray([[5, 0, 2],[4, 0, 1], [0, 4, 5]])
u_mean = rating.mean(axis=1)
# array([ 2.33333333, 1.6666667, 3.])


u_cols = ['user_id', 'age', 'sex', 'occupation', 'zip_code']
users = pd.read_csv('ml-100k/u.user', sep='|', names=u_cols)
users.head()

r_cols = ['user_id', 'movie_id', 'rating', 'unix_timestamp']
ratings = pd.read_csv('ml-100k/u.data', sep='\t', names=r_cols)
ratings['date'] = pd.to_datetime(ratings['unix_timestamp'], unit='s')
ratings.head()

m_cols = ['movie_id', 'title', 'release_date', 'video_relase_date', 'imdb_url']
movies = pd.read_csv('ml-100k/u.item', sep='|', names=m_cols, usecols=range(5), encoding = "latin1")
movies.head()

movie_rating = pd.merge(movies, ratings)
lens = pd.merge(movie_rating, users)

lens.title.value_counts()[:25]

movie_stats = lens.groupby('title').agg({'rating': [np.size, np.mean]})
movie_stats.sort_values(by=[('rating', 'mean')], ascending=False).head()


atleast_100 = movie_stats['rating']['size'] >= 100
movie_stats[atleast_100].sort_values(by=[('rating', 'mean')], ascending=False)[:15]
