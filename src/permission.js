import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import { getSession } from '@/utils/common/index'
// 进度条
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'
NProgress.configure({ showSpinner: false })
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const whiteList = ['/login'] // 白名单
  document.title = getPageTitle(to.meta.title)
  const hasToken = getSession('token')
  if (hasToken) {
    if (to.path === '/login') {
      next()
      NProgress.done()
    } else {
      // 动态路由部分
      const hasProject = store.getters.routeList && store.getters.routeList.length > 0
      if (hasProject) {
        next()
      } else {
        try {
          // 动态路由防止白屏或者404
          await store.dispatch('user/getInfo')
          if (store.getters.routeList.length === 0) {
            global.antRouter = []
            next()
          }
          router.addRoutes(store.getters.routeList) // 2.动态添加路由
          global.antRouter = store.getters.routeList
          next({ ...to, replace: true })
        } catch (error) {
          console.log(error)
          await store.dispatch('user/resetToken')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

