function stairsIn20(s) {
  let dailySums = s.map(day => day.reduce((acc, cur) => acc + cur, 0))
  return dailySums.reduce((acc, cur) => acc + cur, 0) * 20
}