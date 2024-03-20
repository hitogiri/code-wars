function alphabetWar(fight) {

  let lSum = 0
  const left = { w: 4, p: 3, b: 2, s: 1 }

  let rSum = 0
  const right = { m: 4, q: 3, d: 2, z: 1 }


  let s = fight.split('')

  s.forEach((letter) => {
    if (left.hasOwnProperty(letter)) {
      lSum += left[letter]
    } else if (right.hasOwnProperty(letter)) {
      rSum += right[letter]
    }
  })


  if (lSum > rSum) {
    return "Left side wins!"
  } else if (rSum > lSum) {
    return "Right side wins!"
  } else return "Let's fight again!"
}