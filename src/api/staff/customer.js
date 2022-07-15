import request from '@/utils/request'
// 获取列表数据患者信息
export function getList(data) {
  return request({
    url: '/staff/customer/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/staff/customer/save',
    method: 'post',
    data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/staff/customer/update',
    method: 'post',
    data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/staff/customer/delete',
    method: 'post',
    params: data
  })
}
// 请求编辑后的linkList信息
export function getLinkList(id) {
  return request({
    url: '/staff/customerlink/getByMainId',
    method: 'get',
    params: id
  })
}
// 请求编辑后的linkList信息
export function getCustimerInfo(id) {
  return request({
    url: '/staff/customer/info',
    method: 'get',
    params: id
  })
}
