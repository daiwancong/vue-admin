import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserName = '用户名'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getUserName() {
  return Cookies.get(UserName)
}

export function setUserName(userName) {
  return Cookies.set(UserName, userName)
}

export function removeUserName() {
  return Cookies.remove(UserName)
}

export function getSession(data) {
  return JSON.parse(sessionStorage.getItem(data))
} // 获取session

export function setSession(key, data) {
  return sessionStorage.setItem(key, JSON.stringify(data))
} // 储存session

export function delSession(data) {
  return sessionStorage.removeItem(data)
} // 清除session
