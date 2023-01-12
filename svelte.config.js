import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			"$components": path.resolve('./src/components')
		}
	},

	preprocess: [
		mdsvex({
			extensions: [
				'.svelte',
				'.svx'
			],
		}),
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	]
};

export default config;
