
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
console.log(graph['a'])

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
    // we dont need a base case in this scenario bc when you iterate over an empty array, which means you have 0 iterations and if you have 0 iterations then you never have to make a recursive call
    for (let neighbor of graph[source]){
        depthFirstPrintRec(graph, neighbor);
    }
};
depthFirstPrint(graph, 'a')