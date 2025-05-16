import { RoutePath } from '@/constants'
import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const DashboardPage = () => import('@/pages/DashboardPage.vue')
const UsersPage = () => import('@/pages/UsersPage.vue')
const ProductsPage = () => import('@/pages/ProductsPage.vue')
const SettingsPage = () => import('@/pages/SettingsPage.vue')

const routes = [
  { path: RoutePath.default, component: HomePage },
  { path: RoutePath.dashboard, component: DashboardPage },
  { path: RoutePath.users, component: UsersPage },
  { path: RoutePath.products, component: ProductsPage },
  { path: RoutePath.settings, component: SettingsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
