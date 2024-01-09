function longest(s1, s2) {

  let newString = (s1 + s2).split('')

  let stringSet = new Set(newString)

  return Array.from(stringSet).sort().join('')

}