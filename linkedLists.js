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
//_________________________


// 2 -> 8 -> 3-> 7 -> null

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
    return linkedListFindRec(head.next, target);
};
//console.log(linkedListFindRec(a,"A"))


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

function reverseList(head) {
    let current = head;
    let previous = null;

    while (current !== null){
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
} 

console.log(reverseList(a))