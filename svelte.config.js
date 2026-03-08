import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = '/portfolio';
//const fallback = '404.html';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		//adapter: adapter({ fallback: fallback }),
		adapter: adapter({ fallback: process.env.NODE_ENV === 'development' ? 'index.html' : '404.html' }),
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		}
	}
};

export default config;
