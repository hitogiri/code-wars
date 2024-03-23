function SeriesSum(n) {
  let denom = 1
  let sum = 0

  if (n === 0) { return '0.00' }

  for (let i = 0; i < n - 1; i++) {
    sum += (1 / (denom += 3))
  }

  return (1 + sum).toFixed(2)

}