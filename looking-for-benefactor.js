function newAvg(arr, newavg) {

  if (!arr.length) return 90

  let n = Math.ceil(
    ((arr.length + 1) * newavg) - [...arr].reduce((sum, cur) => sum + cur)
  )

  if (n >= 0) {
    return n
  } else throw new Error("Expected New Average is too low");

}