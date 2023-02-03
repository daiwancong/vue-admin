export function getSession(data) {
  return JSON.parse(sessionStorage.getItem(data))
} // 获取session

export function setSession(key, data) {
  return sessionStorage.setItem(key, JSON.stringify(data))
} // 储存session

export function delSession(data) {
  return sessionStorage.removeItem(data)
} // 清除session
