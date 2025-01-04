function twoOldestAges(ages) {
  let oldest = []

  oldest.push((Math.max(...ages)))

  ages.splice(ages.indexOf(oldest[0]), 1)

  oldest.unshift((Math.max(...ages)))

  return oldest

}