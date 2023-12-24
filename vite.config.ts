import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const manifest = defineManifest({
	manifest_version: 3,
	name: "web_memo",
	version: "1.0.0",
	action: {
		//   default_popup: "index.html",
		default_popup: "src/popup/popup.html",
	},
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),crx({manifest})],
	// root: ('/'),
})
