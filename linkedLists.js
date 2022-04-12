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
