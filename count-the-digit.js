function nbDig(n, d) {

  let count = 0
  let squared

  for (let i = 0; i <= n; i++) {
    squared = i ** 2
    squared.toString()
      .split('')
      .forEach((num) => {
        if (num == d)
          count++
      })
  }
  return count
}