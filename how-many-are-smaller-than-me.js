function smaller(nums) {
  //expecting an array

  // given an array, return an array where each element represents
  // how many numbers were smaller than it
  // in the original arry from its starting position to the end. 


  //[6,5,4,3] => [3,2,1,0]
  //[3,4,5,1,6] => [1,1,1,0,0] 

  //traverse the array
  //while traversing array, check current element against all subsequent elements
  // when a subsequent element is less than current element
  //increment a counter
  // (push that counter to new array) return that counter  
  // return that array

  return [...nums].map((el, idx, ar) => {
    let counter = 0

    for (let i = idx + 1; i < ar.length; i++) {
      if (el > ar[i]) counter++
    }
    return counter
  })
}
