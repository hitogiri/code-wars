function checkExam(array1, array2) {
  let score = 0;

  array1.forEach((el, idx) => {
    if (el === array2[idx]) {
      score += 4
    } else if (!array2[idx]) {
      null
    } else score -= 1
  })
  return score < 0 ? 0 : score
}