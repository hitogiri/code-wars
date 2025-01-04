function dontGiveMeFive(start, end) {
  let sequence = []

  for (let i = start; i <= end; i++) {
    sequence.push(i)
  }

  return sequence.filter((num) => !String(num).includes('5')).length
}