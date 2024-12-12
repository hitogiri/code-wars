function change(string) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let alphaArr = new Array(26).fill(0)

  let binAlpha = alphabet.map((letter, index) => {
    if (string.toLowerCase().includes(letter)) {
      return alphaArr[index] = 1
    } else return 0
  })
  return binAlpha.join("")

}