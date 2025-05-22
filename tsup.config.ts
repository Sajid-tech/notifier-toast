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
    options.jsx = 'transform';  // Changed from 'react-jsx' to 'transform'
    options.jsxFactory = 'React.createElement';
    options.jsxFragment = 'React.Fragment';
    options.banner = {
      js: '/**\n * Tinkr - A lightweight, accessible toast notification library for React\n * @license MIT\n */',
    };
  },
});