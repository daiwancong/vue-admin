import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/sys/org/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/sys/org/save',
    method: 'post',
    params: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/sys/org/update',
    method: 'post',
    params: data
  })
}
// 获取treeMenu
export function getTreeMenu() {
  return request({
    url: '/sys/org/treeMenu',
    method: 'get'
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/sys/org/delete',
    method: 'post',
    params: data
  })
}
// 指定分院接口
export function getOrgHospital(data) {
  return request({
    url: '/sys/org/orgTree',
    method: 'get',
    params: data
  })
}
