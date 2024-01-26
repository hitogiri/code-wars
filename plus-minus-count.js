function catchSignChange(arr) {
  let counter = 0
  console.log(arr)

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.sign(arr[i]) === -1 && Math.sign(arr[i + 1] === 0)) {
      counter++
    } else if (Math.sign(arr[i]) === 0 && Math.sign(arr[i] === -1)) {
      counter++
    } else if (Math.sign(arr[i]) === 0 && Math.sign(arr[i + 1]) === 1) {
      console.log('here')
    } else if (Math.sign(arr[i]) === 1 && Math.sign(arr[i + 1]) === 0) {
      console.log('here')
    } else if (Math.sign(arr[i]) !== Math.sign(arr[i + 1])) {
      counter++
    }

  }
  return counter
}