function arrayLeaders(numbers) {
  let leaders = []

  numbers.map((num, idx, arr) => {
    let newSum = arr.slice(idx + 1).reduce((acc, cur) => acc + cur, 0)

    if (num > newSum) {
      leaders.push(num)
    }

  })

  return leaders;
}