function sortDict(dict) {

  let arr = []

  for (const property in dict) {
    if (isNaN(property)) {
      arr.push([property, dict[property]]);
    } else arr.push([+property, dict[property]]);
  }


  return arr.sort((a, b) => b[1] - a[1])


}

