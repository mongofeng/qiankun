import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';
import Home from '../views/Home.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];
console.log(import.meta.env.VITE_BASE);
const router = createRouter({
  history: createWebHashHistory(('/#' + import.meta.env.VITE_BASE) as string), // 必须和qiankun激活的规则一致
  routes,
});

export default router;
