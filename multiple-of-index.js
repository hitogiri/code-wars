function multipleOfIndex(array) {

  let nArray = array.filter((el, idx, arr) =>{
   return  el % idx === 0
  })
  
  if(array[0] === 0){
    nArray.unshift(0)
  }
  
  return nArray
}