function sumTwoSmallestNumbers(numbers) {  
  let min1 = Math.min(...numbers)
  let mindex = numbers.findIndex(num => num === min1)
  numbers.includes(min1) && numbers.splice(mindex, 1 )
  let min2 = Math.min(...numbers)
  
  
  return min1 + min2 
}