function productArray(numbers) {
  let prodArr = []

  for (let i = 0; i < numbers.length; i++) {
    prodArr.push(
      numbers
        .filter((el, idx) => !(idx == i))
        .reduce((acc, cur) => acc * cur))
  }
  return prodArr
}