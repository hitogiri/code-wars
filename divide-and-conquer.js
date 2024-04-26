function divCon(x){
  let sCount = 0
  let nCount = 0
  
  x.forEach(el =>  typeof el == 'string' ? sCount += parseInt(el) : nCount += el)
  
  return nCount - sCount
}