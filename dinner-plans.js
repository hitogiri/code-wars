function commonGround(s1, s2) {

  let common = s2.split(' ')
  let match = []

  common.forEach((word) => {
    if (s1.includes(word)) {
      match.push(word)
    }
  })

  match = match.join(' ')
  return match ? match : 'death'
}