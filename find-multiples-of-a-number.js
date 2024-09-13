function findMultiples(integer, limit) {
  let multiples = []

  for (let i = 1; Math.max(...multiples) <= limit - integer; i++) {
    multiples.push(integer * i)
  }

  return multiples
}