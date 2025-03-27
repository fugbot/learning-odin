import { Cell } from "./Cell.mjs";

const legalMoves = [
  [1, 2],
  [2, 1],
  [-1, -2],
  [-2, -1],
  [1, -2],
  [-1, 2],
  [-2, 1],
  [2, -1],
];

function knightMoves(startPt, endPt) {
  if (startPt === endPt) {
    return "Start point is same as end point";
  }
  const start = new Cell(startPt);
  console.log(start);
  // enqueue start point
  let queue = [start];
  console.log("queue", queue);

  let cellArray = [];

  while (queue.length) {
    //for loop??
    //dequeue first in queue
    let current = queue.shift();
    let predecessor = current;
    console.log("current", current);
    console.log("predecessor", predecessor);

    let validMoves = [];
    validMoves = legalMoves
      .map(([a, b]) => [a + current.coordinates[0], b + current.coordinates[1]])
      .filter(([a, b]) => a >= 0 && b >= 0 && a <= 7 && b <= 7);
    console.log("valid moves", validMoves);

    for (const move of validMoves) {
      if (!current.hasVisited(move)) {
        const currentCell = new Cell(move, current.distance + 1, predecessor);
        queue.push(currentCell);

        //check if current is target
        if (move[0] === endPt[0] && move[1] === endPt[1]) {
          const shortestPath = [];
          console.log("Target reached after", currentCell.distance, "steps");

          //loop through predecessors
          let pathCell = currentCell;
          while (pathCell !== null) {
            shortestPath.push(pathCell.coordinates);
            pathCell = pathCell.predecessor;
          }
          console.log("path was ", shortestPath.reverse());
          return;
        }
      }
    }
  }
}

//run app
knightMoves([0, 0], [7, 7]);
