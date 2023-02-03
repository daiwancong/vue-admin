import router from './router'
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
  // const hasToken = getSession('token')
  const hasToken = '123'
  if (hasToken) {
    if (to.path === '/login') {
      next()
      NProgress.done()
    } else {
      // 动态路由部分
      next()
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

