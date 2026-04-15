import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // specify the directory containing your HTML
  server: {
    open: true, // open the browser on server start
  },
});