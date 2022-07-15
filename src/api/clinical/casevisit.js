import request from '@/utils/request'
// 随访保存
export function followUpSave(data) {
  return request({
    url: '/clinical/casevisit/save',
    method: 'post',
    data: data
  })
}
// 随访接口数据
export function followUpInfo(data) {
  return request({
    url: '/clinical/casevisit/info',
    method: 'get',
    params: data
  })
}
// 随访保存接口数据
export function followUpdata(data) {
  return request({
    url: '/clinical/casevisit/update',
    method: 'post',
    data: data
  })
}
// 随访病例列表
export function followUpList(data) {
  return request({
    url: '/clinical/casevisit/getList',
    method: 'get',
    params: data
  })
}
