function countPositivesSumNegatives(input) {

  if (input == null || !input.length) return []

  let posCount = 0;
  let negSum = 0;

  input.map(el => el > 0 ? posCount++ : negSum += el)
  return [posCount, negSum]
}