function catMouse(x) {
  return x.indexOf('C') + 4 >= x.indexOf('m') ? 'Caught!' : 'Escaped!';
}