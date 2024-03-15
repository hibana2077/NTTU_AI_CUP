/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-03-15 09:47:24
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-03-15 09:58:55
 * @FilePath: \NTTU_AI_CUP\new_web\tailwind.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	darkMode: "class",
  	plugins: [nextui(),require("daisyui")]
}
