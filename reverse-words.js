function reverseWords(str) {
  let arr = str.split('')
  return arr.reverse().join('').split(' ').reverse().join(' ')
}