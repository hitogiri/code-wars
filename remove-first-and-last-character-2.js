function array(string) {

  let sArr = string.split(',')

  return sArr.length <= 2 ? null : sArr.slice(1, -1).join(" ")
}