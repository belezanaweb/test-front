/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup-test.ts'],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        '**/services/**',
        '**/theme/**',
        '**/src/**/*.test.tsx',
        '**/src/**/*.test.ts'
      ],
    }
  },
  server: {
    port: 3000
  }
})
