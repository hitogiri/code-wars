function exampleSort(arr, exampleArr) {
  let result = []
  exampleArr.forEach((el) => {
    if (arr.includes(el)) {
      result.push(el)

      for (let i = arr.indexOf(el) + 1; i < arr.length; i++) {
        if (arr[i] === el) {
          result.push(el)
        }
      }

    }
  })

  return result
}