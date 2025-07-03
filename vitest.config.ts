import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: [],
    coverage: {
      reporter: ['text', 'json'],
      thresholds: {
      lines: 85,
      functions: 85,
      branches: 85,
      statements: 85,
      },
      provider: 'v8',

    },
  },
});
