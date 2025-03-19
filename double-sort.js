function dbSort(a) {
  let numArray = []
  let wordArray = []


  a.filter((el) => {
    if (typeof el == 'number') {
      numArray.push(el)
    } else wordArray.push(el)
  })

  numArray.sort((first, second) => first - second)
  wordArray.sort()

  return numArray.concat(wordArray)
}