import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { babel } from '@rollup/plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		reactRefresh(),
		{
			...babel({
				babelHelpers: 'bundled',
				exclude: /node_modules/,
			}),
			enforce: 'pre',
		},
	],
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 1234,
		open: true,
	},
})
