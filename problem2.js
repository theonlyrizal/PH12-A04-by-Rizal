function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return 'Invalid';
  } else {
    return str.split(' ').join('').toUpperCase();
  }
}
