
```python
import pandas as pd
import matplotlib.pyplot as plt

# ==========================================
# 1. LOAD DATA
# ==========================================

df = pd.read_csv("data.csv")

print("First 5 rows:")
print(df.head())

print("\nShape:")
print(df.shape)

print("\nInformation:")
print(df.info())

print("\nStatistics:")
print(df.describe())


# ==========================================
# 2. MISSING VALUES
# ==========================================

print("\nMissing values:")
print(df.isnull().sum())

# Fill missing age with mean
df["age"] = df["age"].fillna(df["age"].mean())

# Alternative:
# df = df.dropna()


# ==========================================
# 3. FILTERING
# ==========================================

# AND
result1 = df[
    (df["age"] > 30) &
    (df["city"] == "Ahmedabad")
]

# OR
result2 = df[
    (df["age"] > 30) |
    (df["city"] == "Surat")
]

# NOT
result3 = df[
    ~(df["city"] == "Surat")
]

# IN
result4 = df[
    df["city"].isin(["Surat", "Vadodara"])
]

# Query
result5 = df.query(
    "age > 30 and city != 'Surat'"
)


# ==========================================
# 4. SORTING
# ==========================================

ascending = df.sort_values(
    "age",
    ascending=True
)

descending = df.sort_values(
    "age",
    ascending=False
)

multiple = df.sort_values(
    ["city", "age"],
    ascending=[True, False]
)


# ==========================================
# 5. GROUP BY
# ==========================================

average_salary = df.groupby(
    "city"
)["salary"].mean()

print("\nAverage Salary:")
print(average_salary)


# Multiple aggregations
grouped = df.groupby("city").agg(
    avg_sal=("salary", "mean"),
    total=("salary", "count")
)

print("\nGrouped Data:")
print(grouped)


# ==========================================
# 6. HAVING
# ==========================================

having_result = grouped[
    grouped["total"] > 5
]

print("\nHAVING total > 5:")
print(having_result)


# Alternative
filtered_groups = df.groupby(
    "city"
).filter(
    lambda x: len(x) > 5
)


# ==========================================
# 7. VISUALIZATION
# ==========================================

# Bar Chart
df["city"].value_counts().plot(
    kind="bar"
)

plt.title("Count by City")
plt.xlabel("City")
plt.ylabel("Count")
plt.show()


# Histogram
df["age"].plot(
    kind="hist"
)

plt.title("Age Distribution")
plt.xlabel("Age")
plt.show()


# Scatter Plot
plt.scatter(
    df["age"],
    df["salary"]
)

plt.title("Age vs Salary")
plt.xlabel("Age")
plt.ylabel("Salary")
plt.show()
```


---

⭐ If this repository helped you with **Pandas, Data Analysis, or Python revision**, consider giving it a star!
