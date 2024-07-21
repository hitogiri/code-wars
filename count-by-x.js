function countBy(x, n) {

  let multiple = 0;
  let multipleArray = [];

  for (let i = 1; i <= n; i++) {
    multiple = i * x
    multipleArray.push(multiple)
  }

  return multipleArray;
}