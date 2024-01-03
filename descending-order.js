function descendingOrder(n) {

  let nString = String(n)

  return +nString.split('').sort((a, b) => b - a).join('')
}