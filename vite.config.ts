/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup-test.ts'],
    exclude: ['node_modules'],
    coverage: {
      exclude: ['/src/test/**', '/src/mocks/**']
    }
  },
  server: {
    port: 3000
  }
})
