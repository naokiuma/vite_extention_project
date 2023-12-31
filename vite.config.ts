import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const manifest = defineManifest({
	manifest_version: 3,
	name: "web_memo",
	version: "1.0.0",
	content_scripts:[
		{
			matches: ['http://*/*', 'https://*/*', 'file:///*'],
			js:["src/content_script/script.ts"],
		},
	],
	action: {
		default_popup: "src/popup/popup.html",
	},
	permissions: ["tabs","storage"],
	background:{
		service_worker:"src/background/index.ts",
		type: "module"
	}
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),crx({manifest})],
})
