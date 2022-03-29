// //creating a stack

// const Stack = function () {
//     this.count = 0;
//     this.storage = {};

//     //Adds a value onto the end of the stack
//     this.push = function(value) {
//         this.storage[this.count] = value;
//         this.count ++;
//     }

//     //Removes and returns the value at the end of the stack
//     this.pop = function() {
//         if ( this.count === 0) {
//             return undefined;
//         }
//         this.count--;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     this.size = function () {
//         return this.count;
//     }

//     this.peek = function() {
//         return this.storage[this.count-1]
//     }
// }

// const myStack = new Stack();

// myStack.push(1)
// myStack.push(2)
// myStack.push(300)
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.peek())


//finding the minimum in the stack

const MinStack = function (){
    this.count = 0;
    this.storage = {};
    this.minCount = 0;
    this.minValue = Math.min(this.storage);

    this.push = function (value) {
        this.storage[this.count] = value;
        // if (this.count === 0){
        //     this.minValue = value;
        // } else {
        //     let newMin = Math.min(this.minValue, this.storage[this.count]);
        //     delete this.minValue;
        //     this.minValue = newMin;
        // }
        this.count++;
        
    }

    this.pop = function () {
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.peek = function() {
        if (this.count === 0){
            return undefined;
        }
        return this.storage[this.count-1];
    }

    this.size = function() {
        return this.count;
    }

}

const myMinStack = new MinStack();

myMinStack.push(10)
myMinStack.push(9)
myMinStack.push(188)
myMinStack.push(-2910)
myMinStack.push(-9)
myMinStack.push(1288)
console.log(myMinStack.minValue)
