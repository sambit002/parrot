// we shall start with the Node class

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newnode = new Node(val)
        if (!this.head) {
            this.head = newnode
            this.tail = this.head
        } else {
            this.tail.next = newnode
            newnode.prev = this.tail
            this.tail = newnode
        } 
        this.length++
        return true
    }
    pop() {
        if (this.length === 0) return undefined
        let popped = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = popped.prev
            this.tail.next = null
            popped.prev = null
        }
        this.length--
        return popped
    }
    shift() {
        if (!this.length) return undefined
        let oldhead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldhead.next
            this.head.prev = null
            oldhead.next = null
        }
        this.length--
        return oldhead
    }
    unshift(val) {
        let node = new Node(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            let oldhead = this.head
            this.head.prev = node
            node.next = oldhead
            this.head = node
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index < Math.floor(this.length / 2)) {
            let counter = 0
            let current = this.head
            while (counter !== index) {
                current = current.next
                counter++
            }
            return current
        } else {
            let counter = this.length - 1
            let current = this.tail
            while (counter !== index) {
                current = current.prev
                counter--
            }
            return current
        }
    }
}

let dls = new DoublyLinkedList()
dls.push(10)
dls.unshift(5)
console.log(dls.tail)
console.log(dls.get(1))