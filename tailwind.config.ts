import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				gradientRed: 'linear-gradient(45deg, red, blue)',
				defaultRed: '#c73228'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				genera: 'var(--font-genera-sans)',
				argentum: 'var(--font-argentum-sans)',
				bloody: 'var(--font-bloody-sans)',
				neoplanta: 'var(--font-neoplanta-sans)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
