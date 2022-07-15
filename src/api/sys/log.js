import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/sys/log/list',
    method: 'get',
    params: data
  })
}
