
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};


//console.log(graph['a'])

function depthFirstPrint(graph, source){
    const stack = [source];

    while (stack.length > 0){
        let current = stack.pop();
        console.log(current);
        graph[current].map(neighbor => stack.push(neighbor));
        //could also right the line above as
        /*for (let neighbor of graph[current]){
            stack.push(neighbor);
        }*/
    }

};
//depthFirstPrint(graph, 'a')

function depthFirstPrintRec(graph, source){
    console.log(source);
    // we dont need a base case in this scenario bc when you iterate over an empty array, which means you have 0 iterations and if you have 0 iterations then you never have to make a recursive call -> like having a base case
    for (let neighbor of graph[source]){
        depthFirstPrintRec(graph, neighbor);
    }
};
//depthFirstPrint(graph, 'a')

function breadthFirstPrint(graph,source){
    const queue = [source];
    
    while (queue.length > 0){
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]){
            if (neighbor){
                queue.push(neighbor);
            }  
        }
    }
};
//console.log(breadthFirstPrint(graph,'a'))

//i dont know why i have an ending log of 'undefined' for the breadthFirstPrint function
// const here = [];
// const popss = here.pop();
// if (here[1]){
//     console.log(here[1])
// } else{
//     console.log('nothing is here')
// } 


//HAS PATH
function hasPathDepthFirst(graph, source, target){
    const stack = [source];
    while (stack.length > 0){
        current = stack.pop();
        if (current === target){
            return true;
        }
        for (let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
    return false;
};
//console.log(hasPathDepthFirst(graph, 'b', 'e')) 

//RECURSIVE
const hasPath = (graph, src, dst) => {
    if (src === dst) return true;
  
    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst) === true) {
        return true;
      }
    }
  
    return false;
};



//UNDIRECTED PATH - recursive way only shown on structy
//Need to build a helper function that will turn edges array into a node object
const edges =[
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const undirectedPath = (edges, nodeA, nodeB) => {
    //convert edge list into an adjacency list
    const graph = buildGraph(edges);
    //the hasPath function shld return a boolean
    // pass a set to check whether or not the nodes have been visited before
    return hasPath(graph, nodeA, nodeB, new Set());
};
  
const hasPath = (graph, src, dst, visited) => {
    //base case
    //you have succesfully found a path when source is equal to destination => return true
    if (src === dst) return true;
    //check if src node is already in visited set -> return false
    //theres no reason to travel through this node anymore
    if ( visited.has(src) ) return false;
    //if it is not already in the set then it has not been visited and shld be added to the set
    visited.add(src);
    
    //if source is not equal to dst - keep looking through neighbors of source node
    for ( let neighbor of graph[src] ){
      //in recursive call want to use the same graph, dst and visted Set (need to know where i've been in the past) and change the source of the search
      //if neighbor has a path to the destination then source must also have a path to the destination
      if( hasPath(graph, neighbor, dst, visited) === true){
        return true;
      }
    }
    //if we find that none of our neighbor ever make a winning path then return false
    return false;
};
  
const buildGraph = (edges) => {
    const graph = {};
    
    //want to fill graph with info on edges
    for ( let edge of edges ){
      //we know a single edge wld be a pair so destructure this
      const [ a, b ] = edge;
      // want to initialize these nodes as keys of the graph object
      //if "a" node is not in the graph => initialize it as a key in the graph with an empty array. Same for "b"
      if(!(a in graph)){
        graph[a] = [];
      }
      if(!(b in graph)){
        graph[b] = [];
      }
      //bc this is an undirected graph we have to push both ways
      graph[a].push(b);
      graph[b].push(a);
    }
    
    return graph;
};



//CONNECTED COMPONENT COUNT

const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0
    //iterative code
    //need to begin a traversal at every node
    //use for-in bc we are given an obect, not an array
    for (let node in graph){   
      // want this function to do a traversal from that node as far as possible
      if ( explore(graph, node, visited) === true){
       count++; 
      }
    }
    return count;
};
  
