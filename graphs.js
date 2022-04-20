
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