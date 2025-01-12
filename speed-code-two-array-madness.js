function arrayMadness(a, b) {
  let square = a.map((num) => num ** 2).reduce((acc, cur) => acc + cur)
  let cube = b.map((num) => num ** 3).reduce((acc, cur) => acc + cur)

  return square > cube
}