function findShort(s) {

  let sArray = [];

  s.split(' ').forEach((word) => {
    sArray.push(word.length)
  })

  return Math.min(...sArray)
}