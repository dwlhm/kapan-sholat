/// <reference types="vitest" />
/** @type {import('vite').UserConfig} */

import * as path from "path";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["src/setupTest.ts"],
  },
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ],
  },
};
