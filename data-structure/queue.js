/**
 *  Queue(Fila) >> FIFO
 */

class Queue {
    constructor() {
        this.items = [];
        this.start = null;
        this.end = null;
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getStart() {
        if (!this.isEmpty()) {
            return this.start;
        } else {
            return null;
        }
    }

    enqueue(element) {
        const el = this.items.push(element);
        this.end = el;
        if (this.size() === 1) {
            this.start = el;
        }
        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        } else {
            if (this.size() === 1) {
                this.start = null;
                this.end = null;
                return this.items.shift();
            } else {
                this.start = this.items[this.size() - 2];
                return this.items.shift();
            }
        }
    }
}