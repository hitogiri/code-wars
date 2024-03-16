function noBoringZeros(n) {
  let w = n.toString().split('')

  for (let l = w.length - 1; l > 0; l--) {
    if (w[l] === '0') {
      w.pop()
    } else
      break
  }

  return Number(w.join(''))

}