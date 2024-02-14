function roundToNext5(n) {
  let acc = n;

  while (acc % 5 != 0) {
    acc += 1
  }
  return acc
}