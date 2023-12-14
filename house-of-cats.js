function houseOfCats(legs) {
  let result = []
  let p = 0

  while (p * 2 <= legs) {
    if ((legs - p * 2) % 4 == 0) {
      result.push(p)
    }
    p++
  }
  return result.sort((a, b) => a - b)
}