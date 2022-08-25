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
    find(v) {
        if (!this.root) return false
        let current = this.root
        let found = false
        while (current && !found) {
            if (v < current.val) {
                current = current.left
            } else if (v > current.val) {
                current = current.right
            } else {
                found = true
            }
        }
        return found
    }
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(8)
bst.insert(5)
bst.insert(15)
console.log(bst)
console.log(bst.find(5))
console.log(bst.find(22))



