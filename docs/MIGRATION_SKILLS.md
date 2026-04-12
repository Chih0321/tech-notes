# Obsidian to Astro MDX Migration Skills

這份文件記錄了從 Obsidian 遷移筆記至 Astro MDX 時常見的語法錯誤與修正方案。

## 1. MDX 比較符號衝突 (Strict Syntax)
**錯誤訊息**：`MDXError: Unexpected character ... before name`
- **原因**：MDX 將 `<` 視為 JSX 標籤開始。
- **修正**：在 `<` 前後增加空格。
- **例**：`SF < 5.0` (正確) vs `SF<5.0` (報錯)。

## 2. 圖片資源管理 (Assets Management)
- **存放路徑**：`src/assets/notes/{category}/{topic}/`
- **引用語法**：使用標準 Markdown 語法 `![Alt](../../../assets/...)`。
- **搬移建議**：將 `IMG-xxx.png` 重新命名為具備語意的名稱（如 `process-flow.png`）。

## 3. 內部連結轉化 (Cross-Referencing)
- **語法**：將 WikiLink `[[filename|text]]` 轉為 `[text](./filename)`。
- **注意**：Astro 內容集合的連結通常省略 `.mdx` 副檔名。

## 4. LaTeX 區塊優化
- **建議**：在較長的 LaTeX `\begin{aligned}` 區塊前後留空行，確保 MDX 解析器不會將其與一般文字混淆。
