import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/es/helper';
let instance: any;

function render(props: { [key in string]: any } = {}) {
  console.log(props);
  const { container } = props;
  instance = createApp(App)
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app');
  console.log(instance);
}

renderWithQiankun({
  mount(props) {
    console.log('vue vite-app mount');
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('viteapp unmount');
    console.log(instance);
    // instance?.unmount();
    // instance = null;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
