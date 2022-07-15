import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/staff/grade/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/staff/grade/save',
    method: 'post',
    data: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/staff/grade/update',
    method: 'post',
    data: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/staff/grade/delete',
    method: 'post',
    params: data
  })
}

// 编辑查看获取药品信息
export function getDrugData(id) {
  return request({
    url: '/staff/toll/info',
    method: 'get',
    params: id
  })
}
