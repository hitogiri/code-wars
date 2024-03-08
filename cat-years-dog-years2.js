var ownedCatAndDog = function (catYears, dogYears) {

  const humanYears = (petYears, accumulator, mod) => {
    if (petYears >= 15) {
      accumulator += 1;
      petYears -= 15

      if (petYears >= 9) {
        accumulator += 1;
        petYears -= 9

        while (petYears >= mod) {
          petYears -= mod
          accumulator += 1
        }
      }
    }
    return accumulator
  }

  let catAge = humanYears(catYears, 0, 4)
  let dogAge = humanYears(dogYears, 0, 5)

  return [catAge, dogAge]
}