import request from '@/utils/request'
// 收费统计list
export function getChargemainList(data) {
  return request({
    url: '/staff/chargemain/list',
    method: 'get',
    params: data
  })
}
// 收费保存
export function chargemainSave(data) {
  return request({
    url: '/staff/chargemain/save',
    method: 'post',
    data: data
  })
}
// 收费修改
export function chargemainUpDate(data) {
  return request({
    url: '/staff/chargemain/update',
    method: 'post',
    data: data
  })
}
// 收费数据查看
export function chargemainInfo(data) {
  return request({
    url: '/staff/chargemain/info',
    method: 'get',
    params: data
  })
}

// 删除
export function deleteChargemain(data) {
  return request({
    url: '/staff/chargemain/delete',
    method: 'post',
    params: data
  })
}
// 获取消费概览信息
export function getCountInfo(data) {
  return request({
    url: '/staff/chargemain/countInfo',
    method: 'get',
    params: data
  })
}
// 获取当前查询条件下，列表页面收费总和
export function getQryTotal(data) {
  return request({
    url: '/staff/chargemain/qryTotal',
    method: 'get',
    params: data
  })
}
