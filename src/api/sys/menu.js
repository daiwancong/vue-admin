import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/sys/menu/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/sys/menu/save',
    method: 'post',
    params: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/sys/menu/update',
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
// 删除
export function handleDelete(data) {
  return request({
    url: '/sys/menu/delete',
    method: 'post',
    params: data
  })
}
