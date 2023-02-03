import request from '@/utils/request'
// 数据字典 select下拉版本接口
export function getDictCategory(category) {
  return request({
    url: '/sys/dict/getList',
    method: 'get',
    params: category
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
