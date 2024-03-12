function minValue(values) {
  let filtered = values
    .filter((num, idx) => values.indexOf(num) === idx)
    .sort()

  return Number(filtered
    .map(num => String(num))
    .reduce((acc, cur) => acc + cur)
  )
}