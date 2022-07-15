import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/sys/user/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/sys/user/save',
    method: 'post',
    params: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/sys/user/update',
    method: 'post',
    params: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/sys/user/delete',
    method: 'post',
    params: data
  })
}
// 获取treeMenu
export function getTreeMenu() {
  return request({
    url: '/sys/menu/treeMenu',
    method: 'get'
  })
}
// 获取角色数据
export function getUserCheckTree(userId) {
  return request({
    url: '/sys/user/info',
    method: 'get',
    params: userId
  })
}
// 获取日历日期上班医生
export function getByRosterDoc(data) {
  return request({
    // url: '/sys/user/getListByRoster',
    url: '/sys/user/getListByType',
    method: 'get',
    params: data
  })
}
