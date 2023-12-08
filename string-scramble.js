function scramble(str, arr) {

  let strArr = str.split('')
  let letter = strArr.slice()

  for (let i = 0; i < arr.length; i++) {
    letter.splice(arr[i], 1, strArr[i])
  }
  return letter.join('')
};

