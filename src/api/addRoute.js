
// 动态添加路由 由一个固定页面 动态添加 也可以由多个页面动态添加
export const addRoute = [
  {
    component: 'Layout',
    name: '项目',
    path: '/project',
    meta: { name: '项目', icon: 'el-icon-set-up' },
    children: [
      {
        component: 'project/project',
        name: '项目1',
        meta: { name: '项目1', id: 1 },
        path: '/project1'
      },
      {
        component: 'project/project',
        name: '项目2',
        meta: { name: '项目2', id: 2 },
        path: '/project2'
      },
      {
        component: 'project/project',
        name: '项目3',
        meta: { name: '项目3', id: 3 },
        path: '/project3'
      },
      {
        component: 'project/item',
        name: '另外页面项目4',
        meta: { name: '另外页面项目4', id: 4 },
        path: '/item'
      }
    ]
  }
]
