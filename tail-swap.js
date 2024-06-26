const swapElements = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
  return arr;
};

function tailSwap(arr) {
  let seperatedArr = arr.join(":").split(":")

  swapElements(seperatedArr, 1, 3)

  let firstEl = seperatedArr.slice(0, 2).join(":")
  let secondEl = seperatedArr.slice(2, 4).join(":")

  return [firstEl, secondEl]

}