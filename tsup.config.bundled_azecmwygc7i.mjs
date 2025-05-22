// tsup.config.ts
import { defineConfig } from "tsup";
var tsup_config_default = defineConfig({
  entry: ["src/lib/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ["react", "react-dom"],
  treeshake: true,
  esbuildOptions(options) {
    options.jsx = "react-jsx";
    options.banner = {
      js: "/**\n * Tinkr - A lightweight, accessible toast notification library for React\n * @license MIT\n */"
    };
  }
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL2hvbWUvcHJvamVjdC90c3VwLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9ob21lL3Byb2plY3QvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd0c3VwJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZW50cnk6IFsnc3JjL2xpYi9pbmRleC50cyddLFxuICBmb3JtYXQ6IFsnY2pzJywgJ2VzbSddLFxuICBkdHM6IHRydWUsXG4gIHNwbGl0dGluZzogZmFsc2UsXG4gIHNvdXJjZW1hcDogdHJ1ZSxcbiAgY2xlYW46IHRydWUsXG4gIG1pbmlmeTogdHJ1ZSxcbiAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gIHRyZWVzaGFrZTogdHJ1ZSxcbiAgZXNidWlsZE9wdGlvbnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMuanN4ID0gJ3JlYWN0LWpzeCc7XG4gICAgb3B0aW9ucy5iYW5uZXIgPSB7XG4gICAgICBqczogJy8qKlxcbiAqIFRpbmtyIC0gQSBsaWdodHdlaWdodCwgYWNjZXNzaWJsZSB0b2FzdCBub3RpZmljYXRpb24gbGlicmFyeSBmb3IgUmVhY3RcXG4gKiBAbGljZW5zZSBNSVRcXG4gKi8nLFxuICAgIH07XG4gIH0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXFMLFNBQVMsb0JBQW9CO0FBRWxOLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU8sQ0FBQyxrQkFBa0I7QUFBQSxFQUMxQixRQUFRLENBQUMsT0FBTyxLQUFLO0FBQUEsRUFDckIsS0FBSztBQUFBLEVBQ0wsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLEVBQy9CLFdBQVc7QUFBQSxFQUNYLGVBQWUsU0FBUztBQUN0QixZQUFRLE1BQU07QUFDZCxZQUFRLFNBQVM7QUFBQSxNQUNmLElBQUk7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
