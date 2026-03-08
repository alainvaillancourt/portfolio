import { defineConfig, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				'src/**/*.{js,ts}'
			]
		}
	},
	presets: [
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Inter',
					weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
					italic: true,
					provider: 'google'
				}
			}
		}),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
				'font-size': '1em'
			}
		})
	]
});
