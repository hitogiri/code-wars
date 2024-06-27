function checkParity(parity, bin) {
  if (parity == 'even' && bin.split("").filter(n => n == 1).length % 2 == 0) {
    return 0
  } else if (parity == 'even' && bin.split("").filter(n => n == 1).length % 2 !== 0) {
    return 1
  } else if (parity == 'odd' && bin.split("").filter(n => n == 1).length % 2 == 0) {
    return 1
  } else if (parity == 'odd' && bin.split("").filter(n => n == 1).length % 2 !== 0) {
    return 0
  }

}