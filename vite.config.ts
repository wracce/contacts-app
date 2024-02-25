import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig, loadEnv } from "vite"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }


  return {
    base: process.env.VITE_BASE,
    plugins: [react()],
    resolve: {
      alias: {
        "@public": path.resolve(__dirname, "./public"),
        "@app": path.resolve(__dirname, "./src/app"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@entities": path.resolve(__dirname, "./src/entities"),
        "@shared": path.resolve(__dirname, "./src/shared"),
      },
    },
  }
})
