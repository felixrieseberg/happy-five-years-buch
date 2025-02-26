import type { Config } from "tailwindcss"

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: {
					light: "#ffffff",
					dark: "#121212",
				},
				foreground: {
					light: "#000000",
					dark: "#ffffff",
				},
			},
			fontFamily: {
				'italiana': ['Italiana', 'serif'],
			},
		},
	},
	plugins: [],
} satisfies Config
