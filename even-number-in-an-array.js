function evenNumbers(array, number) {
  let evenArray = [];
  let counter = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    if (counter == number) {
      break;
    } else if (array[i] % 2 == 0) {
      evenArray.push(array[i])
      counter++
    }
  }

  return evenArray.reverse()
}