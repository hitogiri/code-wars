function solve(s) {

  let alpha = "abcdefghijklmnopqrstuvwxyz"

  let capCount = 0
  let lowCount = 0

  s.split('').forEach((letter) => {
    if (alpha.includes(letter)) {
      lowCount += 1
    } else {
      capCount += 1
    }
  })

  return lowCount >= capCount ? s.toLowerCase() : s.toUpperCase()
}