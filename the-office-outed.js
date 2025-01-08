function outed(meet, boss) {

  let rating = 0

  for (let coworker in meet) {
    if (coworker == boss) {
      meet[coworker] *= 2
    }

    rating += meet[coworker]
  }

  return rating / 11 <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}