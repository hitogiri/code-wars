function maxProduct(numbers, size) {

  return [...numbers].sort((a, b) => b - a).slice(0, size).reduce((acc, cur) => acc * cur, 1)

}