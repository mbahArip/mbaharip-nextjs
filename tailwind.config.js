const defaultTheme = require('tailwindcss/defaultTheme');
const svgToDataUri = require('mini-svg-data-uri');

let safeList = [];

module.exports = {
	darkMode: 'class',
	mode: 'jit',
	important: true,
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [...safeList],
	theme: {
		extend: {
			keyframes: {
				'arrow-bounce': {
					'0%': {
						transform: 'translateY(0%)',
					},
					'50%': {
						transform: 'translateY(-25%)',
					},
					'100%': {
						transform: 'translateY(0%)',
					},
				},
			},
			animation: {
				'arrow-bounce': 'arrow-bounce 2s infinite',
			},
			fontFamily: {
				sans: [
					'"ORIENTICA"',
					'"Kosugi"',
					...defaultTheme.fontFamily.sans,
				],
				mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
				nexus: ['"LOF Nexus 6"'],
				serif: ['"Noto Serif"', '"Zen Antique Soft"'],
			},
			colors: {
				main: {
					primary: '#ea580c',
					'primary-hover': '#f97316',
					'primary-active': '#c2410c',

					compliment: '#0b61f5',
					'compliment-hover': '#0074ff',
					'compliment-active': '#243cd6',

					light: '#f1f1f1',
					'light-hover': '#ffffff',
					'light-active': '#eaeaea',
					'light-dark': '#777777',

					dark: '#0d0d0d',
					'dark-hover': '#171717',
					'dark-active': '#030303',

					info: '#2563eb',
					'info-hover': '#3b82f6',
					'info-active': '#1d4ed8',
					'info-dark': '#1e40af',

					success: '#16a34a',
					'success-hover': '#22c55e',
					'success-active': '#15803d',
					'success-dark': '#166534',

					warning: '#facc15',
					'warning-hover': '#fde047',
					'warning-active': '#eab308',
					'warning-dark': '#a16207',

					danger: '#dc2626',
					'danger-hover': '#ef4444',
					'danger-active': '#b91c1c',
					'danger-dark': '#991b1b',

					'back-dark-0': '#18181b',
					'back-dark-1': '#1c1c1f',
					'back-dark-2': '#202023',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
