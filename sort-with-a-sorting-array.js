function sort(initialArray, sortingArray) {
  let letters = initialArray.slice()

  for (let i = 0; i < initialArray.length; i++) {
    letters.splice(sortingArray[i], 1, initialArray[i])
  }
  return letters
}