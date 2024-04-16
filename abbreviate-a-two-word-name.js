function abbrevName(name) {
  let initials = name.toUpperCase().split(' ')
  initials = initials.map(str => str.substring(0, 1))

  return initials.join('.')
}