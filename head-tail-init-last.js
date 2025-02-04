function head(arr){
  return arr[0]
}

function tail(arr){
  return arr.length == 1 ? [] : arr.slice(1)
}

function init(arr){
  return arr.slice(0,-1)
}

function last(arr){
  return arr.pop()
}