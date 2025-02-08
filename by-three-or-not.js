function divisibleByThree(str) {

  return [...str].reduce((acc, cur) => +acc + +cur) % 3 == 0 ? true : false

}