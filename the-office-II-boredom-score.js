function boredom(staff) {

  let boredomScore = 0
  let departments = Object.values(staff)

  let departmentScore = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25
  }

  departments.forEach((department) => {
    boredomScore += (departmentScore[department])
  })


  if (boredomScore <= 80) {
    return "kill me now"
  } else if (boredomScore > 80 && boredomScore < 100) {
    return 'i can handle this'
  } else return 'party time!!'

}