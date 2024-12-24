function dotCalculator(equation) {

  const operator = equation.split(".").join("").trim()
  const index = equation.indexOf(operator)


  let left = equation.split(operator)[0].trim().length
  let right = equation.substring(index + 1).trim().length

  let result

  switch (operator) {
    case '+':
      result = left + right;
      return new String().padStart(result, '.')
    case '-':
      result = left - right;
      return new String().padStart(result, '.')
    case '*':
      result = left * right;
      return new String().padStart(result, '.')
    case '//':
      result = (left / (right - 2));
      return new String().padStart(result, '.')
  }
}