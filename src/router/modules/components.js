/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '公共页面',
    icon: 'component'
  },
  children: [
    {
      path: 'profile',
      component: () => import('@/views/profile/index'),
      name: 'profile1',
      meta: { title: '页面1' }
    },
    {
      path: 'user',
      component: () => import('@/views/sys/user'),
      name: 'sys/user',
      meta: { title: '用户页面', icon: 'tab' }
    }
  ]
}

export default componentsRouter
