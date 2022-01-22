const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	mode: 'jit',
	important: true,
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Roboto Condensed"', '"Kiwi Maru"', ...defaultTheme.fontFamily.sans],
				mono: ['"LOF Nexus 6"', ...defaultTheme.fontFamily.mono],
				serif: ['"Noto Serif"', '"Zen Antique Soft"'],
			},
			colors: {
				mbaharip: {
					light: '#b3b2b3',
					hovLight: '#DAD7DA',
					dark: '#1a1a1a',
					hovDark: '#404040',
				},
			},
			backgroundImage: {
				main: "url('/bg-pattern.png')",
			},
		},
	},
	plugins: [
		// ...
		require('@tailwindcss/line-clamp'),
	],
};
