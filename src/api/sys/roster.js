import request from '@/utils/request'
// 获取列表数据
export function rosterGetList(data) {
  return request({
    url: '/sys/roster/list',
    method: 'get',
    params: data
  })
}
// 保存
export function rosterSave(data) {
  return request({
    url: '/sys/roster/save',
    method: 'post',
    data: data
  })
}
// 修改
export function rosterUpDate(data) {
  return request({
    url: '/sys/roster/update',
    method: 'post',
    data: data
  })
}
// 删除
export function handleRosterDelete(data) {
  return request({
    url: '/sys/roster/delete',
    method: 'post',
    params: data
  })
}
