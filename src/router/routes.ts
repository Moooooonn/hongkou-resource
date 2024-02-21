import type { RouteRecordRaw } from 'vue-router'

export const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/Home.vue'), meta: { title: '首页', keepAlive: false, showTab: true } },
  { path: '/check', name: 'Check', component: () => import('../pages/Check.vue'), meta: { title: '查看', keepAlive: false, showTab: true } },
  { path: '/activity', name: 'Activity', component: () => import('../pages/Activity.vue'), meta: { title: '活动', keepAlive: false, showTab: true } },
  { path: '/my', name: 'My', component: () => import('../pages/My.vue'), meta: { title: '我的', keepAlive: false, showTab: true } },

] as RouteRecordRaw[]
