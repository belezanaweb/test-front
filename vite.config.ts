/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "_test": fileURLToPath(new URL("./test", import.meta.url)),
      "_types": fileURLToPath(new URL("./src/@types", import.meta.url)),
      "_components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "_context": fileURLToPath(new URL("./src/context", import.meta.url)),
      "_hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "_modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
      "_pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "_services": fileURLToPath(new URL("./src/services", import.meta.url)),
      "_theme": fileURLToPath(new URL("./src/theme", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
