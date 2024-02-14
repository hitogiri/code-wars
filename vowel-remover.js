function shortcut(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let noVowels = [];
  let s = string.slice()

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(s[i])) {
      noVowels.push(s[i])
    }
  }
  return noVowels.join('')
}