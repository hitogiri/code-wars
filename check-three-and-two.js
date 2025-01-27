function checkThreeAndTwo(array) {

  let charMap = {}

  for (let letter of array) {
    charMap[letter] = (charMap[letter] || 0) + 1
  }

  return Object.values(charMap).includes(3) && Object.values(charMap).includes(2)

}