const explore = (graph, current, visited) => {
    //need to make sure that key value pairs are both strings as opposed to keys being strings and values being numbers
    if ( visited.has(String(current)) ) return false;
    visited.add(String(current));
    
    for ( let neighbor of graph[current] ){
      explore(graph, neighbor, visited);
    }
    //returning true means you have explored this current node as far as posible
    return true;
};



//LARGEST COMPONENT
const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;
    for ( let node in graph){
      //the output of this shld be the size of the component
      const size = exploreSize(graph, node, visited);
      if ( size > longest ){
        longest = size;
      }
    }
    return longest;
};
  
const exploreSize = (graph, node, visited) => {
    //check if you've visited node already
    if(visited.has(node)) return 0;
    
    visited.add(node);
    let size = 1; // represents the current node we're on right now
    //do recursive calls on the neighbor of the node
   
    for ( let neighbor of graph[node] ){
      size += exploreSize(graph, neighbor, visited);
      //assume this exploreSize function is working and if its working it wld give back the size of the component so far
    }
    return size;
};




//SHORTEST PATH


const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    //if something is added to the queue it shld also be added to the set
    //for a Set if you want to intitialize it with some values you have to create an array with those values
    const visited = new Set([ nodeA ]);
    
    //work in BF logic
    const queue = [ [nodeA, 0] ];//use starting point as initial value
    
    while ( queue.length > 0 ){
      const [ node, distance ] = queue.shift();
      
      if (node === nodeB) return distance;
      
      //if the node is not the target, push its neighbors
      for ( let neighbor of graph[node] ){
        //only if the neighbor has not been visited shld you add it to the queue
        if (!(visited.has(neighbor))){
          visited.add(neighbor);
          queue.push([ neighbor, distance + 1 ])
        } 
      }
    }
    return -1;
};
  
  
const buildGraph = (edges) =>{
    const graph = {};
    
    //iterate through every edge pair given in edges
    for( let edge of edges){
      const [ a, b ] = edge;
      if(!(a in graph)) graph[a] = [];
      if(!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }  
    return graph;
};




//ISLAND COUNT

const islandCount = (grid) => {
    //assume positions are the nodes of the new graph
    const visited = new Set();
    let count = 0;
    
    //keep in mind the length of the rows might differ from the columns
    for (let r = 0; r < grid.length; r++){
      for (let c = 0; c < grid[0].length; c++){
        if (explore( grid, r, c, visited)){
          count++;
        }
      }
    }
    return count;
};
  
const explore = ( grid, r, c, visited) => {
    //make sure that position is inbound
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if(!rowInbounds || !colInbounds) return false;
    
    //what if the position is water?
    if (grid[r][c] === 'W') return false;
    
    //in sets we cannot save positions as an array of numbers like [r,c] so will instead have to convert them into strings
    const pos = r + "," + c;
    if (visited.has(pos)) return false;
    visited.add(pos);
    
    //now we can add recursive code
    explore(grid, r - 1, c, visited);//up
    explore(grid, r + 1, c, visited);//down
    explore(grid, r, c - 1, visited);//left
    explore(grid, r, c + 1, visited);//right
    
    //if we return true it means that we have discovered a brand new island
    return true;
};






//MINIMUM ISLAND

const minimumIsland = (grid) => {
    const visited = new Set();
    
    let minSize = Infinity;
    
    for ( let r = 0; r < grid.length; r++ ){
      for ( let c= 0; c < grid[0].length; c++){
        const size = exploreSize(grid, r, c, visited);
        if ( size > 0 && size < minSize ){
          minSize = size;
        }
      }
    }
    return minSize;
};
  
const exploreSize = (grid, r, c, visited) =>{
    //base cases
    //1. check if position is inbounds
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return 0;
    
    //2. check if position is water
    if ( grid[r][c] === 'W' ) return 0;
    
    //3. check if position has already been visited
    const pos = r + "," + c;
    if(visited.has(pos)) return 0;
    //if it hasnt been visited you must be visiting it right now so add it to the visited set
    visited.add(pos);
    
    //recursive code
    let size = 1;
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);
    return size;
};



