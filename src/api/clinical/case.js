import request from '@/utils/request'
// 获取table数据
export function getList(data) {
  return request({
    url: '/clinical/timeline/list',
    method: 'get',
    params: data
  })
}
// 请求时间轴的数据
export function getItemLineList(data) {
  return request({
    url: '/clinical/timeline/getListByCid',
    method: 'get',
    params: data
  })
}
// 请求时间轴的数据
export function handleTimelineDelete(data) {
  return request({
    url: '/clinical/timeline/delete',
    method: 'post',
    params: data
  })
}
// 病例保存
export function caseSave(data) {
  return request({
    url: '/clinical/case/save',
    method: 'post',
    data: data
  })
}
// 病例查看接口数据
export function getInfoCase(data) {
  return request({
    url: '/clinical/case/info',
    method: 'get',
    params: data
  })
}
// 病例编辑接口数据
export function caseEdit(data) {
  return request({
    url: '/clinical/case/update',
    method: 'post',
    data: data
  })
}
// 病例模板接口
export function assortGetTree() {
  return request({
    url: '/clinical/assort/getTree',
    method: 'post'
  })
}
// 获取患者病例列表数据
export function getCaseList(data) {
  return request({
    url: '/clinical/case/getCaseList',
    method: 'get',
    params: data
  })
}
