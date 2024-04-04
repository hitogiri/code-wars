function rowWeights(array) {
  let left = 0;
  let right = 0;

  array.forEach((num, idx) => {
    idx % 2 === 0 ? left += num : right += num
  })

  return [left, right]
}