function strCount(str, letter) {
  let count = str.split('').filter(chr => chr == letter)
  return count.length
}