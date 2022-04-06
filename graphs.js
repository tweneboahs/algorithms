
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

function hasPathDepthFirstRec (graph, source, target){

}

//UNDIRECTED PATH
//Need to build a helper function that will turn edges array into a node object
const edges =[
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

function buildGraph(edges){
    const graph = {};

    for (let edge of edges){
        const[ a, b ] = edge;
        if (!( a in graph)){
            graph[a] = [];
        }
        if (!( b in graph)){
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

function undirectedPathBreadthFirst(graph, source, target){
    queue = [source];

    while ( source.length > 0){
        current = queue.shift();
        if(current = target){
            return true;
        }
        for(neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
};

console.log(buildGraph(edges))