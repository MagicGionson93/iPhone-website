import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsn-9n",
      project: "javascript-react",
    }),
  ],
  base: "/iPhone-website/",

  build: {
    sourcemap: true,
  },
});
