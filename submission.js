/* Problem 1 */

function totalFine(fare) {
  if (typeof fare !== 'number' || fare <= 0) {
    return 'Invalid';
  } else {
    return fare + fare * 0.2 + 30;
  }
}

/* Problem 2 */

function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return 'Invalid';
  } else {
    return str.split(' ').join('').toUpperCase();
  }
}

/* Problem 3 */

function bestTeam(player1, player2) {
  if (typeof player1 !== 'object' || typeof player2 !== 'object') {
    return 'Invalid';
  } else {
    if (
      player1['foul'] + player1['cardY'] + player1['cardR'] >
      player2['foul'] + player2['cardY'] + player2['cardR']
    ) {
      return player2['name'];
    } else if (
      player1['foul'] + player1['cardY'] + player1['cardR'] <
      player2['foul'] + player2['cardY'] + player2['cardR']
    ) {
      return player1['name'];
    } else {
      return 'Tie';
    }
  }
}

/* Problem 4 */

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

/* Problem 5 */

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
