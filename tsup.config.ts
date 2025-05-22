import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/lib/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.jsxImportSource = 'react';
    options.banner = {
      js: '/**\n * Tinkr - A lightweight, accessible toast notification library for React\n * @license MIT\n */',
    };
  },
});