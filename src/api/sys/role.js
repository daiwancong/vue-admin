import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/sys/role/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/sys/role/save',
    method: 'post',
    params: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/sys/role/update',
    method: 'post',
    params: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/sys/role/delete',
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
// 获取获取选中的tree数据
export function getCheckTree(id) {
  return request({
    url: '/sys/role/info',
    method: 'get',
    params: id
  })
}
// 获取角色数据
export function getRoleSelect() {
  return request({
    url: '/sys/role/select',
    method: 'get'
  })
}
