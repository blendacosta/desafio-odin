const Node = require('./node.js');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }

    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null) { // tree empty
            return null;
        } else if (key < node.data) { // move to left subtree
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) { // move to right subtree
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) { // deleting node with no children
                node = null;
                return node;
            }
            // deleting node with one children
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            // deleting node with two children
            // minimum node of the right subtree is stored in aux
            let aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    getRootNode() {
        return this.root;
    }

    search(node, data) {
        // if trees is empty return null
        if (node === null)
            return null;

        // if data is less than node's data move left
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is greater than node's data move right
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data return node
        else
            return node;
    }
}