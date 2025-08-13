function isSame(arr1, arr2) {
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return 'Invalid';
  } else {
    let flag = true;
    if (arr1.length !== arr2.length) {
      flag = false;
      return flag;
    } else {
      for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] === arr2[index]) {
          continue;
        } else {
          flag = false;
          break;
        }
      }
      return flag;
    }
  }
}
