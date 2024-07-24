function addLength(str) {
  let strArr = str.split(" ")

  return strArr.map((word, idx, arr) => {
    return arr[idx] = word + " " + word.length
  })
}