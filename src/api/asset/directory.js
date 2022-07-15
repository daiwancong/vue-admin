import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/asset/directory/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/asset/directory/save',
    method: 'post',
    params: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/asset/directory/update',
    method: 'post',
    params: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/asset/directory/delete',
    method: 'post',
    params: data
  })
}
