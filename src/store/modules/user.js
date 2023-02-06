
import {
  setSession,
  delSession,
  getSession
} from '@/utils/common/index'
import { adminRoute } from '@/api/admin'
import { userRoute } from '@/api/user'
import { addRoute } from '@/api/addRoute'
import { constantRoutes } from '@/router/index'
import Layout from '@/layout'
const _import = require('@/router/_import_' + process.env.NODE_ENV) // 获取组件的方法
const state = {
  token: getSession('token'),
  name: '',
  avatar: '',
  menus: getSession('menu'), // 侧边栏结构
  routeList: [] // 登陆的动态路由权限
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_MENU: (state, menus) => {
    state.menus = menus
  },
  SET_ROUTELIST: (state, routeList) => {
    state.routeList = routeList
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    // 该权限是登陆时候后端返回，此处我用静态数据模拟
    let menu = userRoute
    if (username === 'admin') {
      menu = adminRoute
    }
    return new Promise((resolve, reject) => {
      // 请求接口进行登陆
      // 将动态路由目录加入
      menu.push(...addRoute)
      menu = handleMenu(menu)
      commit('SET_TOKEN', '接口请求得到的token')
      commit('SET_MENU', menu)
      setSession('menu', menu)
      setSession('token', '接口请求得到的token')
      resolve()
    })
  },
  // 查看登录信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // 请求接口重新获取动态路由信息
      const projectList = filterAsyncRouter(addRoute)
      const routeList = constantRoutes
      routeList.push(...projectList)
      routeList.push({ path: '*', redirect: '/404', hidden: true })
      commit('SET_ROUTELIST', routeList)
      resolve()
    })
  },
  // 退出
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      // 请求退出接口成功才执行
      commit('SET_TOKEN', '')
      commit('SET_MENU', [])
      commit('SET_ROUTELIST', [])
      delSession('token')
      delSession('menu')
      delSession('routelist')
      resolve()
    })
  },
  // 重置登录信息
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      commit('SET_MENU', [])
      commit('SET_ROUTELIST', [])
      delSession('token')
      delSession('menu')
      delSession('routelist')
      resolve()
    })
  }

}

function handleMenu(menu) {
  const menuList = menu.map(item => {
    return {
      id: item.name,
      path: item.path,
      meta: { title: item.name, icon: item.icon },
      children: item.children && item.children.length > 0 ? handleMenu(item.children) : []
    }
  })
  return menuList
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  const accessedRouters = asyncRouterMap.map((item) => {
    if (item.component === 'Layout') {
      return {
        name: item.name,
        path: item.path,
        component: Layout,
        meta: { title: item.name, icon: item.icon, id: item.id },
        children: item.children && item.children.length > 0 ? filterAsyncRouter(item.children) : []
      }
    }
    return {
      name: item.name,
      path: item.path,
      component: _import(item.component),
      meta: { title: item.name, icon: item.icon, id: item.id }
    }
  })
  return accessedRouters
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

