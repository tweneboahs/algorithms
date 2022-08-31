class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
//________________________
//letter values
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> null

//_________________________
//Numeric Values
const e = new Node(2);
const f = new Node(8);
const g = new Node(3);
const h = new Node(7);

e.next = f;
f.next = g;
g.next = h;

// 2 -> 8 -> 3-> 7 -> null

//_________________________

//print Linked List
function printLinkedList(head){
    let current = head;

    //remember for this you have to check the last/present condition so when d.next (equal to null) passes through the while loop it will resolve as false
    while( current !== null){
        console.log(current.val);
        current = current.next;
    }
};

//printLinkedList(a)

function printLinkedListRec(head){
    if (head === null){
        return;
    }
    console.log(head.val);
    printLinkedListRec(head.next);
};

//print Linked List into Array Iterative
function linkedListValues (head){
    let current = head;
    const values =[];
    while (current !== null){
        values.push(current.val);
        current = current.next;
    }
    return values;
}
//console.log(linkedListValues(a))


//print Linked List into Array Recursion
//need to use a helper function in order to solve recursively
function linkedListValuesRec ( head){
    const values = [];
    fillValues(head, values);
    return values;
}
//the reason for the helper function is to not does not have to create multiple arrays but instead adds values to one array
function fillValues (head, values) {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values)
}
//console.log(linkedListValuesRec(a))


//SUM LIST
function sumList(head){
    let sum = 0;
    let current = head;

    while( current !== null){
        sum += current.val;
        current = current.next;
    }
    return sum;
}
//console.log(sumList(e))

function sumListRec(head){
    let sum = 0;
    if (head === null){
        return 0;
    }
    return head.val + sumListRec(head.next);
};
//console.log(sumListRec(e))


//LINKED LIST FIND
function linkedListFind (head,target) {
    let current = head;
    while (current !== null){
        if (current.val === target){
            return true;
        }
        current = current.next;
    }
    return false;
}
//console.log(linkedListFind(a,"P"))

function linkedListFindRec (head, target){
    if (head === null){
        return false
    }
    if (head.val === target){
        return true;
    }
    //need the "return" on the next line bc it will pass the boolean of true or false from the above cases up the call stack
    return linkedListFindRec(head.next, target);
};
//console.log(linkedListFindRec(a,"A"))

//GET NODE VALUE
function getNodeValue(head, index){
    let ourIndex = 0;
    let current = head;

    while (current !== null){
        if (ourIndex === index){
            return current.val;
        }
        current = current.next;
        ourIndex++;
    }
    return null;
};

//console.log(getNodeValue(a, 9))

function getNodeValueRec( head, index ){
    if (head === null){
        return null;
    }
    if (index === 0){
        return head.val;
    }
    return getNodeValueRec(head.next, index-1);
}
//console.log(getNodeValueRec(a, 8))





//INTERSECTION OF LINKED LISTS
var getIntersectionNode = function(headA, headB) {
  if ( headA ===null || headB === null) return null;
  let countA = 0;
  let countB = 0;
  let currA = headA;
  let currB = headB;
  let countDiff = 0;
  
  while (currA !== null){
      countA++;
      currA = currA.next;
  }
  while (currB !== null){
      countB++;
      currB = currB.next;
  }
  
  currA = headA;
  currB = headB;
  
  if (countA !== countB && countA > countB){
      let count = 0;
      countDiff = countA - countB;
      while (count !== countDiff){
          currA = currA.next;
          count++;
      }
  } 
  
  if (countA !== countB && countB > countA){
      let count = 0;
      countDiff = countB - countA;
      while (count !== countDiff){
          currB = currB.next;
          count++;
      }
  } 
  
  while ( currA !== null || currB !==null){
      if (currA === currB){
          return currA;
      }
      currA = currA.next;
      currB = currB.next;
  }
  
  return null;
};


