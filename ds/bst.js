// here we shall be wirting a binary tree
// first we shall be making a node class

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(v) {
        let node = new Node(v)
        if (!this.root) {
            this.root = node
            return this
        } else {
            let current = this.root
            while (true) {
                if (node.val < current.val) {
                    if (!current.left) {
                        current.left = node
                        return this
                    } else {
                        current = current.left
                    }
                } else if (node.val > current.val) {
                    if (!current.right) {
                        current.right = node
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(8)
bst.insert(5)
bst.insert(15)
console.log(bst)



