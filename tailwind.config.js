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
				xs_f: '1rem',
				s_f: '1.618rem',
				sm_f: '2.617rem',
				m_f: '4.235rem',
				ml_f: '11,089rem',
				l_f: '17.942rem',
				xl_f: '29,030rem',
				xxl_f: '46.970rem',
				inherit: 'inherit',
			},
		},
	},
	plugins: [],
};
