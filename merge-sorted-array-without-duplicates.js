function mergeArrays(a, b) {
  let merged = new Set(a.concat(b).sort())
  return Array.from(merged)
}