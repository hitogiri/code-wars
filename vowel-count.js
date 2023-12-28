function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  str.split('').forEach((letter) => {
    vowels.includes(letter) ? count++ : null
  })

  return count
}