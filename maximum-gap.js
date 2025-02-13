function maxGap(numbers) {
  let sort = [...numbers].sort((a, b) => b - a)
  let max = 0
  let newMax = 0

  for (let i = 0; i < sort.length; i++) {
    max = sort[i] - sort[i + 1]
    if (max > newMax)
      newMax = max
  }

  return newMax
}