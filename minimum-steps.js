function minimumSteps(numbers, value) {
  numbers.sort((a, b) => a - b)
  let sum = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    if (sum >= value) {
      return i
    } else {
      sum += numbers[i + 1]
    }
  }
}