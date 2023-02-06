import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/sys',
    component: Layout,
    children: [
      {
        path: 'menu',
        component: () => import('@/views/sys/menu'),
        name: 'Menu',
        meta: { title: '菜单管理' }
      },
      {
        path: 'log',
        component: () => import('@/views/sys/log'),
        name: 'Log',
        meta: { title: '系统日志' }
      }
    ]
  },
  {
    path: '/basic',
    component: Layout,
    children: [
      {
        path: 'users',
        component: () => import('@/views/user/users'),
        name: 'Users',
        meta: { title: '用户信息' }
      },
      {
        path: 'role',
        component: () => import('@/views/user/role'),
        name: 'Role',
        meta: { title: '角色管理' }
      }
    ]
  },

  {
    path: '/profile', // 个人说明页面
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'Profile',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人说明', icon: 'user' }
      }
    ]
  }
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
