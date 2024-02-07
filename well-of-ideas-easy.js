function well(x) {

  if (!x.includes('good'))
    return 'Fail!'

  let ideas = x.filter(idea => idea == 'good')

  return ideas.length <= 2 ? 'Publish!' : 'I smell a series!'
}