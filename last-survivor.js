function lastSurvivor(letters, coords) {

  let chop = [...letters].slice()

  for (let idx of coords) {
    chop.splice(idx, 1)
  }

  return chop[0]
}