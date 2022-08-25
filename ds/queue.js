// here I shall be implementing a queue
// a queue only has two operations
// we can add and remove elements from a queue

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        let node = new Node(val)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        return this.size++
    }
    dequeue() {
        let temp = this.first
        if (this.first === this.last) {
            this.last = null
        } else {
            this.first = temp.next
        }
        this.size--
        return temp.val
    }
}
