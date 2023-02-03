
import {
  setSession,
  delSession,
  getSession
} from '@/utils/common/index'
import { adminRoute } from '@/api/admin'
import { userRoute } from '@/api/user'
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

    })
  },
  // 退出
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      // 请求退出接口成功才执行
      commit('SET_TOKEN', '')
      commit('SET_MENU', [])
      delSession('token')
      delSession('menu')
      resolve()
    })
  },
  // 重置登录信息
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
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
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
