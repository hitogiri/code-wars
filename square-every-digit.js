function squareDigits(num) {

  let s = String(num)
    .split('')
    .slice()
    .map((n) => { return (+n) ** 2 })

  return +s.join('')
}