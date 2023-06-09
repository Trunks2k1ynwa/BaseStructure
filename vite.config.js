import React from "react";
import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/styles",
      // Thêm các đường dẫn định danh khác vào đây
    },
  },
});
