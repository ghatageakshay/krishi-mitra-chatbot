/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#16A34A"
				},
				accent: {
					DEFAULT: "#F59E0B"
				}
			},
			borderRadius: {
				"xl": "1rem"
			},
			boxShadow: {
				card: "0 10px 20px -10px rgba(0,0,0,0.15)"
			}
		}
	},
	plugins: []
}

