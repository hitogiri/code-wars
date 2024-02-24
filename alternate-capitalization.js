function capitalize(s) {

  let eUp = s.split('').map((letter, index) => {
    return index % 2 === 0 ? letter.toUpperCase() : letter
  }).join('')

  let oUp = s.split('').map((letter, index) => {
    return index % 2 !== 0 ? letter.toUpperCase() : letter
  }).join('')

  return [eUp, oUp]
};