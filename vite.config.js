import { defineConfig } from 'vite';
import dotenv from 'dotenv';
// import fs from 'vite-plugin-fs';

dotenv.config();

export default defineConfig(({ mode }) => {
	return {
		plugins: [/*fs()*/],
		server: { host: '0.0.0.0', port: 8000 },
		clearScreen: false,
		build: {
			minify: 'esbuild',
			sourcemap: false
		},
		esbuild: {
			pure: mode === 'production' ? [ 'console.log' ] : [],
			keepNames: true,
		},
	}
})
