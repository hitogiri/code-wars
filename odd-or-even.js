function oddOrEven(array) {
  let sum = array.reduce((acc, cur) => acc + cur, 0)
  return sum % 2 === 0 ? "even" : "odd"
}