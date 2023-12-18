let twoSum = function (nums, target) {
  let fMarker, tMarker = 0
  let result;

  numsLoop: for (let i = 0; i < nums.length; i++) {
    fMarker = nums[i]

    for (let j = 1; j < nums.length; j++) {
      tMarker = nums[j]

      if (fMarker + tMarker === target && j !== i) {
        result = [j, i]
        break numsLoop
      }
    }
  }
  return result
};