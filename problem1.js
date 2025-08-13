function totalFine(fare) {
  if (typeof fare !== 'number' || fare <= 0) {
    return 'Invalid';
  } else {
    return fare + fare * 0.2 + 30;
  }
}
