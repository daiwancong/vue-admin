
import {
  getSession
} from '@/utils/common/index'
import router, { resetRouter } from '@/router'
const state = {
  token: '',
  name: '',
  avatar: '',
  menus: [], // 侧边栏结构
  permissions: [] // 页面按钮权限
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
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
  }
}

const actions = {
  sethospitalId({ commit }, data) {
    commit('SET_HOSPITALID', data)
  },
  login({ commit }, userInfo) {
    const { username, password, phone } = userInfo
    return new Promise((resolve, reject) => {

    })
  },

  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {

    })
  },

  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {

    })
  },

  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { menuList } = await dispatch('getInfo')
    resetRouter()
    const accessRoutes = await dispatch('permission/generateRoutes', menuList, {
      root: true
    })
    router.addRoutes(accessRoutes)
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
