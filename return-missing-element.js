function getMissingElement(superImportantArray) {

  let ar = [...superImportantArray].sort((a, b) => a - b)
  console.log(ar)

  for (let i = 0; i < ar.length; i++) {
    if (ar.includes(i) == false) {
      return i
    }
  }

}