function points(games) {

  let count = 0;

  games.forEach((el) => {
    if (+el[0] > +el[2]) {
      count += 3
    } else if (+el[0] == +el[2]) {
      count += 1
    }
  })

  return count
}