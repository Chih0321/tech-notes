// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind'; // <--- 關鍵修正：正確引入 Tailwind 整合
import starlightBlog from 'starlight-blog';

import raccoonImage from './src/assets/raccoon.png';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // 這一行很重要：讓 Tailwind 能夠作用在 Starlight 的 UI 組件上，但不要覆蓋 Starlight 的基礎樣式
      applyBaseStyles: false,
    }),
    starlight({
      plugins: [
          // --- 設定部落格插件 ---
          starlightBlog({
            title: '部落格', // 部落格列表頁的大標題
            authors: {
              // 'me' 是作者 ID，你在文章裡會用到
              me: {
                name: 'Raccoon', // 顯示名稱
                title: '結構工程師 / Python 開發者', // 頭銜
                picture: raccoonImage,
                // url: 'https://github.com/你的帳號', // 點擊大頭貼會去的連結
              },
            },
            recentPostCount: 5, // 在側邊欄顯示最近 5 篇文章
            previewLink: true,  // 啟用文章預覽連結
          }),
      ],
      title: 'Raccoon Notes',
      logo: {
        src: './src/assets/raccoon.png',
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        {
          label: '最新BLOG文章',
          link: '/blog',
        },
        {
          label: '技術筆記', // 這是側邊欄的大標題
          // [關鍵] 指向我們剛剛建立的 article 資料夾，並讓它自動生成子選單
          autogenerate: { directory: 'article' },
        },
      ],
      customCss: ['./src/styles/custom.css'], // <--- 記得確認這行有加，才能讀到你的 custom.css
      head: [
        // 引入 Noto Sans TC (思源黑體)
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap',
          },
        },
      ],
    }),
  ],
});