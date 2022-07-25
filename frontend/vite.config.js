import { svelte } from '@sveltejs/vite-plugin-svelte';
import babel from 'vite-plugin-babel';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [babel, svelte()],
	resolve: {
		alias: {
			'@app': path.resolve('./src/app'),
			'@pages': path.resolve('./src/pages'),
			'@widgets': path.resolve('./src/widgets'),
			'@features': path.resolve('./src/features'),
			'@entities': path.resolve('./src/entities'),
			'@shared': path.resolve('./src/shared')
		}
	}
};

export default config;
