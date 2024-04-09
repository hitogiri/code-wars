function bump(x) {

  if (!x.includes("n")) return "Woohoo!"

  let bumps = {}

  for (let char of x) {
    bumps[char] = (bumps[char] || 0) + 1
  }
  return bumps["n"] <= 15 ? "Woohoo!" : "Car Dead"
}