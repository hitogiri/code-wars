function getSum(a, b) {

  let arr = [a, b].sort((x, y) => x - y)

  let p1 = arr[0]
  let p2 = arr[1]

  if (p1 === p2) {
    return p1
  }

  while (p1 < p2) {
    if (p2 !== p1 + 1) {
      arr.push(p1 + 1)
      p1 += 1
    } else break
  }

  return arr.reduce((a, b) => a + b, 0)
}