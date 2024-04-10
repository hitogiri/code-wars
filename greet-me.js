var greet = function (name) {
  let capName = name[0].toUpperCase() + name.slice(1).toLowerCase()
  return "Hello " + capName + "!"
};