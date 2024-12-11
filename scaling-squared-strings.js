function scale(strng, k, n) {
  let newArr = []
  let wordArr = strng.split("\n")

  if (strng == "") {
    return ''
  } else {
    for (let i = 0; i < wordArr.length; i++) {
      for (let x = 0; x < n; x++) {
        for (let j = 0; j < wordArr[i].length; j++) {
          for (let y = 0; y < k; y++) {
            newArr.push(wordArr[i][j])
          }
        }
        newArr.push("\n")
      }
    }
    return newArr.join("").slice(0, -1)
  }
}