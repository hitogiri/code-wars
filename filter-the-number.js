var filterString = function (value) {

  let valueStr = value.split('')

  return +valueStr.filter((el) => {
    if (Number(el)) {
      return Number(el)
    } else if (el === '0') {
      return '0'
    }
  }).join('')

  //   return Number(valueStr.filter(el => el == '0' ? '0' : Number(el) ? Number(el) : null).join(''))
}