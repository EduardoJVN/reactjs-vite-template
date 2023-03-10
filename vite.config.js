import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  test: {
    css: false,
    include: ['src/**/__tests__/*', 'src/__tests__/*'],
    globals: true,
    environment: 'jsdom',
    // setupFiles: 'src/setupTests.ts',
    clearMocks: true,
    coverage: {
      provider: 'c8', // or 'c8'
      reporter: ['text', 'json', 'html'],
    },
  },
});
