import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  base: "/CCG27/",
  plugins: [
    tanstackStart({
      server: { entry: "src/server.ts" },
    }),

    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
