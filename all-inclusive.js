function containAllRots(strng, arr) {

  let rots = []

  strng.split().forEach((el) => {
    for (let i = 0; i < el.length; i++)
      rots.push(el.substring(i).concat(el.substring(0, i)))
  })

  return rots.every(el => arr.includes(el))
}