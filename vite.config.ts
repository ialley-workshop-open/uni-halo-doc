import { defineConfig } from 'vite';

export default defineConfig({
	base: '/v1',
  server: {
    host: '0.0.0.0',
    open: true
  }
});
