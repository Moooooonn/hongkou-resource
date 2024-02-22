import type { RouteRecordRaw } from 'vue-router'

export const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/Home.vue'), meta: { title: '首页', keepAlive: false, showTab: true } },
  { path: '/check', name: 'Check', component: () => import('../pages/Check.vue'), meta: { title: '查看', keepAlive: false, showTab: true } },
  { path: '/activity', name: 'Activity', component: () => import('../pages/Activity.vue'), meta: { title: '活动', keepAlive: false, showTab: true } },
  { path: '/my', name: 'My', component: () => import('../pages/My.vue'), meta: { title: '我的', keepAlive: false, showTab: true } },
  { path: '/notification', name: 'Notification', component: () => import('../pages/Notification.vue'), meta: { title: '首页', keepAlive: false, showTab: false } },
  { path: '/notification-detail', name: 'NotificationDetail', component: () => import('../pages/NotificationDetail.vue'), meta: { title: '首页', keepAlive: false, showTab: false } },
  { path: '/echelon', name: 'Echelon', component: () => import('../pages/Echelon.vue'), meta: { title: '首页', keepAlive: false, showTab: false } },
  { path: '/banner', name: 'Banner', component: () => import('../pages/Banner.vue'), meta: { title: '首页', keepAlive: false, showTab: false } },
  { path: '/login', name: 'Login', component: () => import('../pages/Login.vue'), meta: { title: '登录', keepAlive: false, showTab: false } },
  { path: '/activity-detail', name: 'ActivityDetail', component: () => import('../pages/ActivityDetail.vue'), meta: { title: '活动', keepAlive: false, showTab: false },
  },
] as RouteRecordRaw[]
