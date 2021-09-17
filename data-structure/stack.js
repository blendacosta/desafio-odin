/**
 *  Stacks (Pilhas) => LIFO;
 *  
 *  Interface:
 *  1. Constructor Function
 *      1.1. Storage
 *  2. Methods
 *      2.1. Push(el) => adds an element to the stack
 *      2.2. Pop() => removes and returns the last element of the stack
 *      2.3. Peek() => returns the last element of the stack
 *      2.4. Size() => returns an integer with the size of the stack
 *      2.5. isEmpty()
 *      2.6. isFull()
 */


class Stack {
    //interface
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._items = {};
        this._count = 0;
    }
    //methods
    push(el) {
        if (this._count < this._capacity) {
            this._items[this._count] = el;
            this._count++;
        } else {
            console.log('Stack is full!');
        }
        return this;
    }

    pop() {
        const value = this._items[this._count - 1]; // get the value of last item
        delete this._items[this._count - 1]; // delete this item
        this._count--; // updates the counter

        if (this._count < 0) {
            this._count = 0;
        }
        return value;
    }

    peek() {
        return this._items[this._count - 1];
    }

    size() {
        return this._count;
    }

    isEmpty() {
        return this._count === 0;
    }

    isFull() {
        return this._count === this._capacity;
    }
}