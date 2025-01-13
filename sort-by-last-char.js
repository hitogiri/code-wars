function last(x) {

  let s = x.slice().split(" ")

  return s.sort((a, b) => {
    let aLast = a.charAt(a.length - 1)
    let bLast = b.charAt(b.length - 1)

    return aLast.localeCompare(bLast)
  })

}