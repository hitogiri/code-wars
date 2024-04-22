function numCombo(arr, num) {
  //Get the sum of the entire array with the reduce function
  const sum = arr.reduce((acc, cur) => acc + cur, 0)

  //Use the filter function to iterate over the array, subtracting one element of the array from the sum on each pass. If the result is equal to the "num" argument, add it to an array. Return the length of that array.
  return arr.filter(el => sum - el == num).length;
}