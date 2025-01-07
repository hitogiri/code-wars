function minSum(arr) {

  arr.sort((a, b) => a - b)

  let products = []

  for (let i = 0; i < arr.length; i++) {
    if (i < (arr.length / 2)) {
      store.push(arr[i] * arr[arr.length - (i + 1)])
    }
  }

  return products.reduce((acc, cur) => acc + cur, 0)
}