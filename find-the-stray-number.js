function stray(numbers) {

  let odd = {}
  numbers.forEach(n => odd[n] = (odd[n] || 0) + 1)

  for (const [key, value] of Object.entries(odd)) {
    if (value === 1) {
      return +key
    }
  }
}