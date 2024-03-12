function sumOfMinimums(arr) {
  let minSum = 0

  arr.map((indv) => {
    minSum += Math.min(...indv)
  })

  return minSum
}

//Alternate
function sumOfMinimums(arr) {
  return arr.map((indv) => {
    let minSum = 0
    return minSum += Math.min(...indv)
  }).reduce((acc, cur) => acc + cur, 0)
}