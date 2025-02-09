function alternate(n, firstValue, secondValue) {
  let arr = []

  for (let i = 1; i <= n; i++) {
    i % 2 !== 0 ? arr.push(firstValue) : arr.push(secondValue)
  }

  return arr
}