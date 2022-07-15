export function toTreeData(data) {
  var pos = {}
  var tree = []
  var i = 0
  while (data.length !== 0) {
    if (data[i].pid === 0) {
      tree.push({
        id: data[i].id,
        name: data[i].name,
        title: data[i].name,
        spread: true,
        value: data[i].id,
        pid: data[i].pid,
        children: []
      })
      pos[data[i].id] = [tree.length - 1]
      data.splice(i, 1)
      i--
    } else {
      var posArr = pos[data[i].pid]
      if (posArr !== undefined) {
        var obj = tree[posArr[0]]
        for (var j = 1; j < posArr.length; j++) {
          obj = obj.children[posArr[j]]
        }

        obj.children.push({
          id: data[i].id,
          name: data[i].name,
          title: data[i].name,
          spread: true,
          value: data[i].id,
          pid: data[i].pid,
          children: []
        })
        pos[data[i].id] = posArr.concat([obj.children.length - 1])
        data.splice(i, 1)
        i--
      }
    }
    i++
    if (i > data.length - 1) {
      i = 0
    }
  }
  return tree
}
export const flotPice = {
  // 乘法
  NumberMul: function(arg1, arg2) {
    var m = 0
    var s1 = arg1.toString()
    var s2 = arg2.toString()
    try {
      m += s1.split('.')[1].length
    } catch (e) { }
    try {
      m += s2.split('.')[1].length
    } catch (e) { }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
  },
  // 加法
  NumberAdd: function(arg1, arg2) {
    var r1, r2, m, n
    try {
      r1 = arg1.toString().split('.')[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split('.')[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    n = (r1 >= r2) ? r1 : r2
    return ((arg1 * m + arg2 * m) / m).toFixed(n)
  },
  // 减法
  NumberSub: function(arg1, arg2) {
    var re1, re2, m, n
    try {
      re1 = arg1.toString().split('.')[1].length
    } catch (e) {
      re1 = 0
    }
    try {
      re2 = arg2.toString().split('.')[1].length
    } catch (e) {
      re2 = 0
    }
    m = Math.pow(10, Math.max(re1, re2))
    n = (re1 >= re2) ? re1 : re2
    return ((arg1 * m - arg2 * m) / m).toFixed(n)
  },
  // 除法 除数，被除数， 保留的小数点后的位数
  NumberDiv: function(arg1, arg2, digit) {
    var t1 = 0; var t2 = 0; var r1; var r2
    try { t1 = arg1.toString().split('.')[1].length } catch (e) { }
    try { t2 = arg2.toString().split('.')[1].length } catch (e) { }
    r1 = Number(arg1.toString().replace('.', ''))
    r2 = Number(arg2.toString().replace('.', ''))
    // 获取小数点后的计算值
    var result = ((r1 / r2) * Math.pow(10, t2 - t1)).toString()
    var result2 = result.split('.')[1]
    result2 = result2.substring(0, digit > result2.length ? result2.length : digit)
    return Number(result.split('.')[0] + '.' + result2)
  }
}
export function FrmatterState(row) {
  if (row.state === '0') {
    return '预约中'
  } else if (row.state === '1') {
    return '预约成功'
  } else if (row.state === '2') {
    return '预约失败'
  } else if (row.state === '3') {
    return '取消预约'
  } else if (row.state === '4') {
    return '订单完成'
  } else if (row.state === '5') {
    return '订单失效'
  } else {
    return ''
  }
}
/* 获取年份*/
export function getYear(date) {
  return transformDate(date).getFullYear()
}

/* 获取月*/
export function getMonth(date, status) {
  var month = transformDate(date).getMonth() + 1
  if (status) {
    return month
  }
  return month > 9 ? month : '0' + month
}

/* 获取日*/
export function getDay(date, status) {
  var day = transformDate(date).getDate()
  if (status) {
    return day
  }
  return day > 9 ? day : '0' + day
}
/* 获取今天星期几,如果为0代表星期日*/
export function getWeek(date) {
  return transformDate(date).getDay()
}
// 日期转换
function transformDate(date) {
  if (typeof date === 'string') {
    return new Date(date.replace(/-/ig, '/').replace('T', ' '))
  } else {
    return date
  }
}
export function getWeekChinese(date) {
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return weekdays[getWeek(date)]
}
// 计算本月多少天
export function getMonthDayDate(year, month) {
  const d = new Date(year, month, 0)
  return d.getDate()
}
// 计算指定时间 一周的时间返回当周时间及星期
export function getMonDate(value) {
  const d = value
  const day = d.getDay()
  const date = d.getDate()
  // if (day === 1) {
  //   return getWeekArr(d)
  // }
  // if (day === 0) {
  //   d.setDate(date - 7)
  // } else {
  //   d.setDate(date - day)
  // }
  d.setDate(date - day)
  return getWeekArr(d)
}
function getWeekArr(d) {
  const arr = []
  for (var i = 0; i < 7; i++) {
    const data = `${d.getFullYear()}-${(d.getMonth() + 1)}-${d.getDate()}`
    const getWeek = getDayName(i)
    arr.push({ time: data, value: getWeek })
    d.setDate(d.getDate() + 1)
  }
  return arr
}
// 0-6转换成中文名称
function getDayName(days) {
  const day = parseInt(days)
  if (isNaN(day) || day < 0 || day > 6) { return false }
  const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return weekday[day]
}
// 转换钱成中文大写
export function cahngeMoneyWrite(money) {
  // 汉字的数字
  const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  // 基本单位
  const cnIntRadice = ['', '拾', '佰', '仟']
  // 对应整数部分扩展单位
  const cnIntUnits = ['', '万', '亿', '兆']
  // 对应小数部分单位
  const cnDecUnits = ['角', '分', '毫', '厘']
  // 整数金额时后面跟的字符
  const cnInteger = '整'
  // 整型完以后的单位
  const cnIntLast = '元'
  // 最大处理的数字
  const maxNum = 9999999999999999.99
  // 金额整数部分
  let integerNum
  // 金额小数部分
  let decimalNum
  // 输出的中文金额字符串
  let chineseStr = ''
  // 分离金额后用的数组，预定义
  let parts
  if (money === '') { return '' }
  money = parseFloat(money)
  if (money >= maxNum) {
    // 超出最大处理数字
    return ''
  }
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger
    return chineseStr
  }
  // 转换为字符串
  money = money.toString()
  if (money.indexOf('.') === -1) {
    integerNum = money
    decimalNum = ''
  } else {
    parts = money.split('.')
    integerNum = parts[0]
    decimalNum = parts[1].substr(0, 4)
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0
    var IntLen = integerNum.length
    for (var i = 0; i < IntLen; i++) {
      const n = integerNum.substr(i, 1)
      const p = IntLen - i - 1
      const q = p / 4
      const m = p % 4
      if (n === '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        // 归零
        zeroCount = 0
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q]
      }
    }
    chineseStr += cnIntLast
  }
  // 小数部分
  if (decimalNum !== '') {
    var decLen = decimalNum.length
    for (let i = 0; i < decLen; i++) {
      const n = decimalNum.substr(i, 1)
      if (n !== '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i]
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger
  } else if (decimalNum === '') {
    chineseStr += cnInteger
  }
  return chineseStr
}
