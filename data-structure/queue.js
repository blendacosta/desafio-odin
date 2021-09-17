/**
 *  Queue(Fila) => FIFO
 *  
 *  Interface:
 *  1. Constructor Function
 *      1.1. Storage
 *  2. Methods:
 *      2.1. Enqueue(el) // adds an element to the queue, returns size
 *      2.2. Dequeue() // removes an element from the queue returns the element
 *      2.3. Size() // returns size of the queue as an integer
 *      2.4. isEmpty()
 *      2.5. isFull()
 *      2.6. Peek()
 */

class Queue {
    constructor(capacity) {
        this._capacity = capacity;
        this._items = [];
        this._count = 0;
    }

    enqueue(el) {
        if (this.isFull()) {
            console.log('Queue is full!');
        } else {
            this._items.push(el);
            this._count++;
        }
        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty!');
        } else {
            this._count--;
            return this._items.shift();
        }
    }

    size () {
        return this._count;
    }

    isEmpty() {
        return this._count === 0;
    }

    isFull() {
        return this._count === this._capacity;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('Queue is empty!');
        } else {
            return this._items[0];
        }
    }
}