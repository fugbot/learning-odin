function knightMoves(start, target) {
  const dummyStart = [1, 1];
  //const dummyTarget = [7, 5];
  const dummyTarget = [1, 2];
  const allowedMoves = [
    [1, 2],
    [2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [-1, 2],
    [-2, 1],
    [2, -1],
  ];
  //     1. build array with arrays with all legal moves
  let possibleMoves = [];
  let queue = [];

  possibleMoves = allowedMoves
    .map(([a, b]) => [a + dummyStart[0], b + dummyStart[1]])
    .filter(([a, b]) => a >= 0 && b >= 0 && a <= 7 && b <= 7);
  console.log("possible moves", possibleMoves);

  // 2. check if target position is reached in one of moves
  /* for (const move in possibleMoves) { //should only be used to enumerate over object properties
    console.log(move);
    if (move == dummyTarget) {
      console.log("we have a match", move);
    }
  } */

  /* possibleMoves.forEach((move) => {
    console.log(move);
    if (move.join() === dummyTarget.join()) {
      console.log("we have a match", move);
      return; //how to break out??
    }
  }); */
  //https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/
  for (const move of possibleMoves) {
    if (move.join() === dummyTarget.join()) {
      console.log("we have a match", move);
      return; //how to break out of loop??
    }
  }

  // 3. if not, build another array with all legal moves
  let newPossibleMoves = [];
  possibleMoves.forEach(([a, b]) => {
    allowedMoves.forEach(([x, y]) => {
      newPossibleMoves.push([a + x, b + y]);
    });
  });
  console.log("new moves", newPossibleMoves);
  // newPossibleMoves = newPossibleMoves.filter(
  //   ([a, b]) => a >= 0 && b >= 0 && a <= 7 && b <= 7
  // );
  newPossibleMoves = newPossibleMoves.filter(isOnBoard);
  console.log("new moves filtered", newPossibleMoves);
}

function isOnBoard([a, b]) {
  return a >= 0 && b >= 0 && a <= 7 && b <= 7;
}

knightMoves([3, 3], [7, 7]);
