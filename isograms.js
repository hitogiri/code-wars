function isIsogram(str) {

  let iso = {}

  return str.toLowerCase()
    .split('')
    .map((letter => iso[letter] = (iso[letter] || 0) + 1))
    .filter(n => n > 1)
    .length ? false : true

}