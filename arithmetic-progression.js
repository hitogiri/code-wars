function arithmeticSequenceElements(start, dif, n) {
  let str = `${start}`

  for (let j = 1; j < n; j++) {
    str += ', ' + `${start += dif}`
  }

  return str

}