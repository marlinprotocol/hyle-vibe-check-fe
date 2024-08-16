// vite.config.ts
import { defineConfig } from "file:///home/marlin/hyle-vibe-check-frontend/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///home/marlin/hyle-vibe-check-frontend/node_modules/vite-plugin-node-polyfills/dist/index.js";
import vue from "file:///home/marlin/hyle-vibe-check-frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import copy from "file:///home/marlin/hyle-vibe-check-frontend/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
import topLevelAwait from "file:///home/marlin/hyle-vibe-check-frontend/node_modules/vite-plugin-top-level-await/exports/import.mjs";
var wasmContentTypePlugin = {
  name: "wasm-content-type-plugin",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.endsWith(".wasm")) {
        res.setHeader("Content-Type", "application/wasm");
      }
      next();
    });
  }
};
var vite_config_default = defineConfig({
  build: {
    sourcemap: false,
    minify: true,
    target: "esnext"
  },
  plugins: [
    topLevelAwait(),
    vue(),
    copy({
      targets: [
        {
          src: "node_modules/@aztec/**/*.wasm",
          dest: "node_modules/.vite/deps"
        },
        {
          src: "node_modules/@noir-lang/**/*.wasm",
          dest: "node_modules/.vite/deps"
        }
      ],
      copySync: true,
      hook: "buildStart"
    }),
    wasmContentTypePlugin,
    nodePolyfills({
      include: ["buffer", "path", "fs", "os", "crypto", "stream", "vm"],
      globals: {
        Buffer: true,
        // can also be 'build', 'dev', or false
        global: true,
        process: true
      },
      protocolImports: false
    })
    // visualizer(),
    // analyze(),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://65.2.80.246:5000",
        // The API server
        changeOrigin: true,
        // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, "")
        // Remove /api prefix when forwarding
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tYXJsaW4vaHlsZS12aWJlLWNoZWNrLWZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9tYXJsaW4vaHlsZS12aWJlLWNoZWNrLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL21hcmxpbi9oeWxlLXZpYmUtY2hlY2stZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1ub2RlLXBvbHlmaWxsc1wiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgY29weSBmcm9tIFwicm9sbHVwLXBsdWdpbi1jb3B5XCI7XG5cbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5pbXBvcnQgYW5hbHl6ZSBmcm9tIFwicm9sbHVwLXBsdWdpbi1hbmFseXplclwiO1xuXG5pbXBvcnQgdG9wTGV2ZWxBd2FpdCBmcm9tIFwidml0ZS1wbHVnaW4tdG9wLWxldmVsLWF3YWl0XCI7XG5cbmNvbnN0IHdhc21Db250ZW50VHlwZVBsdWdpbiA9IHtcbiAgICBuYW1lOiBcIndhc20tY29udGVudC10eXBlLXBsdWdpblwiLFxuICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXI6IGFueSkge1xuICAgICAgICBzZXJ2ZXIubWlkZGxld2FyZXMudXNlKChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcS51cmwuZW5kc1dpdGgoXCIud2FzbVwiKSkge1xuICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi93YXNtXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgYnVpbGQ6IHtcbiAgICAgICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgICB0YXJnZXQ6IFwiZXNuZXh0XCIsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHRvcExldmVsQXdhaXQoKSxcbiAgICAgICAgdnVlKCksXG4gICAgICAgIGNvcHkoe1xuICAgICAgICAgICAgdGFyZ2V0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIm5vZGVfbW9kdWxlcy9AYXp0ZWMvKiovKi53YXNtXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc3Q6IFwibm9kZV9tb2R1bGVzLy52aXRlL2RlcHNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIm5vZGVfbW9kdWxlcy9Abm9pci1sYW5nLyoqLyoud2FzbVwiLFxuICAgICAgICAgICAgICAgICAgICBkZXN0OiBcIm5vZGVfbW9kdWxlcy8udml0ZS9kZXBzXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb3B5U3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGhvb2s6IFwiYnVpbGRTdGFydFwiLFxuICAgICAgICB9KSxcbiAgICAgICAgd2FzbUNvbnRlbnRUeXBlUGx1Z2luLFxuICAgICAgICBub2RlUG9seWZpbGxzKHtcbiAgICAgICAgICAgIGluY2x1ZGU6IFtcImJ1ZmZlclwiLCBcInBhdGhcIiwgXCJmc1wiLCBcIm9zXCIsIFwiY3J5cHRvXCIsIFwic3RyZWFtXCIsIFwidm1cIl0sXG4gICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgQnVmZmVyOiB0cnVlLCAvLyBjYW4gYWxzbyBiZSAnYnVpbGQnLCAnZGV2Jywgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm90b2NvbEltcG9ydHM6IGZhbHNlLFxuICAgICAgICB9KSxcbiAgICAgICAgLy8gdmlzdWFsaXplcigpLFxuICAgICAgICAvLyBhbmFseXplKCksXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgICAgcHJveHk6IHtcbiAgICAgICAgICAgICcvYXBpJzoge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly82NS4yLjgwLjI0Njo1MDAwJywgLy8gVGhlIEFQSSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsIC8vIENoYW5nZXMgdGhlIG9yaWdpbiBvZiB0aGUgaG9zdCBoZWFkZXIgdG8gdGhlIHRhcmdldCBVUkxcbiAgICAgICAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLCAvLyBSZW1vdmUgL2FwaSBwcmVmaXggd2hlbiBmb3J3YXJkaW5nXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyxvQkFBb0I7QUFDOVQsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUtqQixPQUFPLG1CQUFtQjtBQUUxQixJQUFNLHdCQUF3QjtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLGdCQUFnQixRQUFhO0FBQ3pCLFdBQU8sWUFBWSxJQUFJLENBQUMsS0FBVSxLQUFVLFNBQWM7QUFDdEQsVUFBSSxJQUFJLElBQUksU0FBUyxPQUFPLEdBQUc7QUFDM0IsWUFBSSxVQUFVLGdCQUFnQixrQkFBa0I7QUFBQSxNQUNwRDtBQUNBLFdBQUs7QUFBQSxJQUNULENBQUM7QUFBQSxFQUNMO0FBQ0o7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDSCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDWjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osS0FBSztBQUFBLE1BQ0QsU0FBUztBQUFBLFFBQ0w7QUFBQSxVQUNJLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0ksS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1Y7QUFBQSxNQUNKO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsSUFDVixDQUFDO0FBQUEsSUFDRDtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1YsU0FBUyxDQUFDLFVBQVUsUUFBUSxNQUFNLE1BQU0sVUFBVSxVQUFVLElBQUk7QUFBQSxNQUNoRSxTQUFTO0FBQUEsUUFDTCxRQUFRO0FBQUE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNiO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxJQUNyQixDQUFDO0FBQUE7QUFBQTtBQUFBLEVBR0w7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE9BQU87QUFBQSxNQUNILFFBQVE7QUFBQSxRQUNKLFFBQVE7QUFBQTtBQUFBLFFBQ1IsY0FBYztBQUFBO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUE7QUFBQSxNQUNoRDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
