import { login, logout, getUserInfo } from '@/api/login'
import {
  getToken,
  setToken,
  removeToken,
  setUserName,
  getUserName,
  removeUserName,
  setSession,
  delSession,
  getSession
} from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { Message } from 'element-ui'
// 改变按钮权限的展示方式
function btnPermissChange(key) {
  var res = []
  if (key) {
    const arr = key.split(',')
    arr.forEach((item) => {
      if (item.includes('info')) {
        res.push('detail')
      } else if (item.includes('update')) {
        res.push('edit')
      } else if (item.includes('save')) {
        res.push('add')
      } else if (item.includes('delete')) {
        res.push('delete')
      } else if (item.includes('sAdd')) {
        res.push('sAdd')
      } else if (item.includes('addCount')) {
        res.push('addCount')
      } else if (item.includes('detailCount')) {
        res.push('detailCount')
      }
    })
  }
  return res
}
// 字符串首字母大写
function titleCase(str) {
  const newStr = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
  return newStr
}
function handleRoute(route, arr) {
  // 将后端返回的路由权限列表转换为动态路由
  route.forEach((item, index) => {
    const menu = {
      path:
        item.component === 'Layout'
          ? item.path
            ? `/${item.path}`
            : `/${index}`
          : item.path,
      component: item.component,
      children: [],
      name:
        item.component === 'Layout'
          ? item.path
            ? `/${item.path}`
            : `/${index}`
          : titleCase(item.path),
      meta: {
        title: item.name,
        icon: item.icon ? item.icon : item.name,
        perms: btnPermissChange(item.perms)
      }
    }
    if (item.children && item.children.length > 0) {
      handleRoute(item.children, menu.children)
    } else {
      delete menu.children
    }
    arr.push(menu)
  })
}
const state = {
  token: getToken(),
  name: getUserName(),
  avatar: getSession('avatar') ? getSession('avatar') : null,
  introduction: '',
  menus: [], // 侧边栏结构
  permissions: [], // 页面按钮权限
  hospital: getSession('hospital') ? getSession('hospital') : '', // 登陆人医院
  hospitalId: getSession('hospitalId') ? getSession('hospitalId') : ''
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
  SET_HOSPITAL: (state, hospital) => {
    state.hospital = hospital
  },
  SET_HOSPITALID: (state, data) => {
    state.hospitalId = data
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
      login({
        username: username.trim(),
        password: password,
        phone: phone
      })
        .then((response) => {
          commit('SET_TOKEN', response.token)
          commit('SET_NAME', response.userName)
          commit('SET_HOSPITAL', response.hospital)
          setUserName(response.userName)
          setToken(response.token)
          setSession('hospital', response.hospital)
          setSession('hospitalId', response.hospitalId)
          commit('SET_HOSPITALID', response.hospitalId)
          commit('SET_AVATAR', response.photo)
          setSession('avatar', response.photo)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token)
        .then((res) => {
          // menuList菜单权限permissions按钮权限
          if (res.code === 0) {
            const { menuList } = res
            if (!menuList || menuList.length <= 0) {
              Message.error('个人权限为空,请联系管理员设置')
              resolve(menuList)
            }
            var menus = []
            handleRoute(menuList, menus)
            menus.push({ path: '*', redirect: '/404', hidden: true })
            commit('SET_MENU', menus)
            resolve(menuList)
          } else {
            reject('获取个人信息失败,请退出重新登录')
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout()
        .then((res) => {
          commit('SET_TOKEN', '')
          commit('SET_MENU', [])
          commit('SET_NAME', [])
          commit('SET_HOSPITAL', '')
          delSession('hospital')
          commit('SET_HOSPITALID', '')
          delSession('hospitalId')
          commit('SET_AVATAR', '')
          delSession('avatar')
          removeToken()
          removeUserName()
          resetRouter()
          dispatch('tagsView/delAllViews', null, { root: true })
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
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
