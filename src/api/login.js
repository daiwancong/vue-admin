import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
export function getUserInfo() {
  return request({
    url: '/sys/menu/nav',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/sys/logout',
    method: 'post'
  })
}
