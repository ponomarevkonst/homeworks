const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				'inner-border': 'inset 0px 0px 0px 1px #f00'
			},
			colors: {
				sky: colors.sky,
				teal: colors.teal,
				rose: colors.rose
			}
		}
	},
	safelist: [
		{
			pattern:
				/(bg|border|text)-(red|cyan|green|blue|yellow|green|orange|purple|pink|gray)-(50|100|200|300|400|800)/
		},
		{
			pattern: /text-(red|green|blue|yellow|green|orange|purple|pink|gray)-800/
		}
	],
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	]
};
