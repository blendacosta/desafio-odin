/**
 *  Stacks (Pilhas) >> LIFO;
 */

class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getTop() {
        if (this.isEmpty())
            return null;
        return this.top;
    }

    push(element) {
        this.items.push(element);
        this.top = element;
    }

    pop() {
        if (!this.isEmpty()) {
            if (this.size() === 1) {
                this.top = null;
                return this.items.pop();
            } else {
                this.top = this.items[this.size() - 2];
                return this.items.pop();
            }
        } else {
            return null;
        }
    }
}