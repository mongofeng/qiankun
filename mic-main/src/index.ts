import { registerMicroApps, start } from 'qiankun';




registerMicroApps([
  {
    name: 'vite-platform', // app name registered
    entry: '//localhost:3000',
    container: '#vue-app',
    activeRule: location => location.hash.startsWith('#/vite'),
  },
  {
    name: 'vue-platform', // app name registered
    entry: '//localhost:9999',
    container: '#vue-app',
    activeRule: location => location.hash.startsWith('#/vue-platform'),
  },
]);

// setDefaultMountApp('/vite');
start();

