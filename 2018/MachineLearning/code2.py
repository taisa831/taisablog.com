from matplotlib import pyplot as plt
plt.style.use('ggplot')

lens.groupby('user_id').size().sort_values(ascending=False).hist()

plt.xlabel('rating size')
plt.ylabel('count of rating')

user_stats = lens.groupby('user_id').agg({'rating': [np.size, np.mean]})
user_stats['raging'].describe()