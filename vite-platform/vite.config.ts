import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';
import { name } from './package.json';
import path from 'path';
// https://vitejs.dev/config/

const resolve = (dir) => {
  return path.join(__dirname, './', dir);
};

// useDevMode 开启时与热更新插件冲突
const useDevMode = true;
const base = 'http://localhost:3000/';

// https://vitejs.dev/config/
export default (args) => {
  const { mode } = args;
  return defineConfig({
    base: mode === 'development' ? '/' : base,
    plugins: [vue(), qiankun(name, { useDevMode })],
    resolve: {
      alias: {
        src: resolve('src'),
        '@': resolve('src'),
      },
    },

    server: {
      cors: true,
      proxy: {
        //这里是通过请求/api 来转发到 https://api.pingping6.com/
        //假如你要请求https://api.*.com/a/a
        //那么axios的url，可以配置为 /api/a/a
        // '/v2': {
        //   target: 'http://localhost:8110',
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/v2/, '')
        // },
        // '/wechatV2': {
        //   target: 'http://localhost:8110',
        //   changeOrigin: true,
        //   rewrite: path => path.replace('wechatV2', 'wechat')
        // },
      },
    },

    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  });
};
