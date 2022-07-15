import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
// 进度条
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'
NProgress.configure({ showSpinner: false })
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  document.title = getPageTitle(to.meta.title)
  const accessRoutes = await store.dispatch('permission/generateRoutes', {})
  router.addRoutes(accessRoutes)
  next()
})

router.afterEach(() => {
  NProgress.done()
})

