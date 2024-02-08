function bonusTime(salary, bonus) {

  return bonus ? `£`.concat(`${salary * 10}`) : `£`.concat(`${salary}`)
}