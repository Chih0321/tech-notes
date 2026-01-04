---
title: Python 結構計算範例
description: 展示如何在筆記中優雅地呈現程式碼與公式
sidebar:
  order: 1 # 決定在選單的順序 (1 最上面)
---

這是一篇測試筆記，展示 Starlight 對於工程師的強大支援。

## 1. 程式碼展示 (Expressive Code)

Starlight 內建了強大的程式碼高亮功能，可以顯示檔名、行號，甚至標記特定行。

```python title="beam_calc.py" {3-4}
def calculate_moment(force, length):
    """計算懸臂樑的彎矩"""
    moment = force * length
    print(f"Calculated Moment: {moment} kN-m")
    return moment

# 執行計算
m = calculate_moment(10, 5)