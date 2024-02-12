isAnagram = (word1, word2) => {
  return word1.toLowerCase().split('').sort().join('')
    == word2.toLowerCase().split('').sort().join('')
};
