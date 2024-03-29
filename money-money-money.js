function calculateYears(principal, interest, tax, desired) {
  let y = 0;
  for (y; principal < desired; y++) {
    principal += (principal * interest) - ((principal * interest) * tax);
  }

  return y;
}