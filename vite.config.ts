import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfig from './tsconfig.json';

export default defineConfig(({  }) => {

  return {
    server: {
      port: 4000,
      strictPort: true,
      watch: {
        usePolling: true
      },
    },
    preview: {
      port: 4000,
      strictPort: true,
    },
    build: {
      outDir: 'dist',
      target: 'esnext',
    },
    resolve: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      alias: Object.keys(tsconfig.compilerOptions.paths).map((aliasName) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const aliasPath = tsconfig.compilerOptions.paths[aliasName][0].replace('*', '');
        return {
          find: aliasName.replace('/*', ''),
          replacement: path.resolve(__dirname, `/src/${aliasPath}`),
        };
      }),
    },
    plugins: [
      react(),
      //TODO: install svgr
      // svgr(), 
      // logs linting results in console when running vite dev
      // linting still needs to be ran with the build or as a pre-commit hhook or something
      // eslintPlugin(),
    ],
  };
});
