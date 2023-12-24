import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const manifest = defineManifest({
	manifest_version: 3,
	name: "web_memo",
	version: "1.0.0",
	// content_scripts:[
	// 	{
	// 		matches: ['http://*/*', 'https://*/*', 'file:///*'],
	// 		js:["src/contentscript/script.ts"],
	// 	},
	// ],
	// "content_scripts": [
	// 	{
	// 		"js": ["src/content.jsx"],
	// 		// "js": ["src/contentScript/script.tsx"],
	// 		"matches": ["https://www.google.com/*"]
	// 	}
	// ],
	action: {
		default_popup: "src/popup/popup.html",
	},
	"content_scripts": [
		{
			"matches": [
				"http://*/*",
				"https://*/*"
			],
			"js": [ "src/content_scripts.js" ]
		}
	]
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),crx({manifest})
	],
})
