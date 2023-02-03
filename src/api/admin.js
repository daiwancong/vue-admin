
// 管理员权限的树结构
export const adminRoute = [
  { component: 'dashboard', path: '/dashboard', name: '首页', icon: 'el-icon-s-home' },
  {
    component: 'sys',
    icon: '',
    name: '系统管理',
    path: '/sys',
    children: [
      {
        component: 'menu',
        icon: 'menu',
        name: '菜单管理',
        path: '/menu'
      },
      {
        component: 'log',
        icon: 'log',
        name: '系统日志',
        path: '/log'
      }
    ]
  },
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
      },
      {
        component: 'role',
        icon: 'role',
        name: '角色管理',
        path: '/role'
      }
    ]
  }
]
