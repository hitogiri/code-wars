function getAverage(marks) {
  return Math.floor(marks.reduce((acc, cur) => acc += cur, 0) / marks.length)
}