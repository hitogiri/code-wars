function removeSmallest(numbers) {

  let i = numbers.slice()
  i.splice(i.indexOf(Math.min(...i)), 1)

  return i
}