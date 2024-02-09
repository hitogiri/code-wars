function remove(string) {
  let end = string[string.length - 1]
  return end == '!' ? string.slice(0, string.length - 1) : string
}