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
