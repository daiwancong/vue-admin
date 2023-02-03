
// 普通用户权限
export const userRoute = [
  { component: 'dashboard', path: '/dashboard', name: '首页', icon: 'el-icon-s-home' },
  {
    component: 'basic',
    icon: '',
    name: '基础设置',
    path: '/basic',
    children: [
      {
        component: 'user',
        icon: 'admin',
        name: '用户信息',
        path: '/user'
      }
    ]
  }
]
