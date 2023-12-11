function duckDuckGoose(players, goose) {

  let player = players.map(name => name.name)

  return goose > player.length ? player[(goose - 1) % player.length] : (player[goose - 1])
}