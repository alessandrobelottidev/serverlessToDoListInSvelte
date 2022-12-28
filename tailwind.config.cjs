/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#0ea5e9',
					secondary: '#fff',
					accent: '#1FB2A6',
					neutral: '#191D24',
					'base-100': '#fff',
					info: '#4b5563',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272',
				},
			},
		],
	},
}
