export class Cell {
  constructor(coordinates = null, distance = 0, predecessor = null) {
    this.coordinates = coordinates;
    //this.y = y;
    //this.visited = false; //if distance if not undefined, then it has been visited
    this.distance = distance;
    this.predecessor = predecessor;
  }

  hasVisited(targetCoordinates) {
    let pathCell = this;
    while (pathCell !== null) {
      if (
        pathCell.coordinates[0] === targetCoordinates[0] &&
        pathCell.coordinates[1] === targetCoordinates[1]
      ) {
        return true;
      }
      pathCell = pathCell.predecessor;
    }
    return false;
  }
}
