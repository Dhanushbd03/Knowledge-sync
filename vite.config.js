import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; 

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    logOverride: {
      'this-is-undefined-in-esm': 'silent',
    },
  },
  base:"./",
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          'babel-plugin-styled-components',
        ],
      },
    }),
  ],
  build: {
    target: 'es2020',
    outDir: 'dist',
  },
});
