import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/clinical/stencil/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/clinical/stencil/save',
    method: 'post',
    params: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/clinical/stencil/update',
    method: 'post',
    params: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/clinical/stencil/delete',
    method: 'post',
    params: data
  })
}
