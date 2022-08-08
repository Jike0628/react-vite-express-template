import {defineConfig} from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh';
import app from './server/app';

const expressServerPlugin = (path, expressApp) => ({
    name: 'configure-server',
    configureServer(server) {
        server.middlewares.use(path, expressApp);
    }
});

export default defineConfig(({command, mode}) => {

    if (command === "build") {
        // 代表生产环境的配置
    } else {
        // 代表开发环境的配置
    }
    return {
        plugins: [expressServerPlugin('/', app), reactRefresh()],
        server: {
            host: "0.0.0.0",
            port: process.env.PORT || 3000,
            hmr: {
                port: 443
            }
        }
    }
})