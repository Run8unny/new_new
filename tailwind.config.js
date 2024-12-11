/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			screens: {
				xs: '360px',
				sm: '480px',
				md: '768px',
				m: '976px',
				lg: '1280px',
				xl: '1440px',
			},
			fontSize: {
				xs: '1rem',
				sm: '1.618rem',
				base: '2.617rem',
				lg: '4.235rem',
				xl: '11.089rem',
				'2xl': '17.942rem',
				'3xl': '29.030rem',
				'4xl': '46.970rem',
			},
		},
	},
	plugins: [],
};
