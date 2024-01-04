const binaryArrayToNumber = arr => {

  let newArr = arr.reverse()
  let int = 0;

  newArr.forEach((n, i) => {
    int += (n * Math.pow(2, i))
  })

  return int
};


//alternate 

const bATN = arr => parseInt(arr.join(''), 2);