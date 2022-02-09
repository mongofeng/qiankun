import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./public-path";

let instance: any;

function render(props: { [key in string]: any } = {}) {
  console.log(props);
  const { container } = props;
  instance = createApp(App)
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: any) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  // instance.unmount();
  // instance.$el.innerHTML = '';
  // instance = null;
}
