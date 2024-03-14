var number = function (array) {
  return array.map((letter, idx) => (idx + 1) + ': ' + letter)
}