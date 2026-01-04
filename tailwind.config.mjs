/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            // 這裡可以延伸你的顏色設定，搭配 Starlight
            colors: {
                // 如果需要自定義顏色可寫在這裡
            }
        },
	},
	plugins: [
        // Starlight 插件通常會自動處理，這裡保持乾淨即可
    ],
}