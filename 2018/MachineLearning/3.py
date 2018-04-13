import pandas as pd

m_cols = ['movie_id', 'title', 'release_date', 'video_relase_date', 'imdb_url']
movies = pd.read_csv('ml-100k/u.item', sep='|', names=m_cols, usecols=range(5), encoding = "latin1")
movies.head()