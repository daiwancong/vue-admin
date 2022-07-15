import request from '@/utils/request'
// 获取列表数据获取加工商
export function getList(data) {
  return request({
    url: '/sys/plant/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/sys/plant/save',
    method: 'post',
    params: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/sys/plant/update',
    method: 'post',
    params: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/sys/plant/delete',
    method: 'post',
    params: data
  })
}

