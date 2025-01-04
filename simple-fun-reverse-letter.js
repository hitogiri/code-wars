function reverseLetter(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let newArr = []

  str.split('').forEach((letter) => {
    if (alpha.includes(letter))
      newArr.push(letter)
  })

  return newArr.reverse().join('')

  //   return str.split('').filter((letter) => alpha.includes(letter)).reverse().join('')  
}