/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */

/*
 * Import the plugin modules
 */
import reactRefresh from '@vitejs/plugin-react-refresh';
import app from './server/app';

/*
 * The Express app plugin. Specify the URL base path
 * for the app and the Express app object.
 */
const expressServerPlugin = (path, expressApp) => ({
    name: 'configure-server',
    configureServer(server) {
        server.middlewares.use(path, expressApp);
    }
});

/*
 * Vite configuration
 */
export default {
    plugins: [expressServerPlugin('/', app), reactRefresh()],
    server: {
        hmr: {
            port: 443
        }
    }
};