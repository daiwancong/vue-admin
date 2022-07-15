import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/staff/outbound/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/staff/outbound/save',
    method: 'post',
    data: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/staff/outbound/update',
    method: 'post',
    data: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/staff/outbound/delete',
    method: 'post',
    params: data
  })
}
