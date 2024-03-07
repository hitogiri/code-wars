function stonePick(arr) {

  let sticks = 0;
  let stones = 0;
  let axes = 0;

  const materials = arr.filter(word => word == 'Sticks' || word == 'Wood' || word == 'Cobblestone'
  )

  for (let i = 0; i < materials.length; i++) {
    if (materials[i] == 'Wood') {
      sticks += 4
    } else if (materials[i] == 'Sticks') {
      sticks += 1
    } else if (materials[i] == "Cobblestone") {
      stones += 1
    }
  }

  const craft = (sticks, stones) => {
    for (let i = 0; i <= (sticks + stones); i++) {
      if (stones >= 3 && sticks >= 2) {
        axes++;
        stones -= 3;
        sticks -= 2;
      }
    }
    return axes;
  }

  return craft(sticks, stones);

}