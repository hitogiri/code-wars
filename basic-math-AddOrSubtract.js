function calculate(str) {
  let expression = str.replaceAll('plus', '+').replaceAll('minus', '-')
  return String(eval(expression))
}