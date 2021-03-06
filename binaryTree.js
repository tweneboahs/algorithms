
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
    // this return will give back boolean data
    //false || false => false
    //false || true => true
    //true || true => true
    return treeIncludesRecursion(root.left, target) || treeIncludesRecursion(root.right, target);
}

function treeSumDepthFirst(root){
    //remember to change the Node values from letters to numbers if you want to calc properly
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

const treeSumRec = (root) =>{
    //remember to change the Node values from letters to numbers if you want to calc properly
    if (root === null){
        return 0
    }
    return root.val + treeSumRec(root.left) + treeSumRec(root.right)
};

const maxPathSumRec = root => {
    //remember to change the Node values from letters to numbers if you want to calc properly
    //if you only have one child we need to add this requirement so code doesnt break
    if (root === null){
        return -Infinity;
    }
    //condition of a leaf
    if(root.left === null && root.right === null){
        return root.val;
    }
    const maxChildPathSum = Math.max(maxPathSumRec(root.left), maxPathSumRec(root.right));
    return root.val + maxChildPathSum;
};



//PATHFINDER
    //RECURSIVE SOLUTION ONLY

const pathFinderRec1 = (root, target) => {
    //start with base cases
    // whenever you have a binary tree case you are more likely going to check whether the input is null
    if ( rooot === null ) return null;
    // think like if someone gave you a single array that just included the target then you wld just return the target
    if (root.val ===target) return [root.val];
    
    //for recursive code you know you're going to make to calls to your left and right children
    const leftPath = pathFinderRec1(root.left, target);
    const rightPath = pathFinderRec1(root.right, target);
    
    //need to check which, or any, of them are not null
    if( leftPath !== null){
      //include everything in the left path as well as yourself
      return [root.val, ...leftPath] //using the spread operator can give you a n^2 time so in the next try lets push this value to the array in the root.val
    }
    if( rightPath !== null){
      //include everything in the left path as well as yourself
      return [root.val, ...rightPath]//using the spread operator can give you a n^2 time so in the next try lets push this value to the array in the root.val
    }
    
    // if we haven't found the target in either subtree then it must not be there and then we can return false
    return null;
};


//heres another recursive function that runs faster bc we dont have to worry about the spread operator having to create an array and slow down our time
const pathFinderRec2 = (root, target) => {
    const result = pathFinderHelperRec2(root, target);
    if (result === null) {
      return null;
    } else {
      return result.reverse();
    }
};
  

//need a helper function in order to produce the array we want - the main function will reverse the array since we will have everything in the opposite order
const pathFinderHelperRec2 = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [ root.val ];
    
    const leftPath = pathFinderHelperRec2(root.left, target);
    if (leftPath !== null) {
      leftPath.push(root.val);
      return leftPath;
    }
    
    const rightPath = pathFinderHelperRec2(root.right, target);
    if (rightPath !== null) {
      rightPath.push(root.val);
      return rightPath;
    }
    
    return null;
};


//TREE VALUE COUNT

//ITERATIVE

