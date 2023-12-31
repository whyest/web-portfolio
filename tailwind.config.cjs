/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				strongCyan: 'hsl(171, 66%, 44%)',
				lightBlue: 'hsl(233, 100%, 69%)',
				darkGrayishBlue: 'hsl(210, 10%, 28%)',
				grayishBlue: 'hsl(201, 12%, 40%)',
			},
			fontFamily: {
				sans: ['Bai Jamjuree', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
