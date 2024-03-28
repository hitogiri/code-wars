function isVow(a) {

  let b = a.map((el) => {
    switch (el) {
      case 97:
        return 'a'
      case 101:
        return 'e'
      case 105:
        return 'i'
      case 111:
        return 'o'
      case 117:
        return 'u'
      default:
        return el
    }
  })
  return b
}