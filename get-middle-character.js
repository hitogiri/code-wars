function getMiddle(s) {

  let middle = (s.length / 2)

  return Number.isInteger(middle)
    ? s[middle - 1].concat(s[middle])
    : s[Math.floor(middle)]

}