class Node {
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

// const a1 = new Node('a1');
// const a2 = new Node('a2');
// a1.next = a2;


// const b1 = new Node('b1');
// const b2 = new Node('b2');
// const b3 = new Node('b3');
// b1.next = b2;
// b2.next = b3;

// const c1 = new Node('c1');
// const c2 = new Node('c2');
// c1.next = c2;
// //a2.next = c1;
// b3.next = c1;

// const obj = {};
// obj[c1.val] = {count:0, next: c1.next};
// console.log(obj)
// console.log(getIntersectionNode(a1, b1))






//REVERSE LIST
function reverseList(head) {
    let current = head;
    let previous = null;

    while (current !== null){
        // this next must be inside the while loop in order to work!
        let next = current.next;
        //the placement of the lines matter so that each node is presented correctly in the next iteration
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
} 

//console.log(reverseList(a))

function reverseListRec(head, prev = null){
    if ( head === null){
        return prev;
    }
    const next = head.next;
    head.next = prev;
    return reverseListRec(next, head);
}



// ****ZIPPER LISTS****

//Given
//LL1       A -> B -> C -> D -> E -> F
//LL2       Q -> R

//Find the following output list
//OUTPUT    A -> Q -> B -> R -> C -> D -> E -> F

//LINKED LIST 1
const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;
//LINKED LIST 2
const Q = new Node("Q");
const R = new Node("R");
Q.next = R;

function zipperLists(head1, head2){
    //tail is helping build the output of our new list
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while (current1 !== null && current2 !== null){
        if (count % 2 == 0){
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        // we need to move our tail pointer so we are using the last node we put in
        tail = tail.next;
        count++
    }

    // once we're out of the while loop we know that either current1 or current2 has resolved to null so we need to add whichever other list has nodes to the end of our combined list
    if (current1 !== null){
        tail.next = current1;
    }
    if (current2 !== null){
        tail.next = current2;
    }

    return head1;
}

//console.log(zipperLists(A,Q));


const zipperListsRec = (head1, head2) => {
    // need to stop recursion if either head1 or head2 is null - need a base case
    if (head1 === null && head2 ===null){
        return null;
    }
    //what if only one of them is null? - just return the remainder of head2 and vice versa
    //two other base cases
    if(head1 === null) {
        return head2;
    }
    if(head2 === null) {
        return head1;
    }
    // now we need recursive code
    //take 2 nodes at a time - remember that before you override a pointer you need to save it in a variable

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    // so through recursion were always going head1-> head2 return head1-> head2 return head1-> head2...
    head2.next = zipperListsRec(next1, next2);

    return head1;
  
};

//console.log(zipperListsRec(A,Q));


//MERGE LISTS

//My Solution

const mergeListsSarah = (head1, head2) => {
    let tail;
    let current1 = head1;
    let current2 = head2;
    
    if (head1.val <= head2.val){
      tail = head1;
      current1 = head1.next;
    } else {
      tail = head2;
      current2 = head2.next;
    }
    
    while (current1 !== null && current2 !== null){
      if( current1.val <= current2.val){
        // create a link to new node at the end of the merged list
        tail.next = current1;
        //update current1 value since old value has already been linked to merged list
        current1 = current1.next;
      } else {
        // create a link to new node at the end of the merged list
        tail.next = current2;
        //update current1 value since old value has already been linked to merged list
        current2 = current2.next;
      }
      //update tail so it correlates to the end of the merged list
      tail = tail.next;
    }
    
    // if one of the lists is empty tack on the other lists nodes to the end of the merged list
    if(current1 === null){
      tail.next = current2;
    }
    if(current2 === null){
      tail.next = current1;
    }
    
    //based off of whichever head value was smaller we want to start the merged list there based off of the prompt
    if (head1.val<= head2.val){
      return head1;
    } else{
      return head2;
    }
};

//Structy Solution
const mergeLists = (head1, head2) => {
    let dummyHead = new Node(null);
    let tail = dummyHead;
    let current1 = head1;
    let current2 = head2;
    
    while (current1 !== null && current2 !== null) {
      if (current1.val < current2.val) {
        tail.next = current1;
        current1 = current1.next;
      } else {
        tail.next = current2;
        current2 = current2.next;
      }
      tail = tail.next;
    }
    
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    
    return dummyHead.next;
};


const mergeListsRec = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;
  
    if (head1.val < head2.val) {
      const next1 = head1.next;
      head1.next = mergeListsRec(next1, head2);
      return head1;
    } else {
      const next2 = head2.next;
      head2.next = mergeListsRec(head1, next2);
      return head2;
    }
};


//IS UNIVALUE LIST

//Iterative Solution
const isUnivalueList = (head) => {
    const savedVal = head.val;
    current = head;
    
    while ( current !== null){
      if ( current.val !== savedVal){
        return false;
      }
      current = current.next;
    }
    return true;
};


//Recursive Solution
const isUnivalueListRec = (head, prevVal = null) => {
    //represents that you have made it to the end of the list and all nodes have been equal to one another
    if (head === null) return true;
    //make sure that you dont return false just because you are at the start of the list
    if (prevVal === null || prevVal === head.val) {
        //use recursion if the two values are equal
      return isUnivalueListRec(head.next, head.val);
    } else {
        //if prev and head are not equal return false
      return false;
    }
};



//LONGEST STREAK

//Structy only solved iterative solution
const longestStreak = (head) => {
    let maxStreak = 0;
    let currentStreak = 0;
    let currentNode = head;
    let prevVal = null;
    
    while (currentNode !== null) {
      if (currentNode.val === prevVal) {
        currentStreak += 1;
      } else {
        currentStreak = 1;
      }
      
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
      
      prevVal = currentNode.val;
      currentNode = currentNode.next;
    }
    
    return maxStreak;
};


//INSERT NODE
const insertNode = (head, value, index) => {
    if (index === 0) {
      const newHead = new Node(value);
      newHead.next = head;
      return newHead;
    }
    
    let count = 0;
    let current = head;
    while (current !== null) {
      if (count === index - 1) {
        const next = current.next;
        current.next = new Node(value);
        current.next.next = next;
      }
      
      count += 1;
      current = current.next;
    }
    return head;
};


//CREATE LINKED LIST

//Sarahs Solution -> for (let i=0; i<....)

const createLinkedList = (values) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;
    
    for( let i = 0; i < values.length; i++){
      tail.next = new Node(values[i]);
      //this will move the tail pointer to the tail we just created
      tail = tail.next;
    }
    //need to return the value next to the dummy head
    return dummyHead.next;
};


//Structy Solution -> for (let val of values)

const createLinkedList = (values) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;
    for (let val of values) {
      tail.next = new Node(val);
      tail = tail.next;
    }
    return dummyHead.next;
};

