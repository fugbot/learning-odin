Board

- 2d board
  cannot be smaller/larger than 0,7

Knight moves
start 3,3 (x,y)
1,4 == -2,1
2,5 == -1,2
4,5 == 1,2
5,4 == 2,1
5,2 == 2,-1
4,1 == 1,-2
2,1 == -1,-2
1,2 == -2,-1

always 2, 1
can be +/-

need to check all paths to check which is the shortest

Shortest Path Finding: BFS can be used to find the shortest path between two nodes in an unweighted graph. By keeping track of the parent of each node during the traversal, the shortest path can be reconstructed.

1. build array with arrays with all legal moves
2. check if target position is reached in one of moves
3. if not, build another array with all legal moves

Find shortest way
when target position reached (already using bfs), creating new arrays from each level
THen how do we traverse to find where the shortest path was? adjacency list?

Adjacency Lists

- for each vertex, store array of vertices adjacent to it
- each vertex has an adjacency list

recursive
breakpoint
