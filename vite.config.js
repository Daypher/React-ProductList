import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const router = env.VITE_ROUTER === "true";
	const base_path = router ? "/" : "/React-ProductList/";
	return {
		plugins: [react()],
		server: {
			port: 1234,
		},
		base: base_path,
	};
});