const treeValueCount = (root, target) => {
    if (root === null) return 0;
    
    let count = 0;
    const stack = [ root ];
    while (stack.length > 0) {
      const current = stack.pop();
      if (current.val === target) count += 1;
      
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
    
    return count;
};

//RECURSIVE

const treeValueCountRec = (root, target) => {
    if (root === null) return 0;
    const match = root.val === target ? 1 : 0;
    return match + treeValueCountRec(root.left, target) + treeValueCountRec(root.right, target);
};




//MINIMUM DEPTH OF A BINARY TREE - LEETCODE

var minDepth = function(root) {
  if (root === null) return 0;

  const queue = [[root, 1]];
  
  while ( queue.length > 0){
      const [curr, depth] = queue.shift();
      if (curr.left === null && curr.right === null){
          return depth;
      }
      
      curr.left && queue.push([curr.left, depth+1]);
      curr.right && queue.push([curr.right, depth+1]);
  }

};




//HOW HIGH

//RECURSIVE SOLUTION ONLY

const howHigh = (node) => {
    if (node === null) return -1;
  
    const leftHeight = howHigh(node.left);
    const rightHeight = howHigh(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
};



//BOTTOM RIGHT VALUE

//BREADTH FIRST SOLUTION ONLY

const bottomRightValue = (root) => {
    // todo
    const queue = [ root ];
    let current;
     while (queue.length > 0){
      current = queue.shift();
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    return current.val;
};




//ALL TREE PATHS
//RECURSIVE SOLUTION ONLY

const allTreePaths = (root) => {
    if (root === null) return [ ];
    
    if (root.left === null && root.right === null) return [ [root.val] ]
    
    const paths = [];
    
    const leftSubPaths = allTreePaths(root.left);
    for (let subPath of leftSubPaths) {
      paths.push([ root.val, ...subPath ]);
    }
    
    const rightSubPaths = allTreePaths(root.right);
    for (let subPath of rightSubPaths) {
      paths.push([ root.val, ...subPath ]);
    }
    
    return paths;
};



//TREE LEVELS

//BF SOLN

const treeLevels = (root) => {
    if (root === null) return [];
  
    const levels = [];
    const queue = [{ node: root, levelNum: 0 }];
    while (queue.length > 0) {
      const { node, levelNum } = queue.shift();
  
      if (levels.length === levelNum) {
        levels[levelNum] = [node.val];
      } else {
        levels[levelNum].push(node.val);
      }
  
      if (node.left !== null) queue.push({ node: node.left, levelNum: levelNum + 1 });
      if (node.right !== null) queue.push({ node: node.right, levelNum: levelNum + 1 });
    }
  
    return levels;
};



//RECURSIVE

const treeLevels = (root) => {
    const levels = [];
    _treeLevels(root, levels, 0);
    return levels;
  };
  
  const _treeLevels = (root, levels, levelNum) => {
    if (root === null) return;
  
    if (levels.length === levelNum) {
      levels[levelNum] = [root.val];
    } else {
      levels[levelNum].push(root.val);
    }
  
    _treeLevels(root.left, levels, levelNum + 1);
    _treeLevels(root.right, levels, levelNum + 1);
};





//DEEPEST LEAVES SUM  - LEETCODE
var deepestLeavesSum = function(root) {
  if ( root === null ) return null;
  
  let maxDepth = 0;
  const collection = [[root,0]];
  const stack = [[root, 0]]
  
  while (stack.length >0){
      const [curr, depth] = stack.pop();
      maxDepth = Math.max(depth, maxDepth);
      curr.left && stack.push([curr.left, depth + 1]);
      curr.right && stack.push([curr.right, depth + 1]);
      curr.left && collection.push([curr.left, depth + 1]);
      curr.right && collection.push([curr.right, depth + 1]);
  }
  
  let sum = 0;
  for ( let i = 0; i < collection.length; i++){
      const [node, depth] = collection[i];
      if ( depth === maxDepth ){
          sum += node.val;
      }
  }
  return sum;
};





//LEVEL AVERAGES
//USING RECURSION AND HELPER FUNCTIONS
const levelAverages = (root) => {
    //the fill levels function is going to mutate the levels array
    const levels = [];
    fillLevels(root, levels, 0);
    const avgs = [];
    for (let level of levels){
      avgs.push(getAvg(level));
    }
    return avgs;
};
  
//write a helper function that will find every level of the tree
//so we can already have the values in the subarrays
const fillLevels = (root, levels, levelNum) => {
    if ( root ===null) return;
    
    if ( levels.length === levelNum){
      levels.push([root.val]);
    } else {
      levels[levelNum].push(root.val);
    }
    
    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
};
  
//write another helper function to create averages
const getAvg = (array) =>{
    let sum = 0;
    for ( let num of array ){
      sum += num;
    }
    return (sum / array.length);
};





//LEAF LIST
//ITERATIVE
const leafList = (root) => {
    // todo
    if ( root === null ) return [];
    const leaves = [];
    const stack = [ root ];
    
    while ( stack.length > 0 ){
      const current = stack.pop();
      current.right !== null && stack.push(current.right);
      current.left !== null && stack.push(current.left);
      if (current.left ===null && current.right === null){
        leaves.push(current.val)
      }
    }
    return leaves;
};



//RECURSIVE WITH HELPER FUNCTION
const leafList = (root) => {
    const leaves = [];
    fillLeaves(root, leaves);
    return leaves;
};
  
const fillLeaves = (root, leaves) => {
    if (root === null) return;
    if (root.left === null && root.right === null) leaves.push(root.val);
    fillLeaves(root.left, leaves);
    fillLeaves(root.right, leaves);
};