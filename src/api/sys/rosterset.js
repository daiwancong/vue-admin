import request from '@/utils/request'
// 获取列表数据
export function rostersetGetList(data) {
  return request({
    url: '/sys/rosterset/list',
    method: 'get',
    params: data
  })
}
// 保存
export function rostersetSave(data) {
  return request({
    url: '/sys/rosterset/save',
    method: 'post',
    data: data
  })
}
// 修改
export function rostersetUpDate(data) {
  return request({
    url: '/sys/rosterset/update',
    method: 'post',
    data: data
  })
}
// 删除
export function handleRostersetDelete(data) {
  return request({
    url: '/sys/rosterset/delete',
    method: 'post',
    params: data
  })
}
// 设置默认值判断是否设置多个
export function setDefaultJudMul(data) {
  return request({
    url: '/sys/rosterset/getCheck',
    method: 'get',
    params: data
  })
}
