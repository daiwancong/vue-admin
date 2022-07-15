import request from '@/utils/request'
import store from '@/store/index'
// 获取列表数据
export function getList(data) {
  return request({
    url: '/staff/reserve/list',
    method: 'get',
    params: data
  })
}
// 保存
export function save(data) {
  return request({
    url: '/staff/reserve/save',
    method: 'post',
    data: data
  })
}
// 修改
export function upDate(data) {
  return request({
    url: '/staff/reserve/update',
    method: 'post',
    data: data
  })
}
// 删除
export function handleDelete(data) {
  return request({
    url: '/staff/reserve/delete',
    method: 'post',
    params: data
  })
}
// 查看获取数据
export function getReserveInfo(data) {
  return request({
    url: '/staff/reserve/info',
    method: 'get',
    params: data
  })
}
// 获取分院数据
export function getHospital() {
  return request({
    url: '/sys/org/orgTree',
    method: 'get'
  })
}
// 获取分院医生和护士数据 管理师
export function getHospitalDoc(data) {
  return request({
    url: '/sys/user/getList',
    method: 'get',
    params: {
      data,
      orgId: store.state.user.hospitalId
    }
  })
}
// 管理员获取预约人

export function getPeople() {
  return request({
    url: '/staff/customer/getList',
    method: 'get'
  })
}

// 首页预约数据获取
export function getOrderPeople(data) {
  return request({
    url: '/staff/reserve/getCount',
    method: 'get',
    params: data
  })
}
// 首页拖拽提交
export function setDragTimes(data) {
  return request({
    url: '/staff/reserve/drag',
    method: 'post',
    params: data
  })
}
