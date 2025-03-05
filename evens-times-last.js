function evenLast(numbers) {

  return numbers.length ?

    numbers.flatMap((num, idx, arr) => {
      return idx % 2 == 0 ? num * arr[arr.length - 1] : []
    }).reduce((acc, cur) => acc + cur)

    : 0
}