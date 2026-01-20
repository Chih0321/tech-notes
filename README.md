# Raccoon Notes - 個人筆記與部落格

這是一個基於 **Astro 5** 建立的個人技術網站，結合了**長篇部落格 (Blog)** 與 **階層式技術筆記 (Notes)**，專為內容創作與技術積累而設計。

## 🚀 核心功能

- **雙核心內容架構**：
  - **Blog (部落格)**：適合發布心得、週報或專案紀錄。
  - **Notes (技術筆記)**：適合存放結構化、階層式的技術文件與速查表。
- **數學公式支援**：高度整合 **KaTeX**，支援行內 ($\sigma = P/A$) 與區塊 $\LaTeX$ 公式。
- **極致閱讀體驗**：
  - **Shiki 代碼高亮**：提供頂級的語法著色與多語言支援。
  - **自動目錄 (TOC)**：所有文章均自動生成導覽目錄。
  - **筆記導覽選單**：左側側邊欄依據文件夾目錄結構自動生成分類，方便檢索。
- **MDX 支援**：可在 Markdown 中直接引入互動式元件。

## 🛠️ 技術選型

- **核心框架**：[Astro 5](https://astro.build/)
- **樣式工具**：[Tailwind CSS](https://tailwindcss.com/)
- **內容處理**：Astro Content Collections (Astro 5 Loader API)
- **公式渲染**：`remark-math` & `rehype-katex`
- **代碼高亮**：Shiki
- **字體**：Outfit (標題) & Noto Sans TC (內文)

## 📂 專案結構

```text
my-site/
├─ src/
│  ├─ content/          # 內容中心
│  │  ├─ blog/          # 部落格文章 (.md, .mdx)
│  │  └─ notes/         # 技術筆記 (支援子資料夾分類)
│  ├─ layouts/          # 頁面佈局 (Base, Blog, Notes)
│  ├─ components/       # 共用元件 (Header, Sidebar, TOC, etc.)
│  ├─ pages/            # 路由定義
│  └─ styles/           # 全域 CSS 與 Tailwind 配置
├─ public/              # 靜態資源 (Logo, Favicon)
└─ astro.config.mjs     # Astro 配置檔
```

## ⌨️ 開發指令

在專案根目錄下，您可以使用以下指令：

| 指令                | 動作                                |
| :------------------ | :---------------------------------- |
| `npm install`     | 安裝必要依賴套件                    |
| `npm run dev`     | 啟動開發伺服器 (`localhost:4321`) |
| `npm run build`   | 建構靜態網站至 `./dist/` 資料夾   |
| `npm run preview` | 在本地預覽建構好的成品              |

## ✍️ 開始寫作

### 新增部落格文章

在 `src/content/blog/` 下建立新的 `.mdx` 檔案：

```markdown
---
title: "我的第一篇文章"
description: "這是一篇測試文章"
pubDate: 2026-01-19
tags: [Astro, Project]
---
內容...
```

### 新增技術筆記

在 `src/content/notes/` 下依照類別建立資料夾與檔案：

```markdown
---
title: "Python 速查表"
category: "Programming"
order: 1
---
內容...
```

---

*Built with ❤️ by Raccoon*
