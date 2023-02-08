import {defineConfig} from 'vite'
import type {UserConfigExport, ConfigEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {loadEnv} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'
import {viteMockServe} from 'vite-plugin-mock'
import {resolve} from 'path';
import svgr from 'vite-plugin-svgr'
import styleImport from 'vite-plugin-style-import';


function pathResolve(dir: string) {
    return resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr(),],
    resolve: {
        // alias: aliases,
        alias: [
            {
                // /@/xxxx  =>  src/xxx
                find: /^~/,
                replacement: pathResolve('node_modules') + '/',
            },
            {
                // /@/xxxx  =>  src/xxx
                find: /@\//,
                replacement: pathResolve('src') + '/',
            },
        ],
    },
    optimizeDeps: {
        include: [
            '@ant-design/colors',
            '@ant-design/icons',
        ],
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#1890ff',
                },
            },
        },
    },
})
