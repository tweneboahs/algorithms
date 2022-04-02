
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left =b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


//DEPTH FIRST VALUES
    //1. SOLVED ITERATIVELLY
function depthFirstValues(root) {
    //what happens if they give us a root of null?
    if(root === null) return [];

    const stack = [root];
    const result = [];

    while (stack.length > 0){
        let current = stack.pop();
        result.push(current.val)

        current.right && stack.push(current.right);
        current.left && stack.push(current.left);
    }
    return result;
}
console.log(breadthFirstValues(a));

//DEPTH FIRST VALUES
    //2. SOLVED RECURSIVELY

function depthFirstValuesRec(root){
    if(root === null) return [];
    
    const leftValues = depthFirstValuesRec(root.left); //[b,d,e] - actually write what you expect the answer to be
    const rightValues = depthFirstValuesRec(root.right);//[c,f]
    return [root.val, ...leftValues, ...rightValues];
}


//BREADTH FIRST VALUES -  cant do recursively bc it doesnt involve a stack

function breadthFirstValues(root){
    if(root === null) return [];

    const queue = [ root ];
    const result = [];

    while( queue.length > 0){
        let current = queue.shift();
        result.push(current.val);

        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
    }
    return result;
}

function treeIncludesBF(root, target){
    if(root === null) return false;

    const queue = [ root ];

    while( queue.length > 0){
        let current = queue.shift();

        if( current.val == target){
            return true;
            break;
        } else {
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }
    }
    return false;
}

console.log(treeIncludesRecursion(a,"c"));

function treeIncludesRecursion(root, target){
    if (root === null) return false;

    if (root.val === target){
        return true;
    }
    return treeIncludesRecursion(root.left, target) || treeIncludesRecursion(root.right, target);
}

function treeSumDepthFirst(root){
    //remember to change the Nodes from letters to numbers if you want to calc properly
    if ( root === null) return 0;

    const stack = [ root ];
    let sum = 0;

    while (stack.length > 0){
        let current = stack.pop();
        sum += current.val;
        current.left && stack.push(current.left);
        current.right && stack.push(current.right);
    }
    
    
    return sum;
    
}