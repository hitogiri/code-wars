var countSheep = function (num) {
  if (num == 0)
    return ''

  let str = ""

  for (let i = 0; i < num; i++) {
    str += `${i + 1} sheep...`
  }
  return str
}