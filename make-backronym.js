//preload variable: dict

var makeBackronym = function (string) {

  let backronym = string.toUpperCase().split('').map((letter) => {
    if (letter in dict) {
      return dict[letter] + ' '
    }
  })

  return backronym.join('').slice(0, -1)

};