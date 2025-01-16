function pairs(ar) {

  let count = 0

  let result = ar.reduce((acc, cur, index, array) => {
    if (index % 2 === 0)
      acc.push(array.slice(index, index + 2));
    return acc;
  }, []);

  for (let i = 0; i < result.length; i++) {
    if (result[i][0] == result[i][1] + 1) {
      count += 1
    } else if (result[i][0] == result[i][1] - 1) {
      count += 1
    }
  }

  return count
}