// 用户id效验规则
export const userIdRules = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('输入不能为空'))
  } else if (isNaN(Number(value))) {
    callback(new Error('请输入数字值'))
  } else {
    callback()
  }
}
// 效验用户名规则
export const usernameRules = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('用户名不能为空'))
  } else {
    callback()
  }
}
// 效验密码规则
export const passwordRules = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('密码不能为空'))
  } else if (value.length > 6) {
    return callback(new Error('请输入大于6位数的密码'))
  } else {
    callback()
  }
}
// 效验手机规则
export const mobileRules = (rule, value, callback) => {
  if (/^1[1234567890]\d{9}$/.test(value) === false) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}
// 效验身份证
export const isCardRules = (rule, value, callback) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (!value) {
    return callback(new Error('身份证不能为空'))
  } else if (!reg.test(value)) {
    return callback(new Error('请输入正确的身份证信息'))
  } else {
    callback()
  }
}
// 验证输入路径
export const setUrlFormat = (rule, value, callback) => {
  const reg = /^[a-z0-9]+\/[a-z0-9]+/
  if (value) {
    if (!reg.test(value)) {
      return callback(new Error('请输入例如sys/sys路径地址'))
    } else {
      callback()
    }
  } else {
    callback()
  }
}
// 验证数字
export const verifyNumber = (rule, value, callback) => {
  if (isNaN(Number(value))) {
    callback(new Error('请输入数字值'))
  } else {
    callback()
  }
}
