function resultReport(marks) {
  if (Array.isArray(marks) !== true) {
    return 'Invalid';
  } else {
    let object = { finalScore: 0, pass: 0, fail: 0 };
    if (marks.length === 0) {
      return object;
    }
    for (let index = 0; index < marks.length; index++) {
      object['finalScore'] += marks[index];
      if (marks[index] < 40) {
        object['fail']++;
      } else {
        object['pass']++;
      }
    }
    object['finalScore'] = Math.round(object['finalScore'] / marks.length);
    return object;
  }
}

console.log(resultReport([-546]));
