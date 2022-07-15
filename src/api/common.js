import request from '@/utils/request'
// 数据字典 select下拉版本接口
export function getDictCategory(category) {
  return request({
    url: '/sys/dict/getList',
    method: 'get',
    params: category
  })
}

// 介绍人 ?hospitalId= 医生护士-患者
export function getAllUser(type) {
  return request({
    url: '/staff/customer/getAllUser',
    method: 'post',
    params: type
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