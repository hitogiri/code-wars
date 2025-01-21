function switcher(x) {
  let alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
  let bet = {}

  for (let i = alpha.length - 1; i > 0; i--) {
    bet[i] = (alpha[i])
  }

  return x.reduce((string, letter) => string + bet[letter], '')

}