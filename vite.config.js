import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
    },
    root: 'src', // specify the directory containing your HTML
    server: {
        open: true, // open the browser on server start
    },
});
