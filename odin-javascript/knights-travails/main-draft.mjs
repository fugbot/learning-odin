//This is an unused draft
import { Graph } from "./Graph-draft.mjs";

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
  //todo: ignore moves already visited nodes
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

  //todo: queue solution?
  //add starting cell to queue first...add all possible moves to queue...first time through queue is path length of one, which we dequeue
  //within loop, will will enqueue that one's adjacencies which give our loop something to act on
  //has it been visited, distances, predecessor?
  //   dequeue a thing,
  // check if it's been visited already,
  // check if it's the end,
  // if not set some values on that thing,
  // and enqueue all its adjacencies.

  //create adjacency list
  const numVertices = 1 + possibleMoves.length;
  console.log("vertices number:", numVertices);
  const graph1 = new Graph(numVertices);
  let vertices = possibleMoves;
  //add vertices
  for (let i = 0; i < vertices.length; i++) {
    graph1.addVertex(vertices[i]);
  }
  //add start as vertex
  graph1.addVertex(dummyStart);
  //add edges
  for (let i = 0; i < vertices.length; i++) {
    graph1.addEdge(dummyStart, vertices[i]);
  }
  graph1.printGraph();
  console.log("bfs", bfs(graph1.AdjList, dummyStart, [0, 3]));
}

function isOnBoard([a, b]) {
  return a >= 0 && b >= 0 && a <= 7 && b <= 7;
}

knightMoves([3, 3], [7, 7]);

function bfs(adjList, start, end) {
  const result = [];
  let queue = [start];
  let prev = { [start]: null };

  while (queue.length) {
    let current = queue.shift();

    if (current === end) {
      let path = [];
      while (current) {
        path.unshift(current);
        console.log("path", path);
        current = prev[current];
      }
      return path;
    }
    console.log("adj list", adjList);
    if (current in adjList) {
      console.log("adj list", adjList);
      console.log(adjList.get(current));
      for (let v of adjList.get(current)) {
        if (!(v in prev)) {
          prev[v] = current;
          queue.push(v);
        }
      }
    }
  }
}
