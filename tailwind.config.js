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
				xs: ['1rem', { lineHeight: '1.5rem' }],
				sm: ['1.618rem', { lineHeight: '2.427rem' }],
				base: ['2.617rem', { lineHeight: '3.925rem' }],
				lg: ['4.235rem', { lineHeight: '6.325rem' }],
				xl: '11.089rem', 
				'2xl': '17.942rem',
				'3xl': '29.030rem',
				'4xl': '46.970rem',
			},
			fontFamily: {
				cotham: ['var(--font-cotham)'],
				cooper: ['var(--font-cooper)'],
			},
		},
	},
	plugins: [],
};


fontSize: {
	xs: ['1rem', { lineHeight: '1rem' }],
	sm: ['1.618rem', { lineHeight: '1.25rem' }],
	base: ['2.617rem', { lineHeight: '1.5rem' }],
	lg: ['4.235rem', { lineHeight: '1.75rem' }],
	xl: ['11.089rem', { lineHeight: '1.75rem' }],
	'2xl': ['17.942rem', { lineHeight: '2rem' }],
	'3xl': ['29.030rem', { lineHeight: '2.25rem' }],
	'4xl': ['46.970rem', { lineHeight: '2.5rem' }],
  },