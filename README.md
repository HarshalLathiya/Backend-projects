import pandas as pd
import matplotlib.pyplot as plt

# 1. Load CSV
df = pd.read_csv("data.csv")
print(df.head(), df.shape, df.info(), df.describe())

# 2. Missing values
print(df.isnull().sum())              # count per column
print(df[df.isnull().any(axis=1)])    # rows with any missing
df["age"] = df["age"].fillna(df["age"].mean())   # fill
df = df.dropna()                                  # or drop

# 3. Queries (AND = &, OR = |, NOT = ~; always use brackets)
df[(df["age"] > 30) & (df["city"] == "Ahmedabad")]   # AND
df[(df["age"] > 30) | (df["city"] == "Surat")]       # OR
df[~(df["city"] == "Surat")]                         # NOT
df[df["city"].isin(["Surat", "Vadodara"])]           # IN
df.query("age > 30 and city != 'Surat'")             # query() style

# 4. Charts
df["city"].value_counts().plot(kind="bar")
plt.title("Count by City"); plt.xlabel("City"); plt.ylabel("Count")
plt.show()
df["age"].plot(kind="hist")      # also: kind="pie", plt.scatter(x, y)

# 5. Sort, group by, having
df.sort_values("age", ascending=True)
df.sort_values("age", ascending=False)
df.sort_values(["city", "age"], ascending=[True, False])

g = df.groupby("city")["salary"].mean()
g = df.groupby("city").agg(avg_sal=("salary", "mean"), total=("salary", "count"))

# HAVING = filter AFTER groupby
g[g["total"] > 5]
df.groupby("city").filter(lambda x: len(x) > 5)   # another way
