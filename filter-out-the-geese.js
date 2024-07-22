function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let newBirds = birds.filter((bird) => geese.indexOf(bird) === -1)
  return newBirds
};