//CLOSEST CARROT
//THIS CODE DIDNT PASS THE TESTS IN STRUCTY BUT I DONT KNOW WHAT IS INCORRECT AND I WANT TO KEEP IT IN BC I HAVE NOTES THROUGHOUT THE CODE 

const closestCarrot = (grid, startRow, startCol) => {
    //remember when something is in the queue it should be added to the set already
    //remember in sets we cannot save positions as an array of numbers like [r,c] so will instead have to convert them into strings
    const visited = new Set([ startRow + ',' + startCol ]);
    
    //want the starting position in queue as well as the distance from starting position
    const queue = [ [ startRow, startCol, 0 ] ];
    
    while ( queue.length > 0 ){
      const [ row, col, distance ] = queue.shift();
      
      if ( grid[row][col] === "C" ) return distance;
      
      //deltas gives all of the changes to the row and column needed for the "for - of" loop to access the neighbors
      //remember to use this trick in order to solve graph problems
      const deltas = [[1, 0], [-1, 0], [0, 1] [0, -1]];
      
      for ( let delta of deltas ){
        const [ rowDelta, colDelta ] = delta;
        const neighborRow = row + rowDelta;
        const neighborCol = col + colDelta;
        
        //check if the neighbor row and columns are in bounds
        const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
        const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
        const pos = neighborRow + '+' + neighborCol;
        if (rowInbounds && colInbounds && grid[neighborRow][neighborCol] !== 'X' && !visited.has(pos)){
          queue.push([ neighborRow, neighborCol, distance + 1 ]);
          visited.add(pos);
        }
      }
    }
    
    // if queue is empty and you never hit a carrot that must mean there is no path between starting position and a carrot
    return -1;
};




//LONGEST PATH

const longestPath = (graph) => {
    //over time eant to create distances object
    const distance = {};
    //find terminal nodes
    for ( let node in graph){
      if ( graph[node].length === 0){
        distance[node] = 0;
      }
    }
    
    //depth 1st traversal on every potential starting node
    for ( let node in graph ){
      traverseDistance(graph, node, distance);
    }
    
    return Math.max(...Object.values(distance))
};
  
function traverseDistance(graph, node, distance){
    //base case is prob the trickiest part
    if (node in distance) return distance[node];
    
    let maxLength = 0;
    for ( let neighbor of graph[node] ) {
      const attempt = traverseDistance(graph, neighbor, distance);
      if ( attempt > maxLength ) maxLength = attempt;
    }
    
    distance[node] = 1 + maxLength;
    return distance[node];
};




// SEMESTERS REQUIRED

const semestersRequired = (numCourses, prereqs) => {
    //convert edge into an adjacency list
    const graph = buildGraph(numCourses, prereqs);
    const distance = {};
    for ( let course in graph ){
      //need number of nodes not edges
      if ( graph[course].length ===0) distance[course] = 1;
    }
    
    for ( let course in graph ){
      traverseDistance(graph, course, distance);
    }
    return Math.max(...Object.values(distance))
};
  
function traverseDistance(graph, node, distance){
    //BASE CASE - if we have already visited the node then just return its distance
    if ( node in distance ) return distance[node];
    
    let maxDistance = 0;
    for ( let neighbor of graph[node] ){
      const neighborDistance = traverseDistance(graph, neighbor, distance);
      if( neighborDistance > maxDistance ) maxDistance = neighborDistance;
    }
    distance[node] =  1+ maxDistance;
    return distance[node];
};
  
function buildGraph(numCourses, prereqs){
    const graph = {};
    
    for ( let i = 0; i < numCourses; i++){
      graph[i] = []; 
    }
    
    for ( let prereq of prereqs ){
      //this is a directed graph so do not make symmetric
      const [ a, b ] = prereq;
      graph[a].push(b);
    }
    
    return graph;
};





