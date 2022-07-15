import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/asset/machmain/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/asset/machmain/save',
    method: 'post',
    data: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/asset/machmain/update',
    method: 'post',
    data: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/asset/machmain/delete',
    method: 'post',
    params: data
  })
}
// 获取加工商
export function getMachcateTree() {
  return request({
    url: '/asset/machcate/getTreeList',
    method: 'get'
  })
}
// 查询数据
export function getInfoData(data) {
  return request({
    url: 'asset/machmain/info',
    method: 'get',
    params: data
  })
}
