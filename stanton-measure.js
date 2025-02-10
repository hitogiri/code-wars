function stantonMeasure(a) {

  let n = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) n++
  }

  return a.filter((digit) => digit === n).length

}