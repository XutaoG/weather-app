/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"rb": "2px 2px 8px rgba(50, 50, 50, 0.25)",
				"c": "0px 0px 10px rgba(50, 50, 50, 0.25)",
				"r": "2px 0px 8px rgba(50, 50, 50, 0.25)",
				"b": "0px 2px 6px rgba(50, 50, 50, 0.25)",
				"b-s": "0px 2px 5px rgba(50, 50, 50, 0.5)"
			},
			colors: {
				"dark-gray-xl": "rgb(22, 22, 25)",
				"dark-gray": "rgb(30, 31, 36)",
				"mid-gray": "rgb(46, 46, 56)",
				"light-gray": "rgb(60, 61, 72)",
				"light-gray-xl": "rgb(74, 75, 87)",
				"blue": "rgb(74, 122, 171)",
				"dark-blue": "rgb(62, 104, 156)"
			},
		},
	},
	plugins: [],
}