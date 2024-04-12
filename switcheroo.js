function switcheroo(x) {
  let strCopy = x;
  return strCopy.split('').map((chr) => {
    if (chr === 'a') {
      return chr = 'b'
    } else if (chr === 'b') {
      return chr = 'a'
    } else return chr
  }).join('')
}     