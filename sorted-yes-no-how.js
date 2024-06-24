function isSortedAndHow(array) {
  return array.toString() === [...array].sort((a, b) => a - b).toString()
    ? 'yes, ascending' :
    array.toString() === [...array].sort((a, b) => b - a).toString()
      ? 'yes, descending' : 'no'
}