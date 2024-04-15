function findLongest(array) {

  let lengthArr = array.map(num => num.toString().length)

  let longest = array.filter(num => num.toString().length == Math.max(...lengthArr))

  return longest[0]
}