//BEST BRIDGE

const bestBridge = (grid) => {
    let mainIsland;
    for (let r = 0; r < grid.length; r += 1) {
      for (let c = 0; c < grid[0].length; c += 1) {
        const possibleIsland = traverseIsland(grid, r, c, new Set());
        if (possibleIsland.size > 0) {
          mainIsland = possibleIsland;
          break;
        }
      }
    }
    
    const visited = new Set(mainIsland);
    const queue = [];
    for (let pos of mainIsland) {
      const [ row, col ] = pos.split(',').map(Number);
      queue.push([row, col, 0]);
    }
    
    while (queue.length > 0) {
      const [ row, col, distance ] = queue.shift();
      
      const pos = row + ',' + col;
      if (grid[row][col] === 'L' && !mainIsland.has(pos)) return distance - 1;
      
      const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (let delta of deltas) {
        const [ deltaRow, deltaCol ] = delta;
        const neighborRow = row + deltaRow;
        const neighborCol = col + deltaCol;
        const neighborPos = neighborRow + ',' + neighborCol;
        if (isInbounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
          visited.add(neighborPos);
          queue.push([neighborRow, neighborCol, distance + 1]);
        }
      }
    }
};
  
const isInbounds = (grid, row, col) => {
    const rowInbounds = 0 <= row  && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    return rowInbounds && colInbounds;
};
  
const traverseIsland = (grid, row, col, visited) => {
    if (!isInbounds(grid, row, col) || grid[row][col] === 'W') return visited;
    
    const pos = row + ',' + col;
    if (visited.has(pos)) return visited;
    
    visited.add(pos);
    
    traverseIsland(grid, row - 1, col, visited);
    traverseIsland(grid, row + 1, col, visited);
    traverseIsland(grid, row, col - 1, visited);
    traverseIsland(grid, row, col + 1, visited);
    
    return visited;
};





//HAS CYCLE

const hasCycle = (graph) => {
    const visiting = new Set();
    const visited = new Set();
    
    //could have separate components in the graph so need to iterate
    for ( let node in graph ){
      if(cycleDetect(graph, node, visiting, visited) === true){
        return true;
      }
    }
    
    return false;
};
  
const cycleDetect = (graph, node, visiting, visited) =>{
    //if you have succesfully marked node as visited already -> there must not be a cycle
    if(visited.has(node)) return false;
    
    //if you get to a node that is currently in progress it means that it is cyclic
    if (visiting.has(node)) return true;
    
    visiting.add(node);
    for ( let neighbor of graph[node] ) {
      //expect a boolean of whether or not your neighbor has found a cycle
      if(cycleDetect(graph, neighbor, visiting, visited) === true){
        return true;
      }
    }
    //after we've run through the for loop we can remove the node from visiting and place it in visited
    visiting.delete(node);
    visited.add(node);
    
    return false;
};






//PREREQS POSSIBLE

const prereqsPossible = (numCourses, prereqs) => {
    const visiting = new Set();
    const visited = new Set();
    
    const graph = buildGraph(numCourses, prereqs);
    for (let node in graph) {
      if (hasCycle(graph, node, visiting, visited)) {
        return false;
      }
    }
    
    return true;
};
  
const hasCycle = (graph, node, visiting, visited) => {
    if (visited.has(node)) return false;
    
    if (visiting.has(node)) return true;
    
    visiting.add(node);
    
    for (let neighbor of graph[node]) {
      if (hasCycle(graph, neighbor, visiting, visited)) {
        return true;    
      }
    }
    
    visiting.delete(node);
    visited.add(node);
    
    return false;
};
  
const buildGraph = (numCourses, prereqs) => {
    const graph = {};
    
    for (let i = 0; i < numCourses; i += 1) {
      graph[i] = [];
    }
    
    for (let prereq of prereqs) {
      const [a, b] = prereq;
      graph[a].push(String(b));
    }
    
    return graph;
};