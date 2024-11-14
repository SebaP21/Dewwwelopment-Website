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
				"fade-left": {
					"0%": { opacity: "0", transform: "translateX(100%)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"fade-right": {
					"0%": { opacity: "0", transform: "translateX(-200%)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(100%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-down": {
					"0%": { opacity: "0", transform: "translateY(-100%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"scale-in-center": {
					"0%": { scale: "0", opacity: "0" },
					"100%": { scale: "1", opacity: "1" },
				},
				"fade-front": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				scale: {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(1.05)" },
				},
			},
			animation: {
				expand: "expand 0.5s ease-out forwards",
				collapse: "collapse 0.5s ease-out forwards",
				"fade-left": "fade-left 0.5s ease-out",
				"fade-right": "fade-right 0.5s ease-out",
				"fade-up": "fade-up 0.5s ease-out",
				"fade-down": "fade-down 0.5s ease-out",
				"scale-in-center": "scale-in-center 0.3s ease-out",
				"scale-up": "scale 0.5s ease-in-out forwards",
				"fade-front": "fade-front 1s ease-in-out forwards",
			},
		},
	},
	plugins: [],
} satisfies Config;
