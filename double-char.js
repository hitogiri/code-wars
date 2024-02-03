function doubleChar(str) {

  let strArr = str.split('');

  return strArr.map((letter) => letter + letter).join('')

}