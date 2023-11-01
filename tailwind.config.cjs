/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			},
		},
		colors: {
			'tsjgreen': '#a8e1b0',
		},
	},
	plugins: [require("@tailwindcss/typography"), require.resolve("prettier-plugin-astro")],
	darkMode: "class",
};