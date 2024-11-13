import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				main: "var(--main-color)",
				darkmain: "var(--dark-main-color)",
				break: "var(--break-color)",
				mediumLight: "var(--medium-light-color)",
				darkestLight: "var(--darkest-light-color)",
				accent: "var(--accent-color)",
				navMain: "var(--nav-main-color)",
				navBreak: "var(--nav-break-color)",
				navAccent: "var(--nav-accent-color)",
				alert: "var(--alert-color)",
				blackColor: "var(--black-color)",
				formBgc: "var(--form-bgc)",
				ctabgc: "var(--cta-bgc)",
			},
			fontFamily: {
				"proza-libre": ["Proza Libre", "sans-serif"],
				hind: ["Hind", "sans-serif"],
			},
			keyframes: {
				expand: {
					"0%": { maxHeight: "0", opacity: "0" },
					"100%": { maxHeight: "100%", opacity: "1" },
				},
				collapse: {
					"0%": { maxHeight: "100%", opacity: "1" },
					"100%": { maxHeight: "0", opacity: "0" },
				},
			},
			animation: {
				expand: "expand 0.5s ease-out forwards",
				collapse: "collapse 0.5s ease-out forwards",
			},
		},
	},
	plugins: [],
} satisfies Config;
