//STANDARD QUEUE
class Queue {
    constructor(){
        this.collection = [];
    }

    print(){
        return this.collection
    }

    enqueue(value){
        this.collection.push(value);
    }

    dequeue(){
        this.collection.shift();
    }

    front(){
        return this.collection[0];
    }

    size(){
        return this.collection.length;
    }

    isEmpty(){
        return (this.collection.length == 0);
    }
}

// const myQueue = new Queue
// myQueue.enqueue(6)
// myQueue.enqueue(099)
// myQueue.enqueue(6282)
// myQueue.enqueue(8182)
// myQueue.dequeue()
// console.log(myQueue.size())
// console.log(myQueue.front())
// console.log(myQueue.isEmpty())


//PRIORITY QUEUE
class PriorityQueue {
    constructor(){
        this.collection = [];
    }

    print(){
        return this.collection
    }

    enqueue(value){
        if ( this.collection.length === 0){
            this.collection.push(value);
        } else {
            let elementAdded = false;
            for ( let i = 0; i < this.collection.length; i++){
                if (value[1] < this.collection[i][1]){
                    elementAdded = true;
                    break;
                }
            }
            if (elementAdded == false){
                this.collection.push(value);
            }
        }
        
    }

    dequeue(){
        this.collection.shift();
    }

    front(){
        return this.collection[0];
    }

    size(){
        return this.collection.length;
    }

    isEmpty(){
        return (this.collection.length == 0);
    }
}

const myPQ = new PriorityQueue
myPQ.enqueue(['kenke', 8])
myPQ.enqueue(['armin', 4])
myPQ.enqueue(['cole', 10])
myPQ.enqueue(['sarah', 2])
myPQ.enqueue(['harriet', 8])
myPQ.enqueue(['ruth', 6])
console.log(myPQ.print())