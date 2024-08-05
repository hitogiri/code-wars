function mergeArrays(a, b) {
  let merged = new Set(a.concat(b).sort((a, b) => a - b))
  return Array.from(merged)
}