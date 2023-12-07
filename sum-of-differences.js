function sumOfDifferences(array) {
  return array
    .sort((a, b) => b - a)
    .map((el, idx) => { return idx + 1 < array.length ? el - array[idx + 1] : null })
    .reduce((acc, cur) => acc + cur, 0)
}