function adjacentElementsProduct(array) {
  let curMax = 0
  let newMax = -Infinity

  array.map((el, idx, arr) => {
    if (arr[idx + 1]) { curMax = el * arr[idx + 1] }

    if (curMax > newMax) { newMax = curMax }
  })

  return newMax
}