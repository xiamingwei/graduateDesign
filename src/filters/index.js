export function filterQuery(list, query) {
  return list.filter((item) => {
    return JSON.stringify(item).indexOf(query) > -1
  })
}

export function emptyTo(value) {
  if (value === '' || value === null || value === undefined) {
    return '-'
  } else {
    return value
  }
}

export function formatDate(value, fmt) {
  // let v = value.replace(/-/g, "/").substring(0, 19);
  if (!value) {
    return '-'
  }

  let date = new Date(value)
  if (date === 'Invalid Date') {
    date = new Date(parseFloat(value))
  }
  if (!fmt) {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  }
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

//求发帖日期距离现在的小时数
export function getHour(time, date) {
  //获取发帖日期信息
  let yearTime = time.substr(0, 4)
  let monthTime = time.substr(5, 2)
  let dayTime = time.substr(8, 2)
  let hourTime = time.substr(11, 2)
  let minuteTime = time.substr(14, 2)
  let secondTime = time.substr(17, 2)
  //获取现有日期信息
  let yearDate = date.substr(0, 4)
  let monthDate = date.substr(5, 2)
  let dayDate = date.substr(8, 2)
  let hourDate = date.substr(11, 2)
  let minuteDate = date.substr(14, 2)
  let secondDate = date.substr(17, 2)
  //获取小时差
  let disparityYear = (yearDate - yearTime) * 8760
  let disparityMonth = (monthDate - monthTime) * 720
  let disparityDay = (dayDate - dayTime) * 24
  let disparityHour = (hourDate - hourTime)
  let disparityMinute = (minuteDate - minuteTime) / 60
  let disparitySecond = (secondDate - secondTime) / 3600
  let hours = disparityYear + disparityMonth + disparityDay + disparityHour + disparityMinute + disparityMinute
  return hours

}
