function sortGrades(lst) {
  const grades = {
    'VB': 0, 'V0': 1, 'V0+': 2, 'V1': 3, 'V2': 4, 'V3': 5, 'V4': 6, 'V5': 7, 'V6': 8, 'V7': 9, 'V8': 10, 'V9': 11, 'V10': 12, 'V11': 13, 'V12': 14, 'V13': 15, 'V14': 16, 'V15': 17, 'V16': 18, 'V17': 19
  };
  return lst.sort((a, b) => (grades[a]) - (grades[b]));
}