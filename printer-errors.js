function printerError(s) {
  let sorted = s.split('').sort()

  let lastOccurence = sorted.findLastIndex((letter) => letter == 'm')

  if (lastOccurence == -1) {
    lastOccurence = sorted.findLastIndex((letter) => letter == 'l')
  }

  let errorString = sorted.splice(lastOccurence + 1)

  let oc = s.length.toString()
  let er = errorString.length.toString()

  return (er + "/" + oc)
}