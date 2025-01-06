function sumDigits(number) {
  let sNum = String(Math.abs(number)).split('')
  
  return sNum.reduce((acc,cur)=> acc + Number(cur), 0)
}