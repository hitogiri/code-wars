function openOrSenior(data) {
  return data.map((pair) => {
    return ((pair[0] >= 55) && (pair[1] > 7)) ? 'Senior' : 'Open'
  })
}