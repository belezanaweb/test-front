/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(), 
    ssr(), 
    tsconfigPaths()
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup-test.ts']
  },
  server: {
    port: 3000
  }
})
