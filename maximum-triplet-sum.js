function maxTriSum(numbers) {
  let uniq = [...new Set(numbers)];

  uniq.sort((a, b) => a - b)

  return uniq.slice(-3).reduce((acc, cur) => acc + cur, 0)
}