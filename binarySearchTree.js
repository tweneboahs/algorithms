
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
console.log(depthFirstValuesRec(a));

//DEPTH FIRST VALUES
    //2. SOLVED RECURSIVELY

function depthFirstValuesRec(root){
    if(root === null) return [];
    
    const leftValues = depthFirstValuesRec(root.left); //[b,d,e] - actually write what you expect the answer to be
    const rightValues = depthFirstValuesRec(root.right);//[c,f]
    return [root.val, ...leftValues, ...rightValues];
}