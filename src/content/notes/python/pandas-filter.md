---
title: "Pandas 同步過濾 DataFrame"
category: "Python"
order: 1
lastUpdated: 2026-01-15
---

## 問題描述

當我們有兩個索引相同的 DataFrame 時，如何根據其中一個的條件同時過濾兩者？

## 解法

最簡單的方法是先產出一個遮罩 (boolean mask)。

```python
import pandas as pd

# 建立範例資料
df1 = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
df2 = pd.DataFrame({'C': [7, 8, 9], 'D': [10, 11, 12]})

# 產生遮罩
mask = df1['A'] > 1

# 同步過濾
df1_filtered = df1[mask]
df2_filtered = df2[mask]

print(df1_filtered)
print(df2_filtered)
```

## 注意事項

- 確保 `df1` 與 `df2` 的 Index 是對齊的。
- 如果 Index 不同，過濾結果可能會出錯。
