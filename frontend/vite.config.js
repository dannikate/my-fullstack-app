import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/', // backend API server
                changeOrigin: true,
            }
        }
    },
    plugins: [],
});