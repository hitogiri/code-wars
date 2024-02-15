function areYouPlayingBanjo(name) {

  let firstLetter = name[0].toLowerCase()

  return firstLetter === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}