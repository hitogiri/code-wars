function tidyNumber(n) {
  let bool = ""
  let nStringArray = (" " + n).trim().split("")

  if (nStringArray.length === 1) { return true }

  for (let i = 0; i < nStringArray.length - 1; i++) {
    if (!(+nStringArray[i] <= +nStringArray[i + 1])) {
      return false

    } else bool = true

  }

  return bool
}