import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/clinical/assort/list',
    method: 'get',
    params: data
  })
}
// 分类保存
export function save(data) {
  return request({
    url: '/clinical/assort/save',
    method: 'post',
    params: data
  })
}
// 模板保存
export function stencilSave(data) {
  return request({
    url: '/clinical/stencil/save',
    method: 'post',
    params: data
  })
}
// 查看接口数据
export function getInfoStencil(data) {
  return request({
    url: '/clinical/assort/info',
    method: 'get',
    params: data
  })
}
// 分类修改
export function upDate(data) {
  return request({
    url: '/clinical/assort/update',
    method: 'post',
    params: data
  })
}
// 模板修改
export function stencilUpDate(data) {
  return request({
    url: '/clinical/stencil/update',
    method: 'post',
    params: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/clinical/assort/delete',
    method: 'post',
    params: data
  })
}
