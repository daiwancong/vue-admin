import request from '@/utils/request'
// 数据字典 select下拉版本接口
export function getDictCategory(category) {
  return request({
    url: '/sys/dict/getList',
    method: 'get',
    params: category
  })
}
// 数据字典 tree版本接口
export function getDictTreeCategory(category) {
  return request({
    url: '/sys/dict/getTree',
    method: 'get',
    params: category
  })
}
// 数据字典 tree版本接口
export function getOrgTree() {
  return request({
    url: '/sys/org/orgTree',
    method: 'get'
  })
}
// 获取分院数据
export function getHospital() {
  return request({
    url: '/sys/org/orgTree',
    method: 'get'
  })
}
// 获取药品分类tree
export function getCategoryTree() {
  return request({
    url: '/asset/category/getTree',
    method: 'get'
  })
}
// 获取收费分类tree
export function getTollSortTree(data) {
  return request({
    url: '/staff/regimentation/getTreeList',
    method: 'get',
    params: data
  })
}
// 获取1医生或者护士2
export function getDocOrNurseData(type) {
  return request({
    url: '/sys/user/getListByType',
    method: 'get',
    params: type
  })
}

// 手机验证是否重复
export function getMobileRules(type) {
  return request({
    url: '/sys/user/check',
    method: 'get',
    async: false,
    params: type
  })
}

// 获取病例编号
export function getCaseCardData(type) {
  return request({
    url: '/clinical/case/getList',
    method: 'get',
    params: type
  })
}

// 获取预约号
export function getListByCusId(type) {
  return request({
    url: '/staff/reserve/getListByCusId',
    method: 'post',
    params: type
  })
}

// 获取账单状态
export function getDictStateData(type) {
  return request({
    url: 'sys/dict/getList',
    method: 'get',
    params: type
  })
}
// 根据医院获取默认上班时间
export function getOneByHospitalTime(type) {
  return request({
    url: 'sys/rosterset/getOneByHospital',
    method: 'post',
    params: type
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
