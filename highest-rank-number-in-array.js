function highestRank(arr) {
  let count = {}

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1
  }

  let results = Object.keys(count).filter(key => count[key] ===
    Math.max(...Object.values(count)))


  return Math.max(...results)

}