//Recursive Solution

const createLinkedListRec = (values, i = 0) => {
    if (i === values.length) return null;
    const head = new Node(values[i]);
    head.next = createLinkedListRec(values, i + 1);
    return head;
};


//ADD LISTS
//Iterative
const addLists = (head1, head2) => {
    const dummyHead = new Node(null);
    //use tail to build out LL output
    let tail = dummyHead;
    //initialize carry to zero
    let carry = 0;
    let current1 = head1;
    let current2 = head2;
    
    //keep iterating through the while loop while i still have things to add up
    while (current1 !== null || current2 !== null || carry === 1){
      //if current pointer is null -> substitute a zero in its place
      const val1 = current1 === null ? 0 : current1.val;
      const val2 = current2 === null ? 0 : current2.val;
      const sum = val1 + val2 + carry;
      carry = sum > 9 ? 1 : 0;
      const digit = sum % 10;
      
      //need to add some logic in case one list is longer than another and the shorter list is pointing at a node of null
      // if you are at a null you can just stay at null so you can keep subsituting zeros for the values
      if( current1 !== null ){
        current1 = current1.next;
      }
      if ( current2 !== null ){
        current2 = current2.next;
      }
      
      tail.next = new Node(digit);
      tail = tail.next;
    }
    return dummyHead.next;
};

//Recursive
//in the recursive version we have the advantage of not needing a dummy head because we can just tack on the recursive call to add a node to our list -> not the case for the iterative solution
const addListsRec = (head1, head2, carry = 0) => {
    //step 1 - make sure that both LL have nodes in them
    // need to add a case for if there is a final carryover of one 
    if( head1 === null && head2 === null && carry ===0){
      return null;
    }
    // want to treat any null nodes as zero
    const val1 = head1 === null ? 0 : head1.val;
    const val2 = head2 === null ? 0 : head2.val;
    
    //if you pass step 1 now we can compute the new node values
    //remember that digit variable should always be a single digit number 
    const sum = val1 + val2 + carry;
    //check if the sum is 10 or greater
    //add carry to the argument parameters
    const nextCarry = sum > 9 ? 1 : 0;// remember that this carry wont be used in this addtion on numbers but will be used in the next iteration
    //from the sum we can derive the digit
    const digit = sum % 10; //remember % is will give you the remainder
    
    //now we can create a new node with this digit
    const resultNode = new Node(digit);
    
    // can only pass head.next to the recursive call if it is not null bc if head = null then head.next doesnt make sense
    const next1 = head1 === null ? null : head1.next;
    const next2 = head2 === null ? null : head2.next;
    
    //want to make sure that we can chain this node to the other output -> recursion 
    resultNode.next = addListsRec(next1, next2, nextCarry);
    
    return resultNode;
    
};


//_____________________________________________________________________________
//_____________________________________________________________________________



//FROM EDUCATIVE


//REVERSE ALTERNATE K ELEMENTS
//Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

//If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

function reverse_alternate_k_elements(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }

  let current = head,
    previous = null;
  while (current !== null) {  // break if we've reached the end of the list
    const last_node_of_previous_part = previous;
    // after reversing the LinkedList 'current' will become the last node of the sub-list
    const last_node_of_sub_list = current;
    let next = null; // will be used to temporarily store the next node

    // reverse 'k' nodes
    let i = 0;
    while (current !== null && i < k) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }

    // connect with the previous part
    if (last_node_of_previous_part !== null) {
      last_node_of_previous_part.next = previous;
    } else {
      head = previous;
    }

    // connect with the next part
    last_node_of_sub_list.next = current;

    // skip 'k' nodes
    i = 0;
    while (current !== null && i < k) {
      previous = current;
      current = current.next;
      i += 1;
    }
  }
  return head;
}