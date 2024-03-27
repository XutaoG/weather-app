/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"rb": "2px 2px 10px rgba(0, 0, 0, 0.25)",
				"c": "0px 0px 10px rgba(0, 0, 0, 0.25)",
				"r": "2px 0px 10px rgba(0, 0, 0, 0.25)",
				"b": "0px 2px 10px rgba(0, 0, 0, 0.25)",
				"b-s": "0px 2px 5px rgba(0, 0, 0, 0.5)"
			}
		},
	},
	plugins: [],
}