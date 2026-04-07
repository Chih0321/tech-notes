# UI 修正與設計優化報告 - 莫蘭迪藍調 (Morandi Blue)

本報告記錄了對專案 UI 的全面優化與修正，旨在達成使用者要求的「簡潔有力、美觀、莫蘭迪藍色調」風格。

## 🎨 設計變更摘要

### 1. 核心配色方案 (Global CSS Variables)

將原本的高飽和度綠色/青色替換為低飽和度的**莫蘭迪石板藍 (Morandi Slate Blue)**。這為技術文件帶來了更專業、冷靜且耐看的視覺感受。

- **主色 (Accent)**: `#728F9B` (亮) / `#8FB1BB` (深)
- **背景 (Background)**: 採用淺灰藍 `#F4F7F9` 取代純白，減少視覺疲勞。
- **文字 (Text)**: 使用深灰藍 `#4A5568` 提升閱讀高級感。

### 2. Header & 導航優化

- **Logo 漸層**: 由強烈的藍綠漸層改為灰藍至深石板藍的平滑過渡。
- **懸停邏輯**: 移除純色切換，改用微透明背景 (`accent/5`) 與 `transition-all` 動態效果，視覺更輕盈。
- **佈局規範**: 遵循 shadcn 建議，使用 `gap-*` 替代 `space-x-*` 以獲得更好的佈局控制。

### 3. 首頁 (Hero Section) 重塑

- **視覺重心**: Hero 標題改用多層次莫蘭迪漸層，並增加標題與內文間距。
- **按鈕設計**: 圓角由 `rounded-lg` 升級為 `rounded-xl`，更符合現代美學。增加帶有主色調透明度的軟陰影。
- **卡片展示**: 最新文章與筆記卡片增加了更細緻的懸停位移效果 (`-translate-y-1`) 與深色陰影，增強互動感。

### 4. 文章排版 (Typography)

透過 `prose-custom` 的精確調整，強化了技術內容的呈現：

- **行內程式碼 (Inline Code)**: 移除衝突的橘色，改為莫蘭迪藍背景與文字，視覺更統一。
- **程式碼區塊 (Code Blocks)**: 增加 `shadow-sm` 並統一使用 `rounded-xl`。
- **引用塊 (Blockquote)**: 增加淡藍色背景與厚邊線，強化重點資訊的視覺提醒。
- **字體比例**: 優化標題與段落的垂直間距，提升長文閱讀體驗。

## 🛠 實作檔案清單

1. `design-system/MASTER.md`: 確立全站設計系統 Source of Truth。
2. `src/styles/global.css`: CSS 變數與全域 Typography 修正。
3. `src/components/Header.astro`: 導航與 Logo 樣式優化。
4. `src/pages/index.astro`: 首頁 Hero 區域與卡片佈局重塑。
5. `src/layouts/BlogLayout.astro`: 文章頁面元件與標籤配色優化。
6. `src/components/ThemeToggle.astro`: 主題切換按鈕細節調整。

## 📝 後續建議

- **圖示一致性**: 確保專案內所有圖示使用 Lucide 且尺寸統一。
- **圖片圓角**: 建議文章內的圖片均加入 `rounded-xl` 及 `border`。
