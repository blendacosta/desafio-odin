const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return (this.head === null);
    }

    getHead() {
        return this.head;
    }

    setHead(newHead) {
        this.head = newHead;
        return this;
    }

    insertAtHead(newData) {
        let node = new Node(newData);
        node.nextElement = this.head;
        this.head = node;

        return this;
    }

    printList() {
        if (this.isEmpty()) {
            console.log("Empty List");
            return false;
        } else {
            let currentNode = this.head;
            while (currentNode !== null) {
                process.stdout.write(`${currentNode.data}`);
                process.stdout.write(" -> ");
                currentNode = currentNode.nextElement;
            }
            console.log("null");
            return true;
        }
    }

    insertAtTail(newData) {
        let node = new Node(newData);
        if (this.isEmpty()) {
            this.head = node;
            return this;
        }

        let currentNode = this.head;
        while (currentNode.nextElement !== null) {
            currentNode = currentNode.nextElement;
        }

        currentNode.nextElement = node;
        return this;
    }
    
    search(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === value) {
                return true; // value found
            }
            currentNode = currentNode.nextElement;
        }
        return false; // value not found
    }

    deleteAtHead() {
        if (this.isEmpty()) {
            return this;
        }
        let currentNode = this.head;
        this.head = currentNode.nextElement;
        return this;
    }

    deleteValue(value) {
        if (this.isEmpty()) {
            return false;
        }
        let currentNode = this.head;
        if (currentNode.data === value) {
            this.head = currentNode.nextElement;
            return true;
        }
        while (currentNode.nextElement !== null) {
            if (currentNode.nextElement.data === value) {
                currentNode.nextElement = currentNode.nextElement.nextElement;
                return true;
            }
            currentNode = currentNode.nextElement;
        }
        return false; // if node was not found
    }

    deleteAtTail() {
        if (this.isEmpty()) {
            return this;
        }

        let currentNode = this.head;
        if (currentNode.nextElement === null) { // linked list has only one element
            this.deleteAtHead();
            return this;
        }
        while (currentNode.nextElement.nextElement !== null) {
            currentNode = currentNode.nextElement;
        }
        currentNode.nextElement = null;
        return this;
    }
}