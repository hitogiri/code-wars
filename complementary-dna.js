function DNAStrand(dna) {

  let complements = { A: 'T', T: 'A', C: 'G', G: 'C' }

  let complementStrand = dna.split('').map((letter) => {
    return letter = complements[letter]
  }).join('')

  return complementStrand
}