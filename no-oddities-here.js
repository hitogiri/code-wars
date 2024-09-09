function noOdds(values) {
  return values.filter(el => el == 0 || el % 2 == 0)
}