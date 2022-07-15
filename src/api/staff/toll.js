import request from '@/utils/request'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/staff/toll/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/staff/toll/save',
    method: 'post',
    data: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/staff/toll/update',
    method: 'post',
    data: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/staff/toll/delete',
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
// 获取收费类别
export function getRegList() {
  return request({
    url: '/staff/regimentation/getTreeList',
    method: 'get'
  })
}
// 获取药品
export function getDrugTree() {
  return request({
    url: '/asset/directory/getTree',
    method: 'get'
  })
}
