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
    set(index, val) {
        let intendedNode = this.get(index)
        if (intendedNode) {
            intendedNode.val = val
            return true
        }
        return false
    }
    insert(index,val) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)
        let newnode = new Node(val)
        let beforenode = this.get(index - 1)
        let afternode = beforenode.next
        beforenode.next = newnode
        newnode.prev = beforenode
        afternode.prev = newnode
        newnode.next = afternode
        this.length++
        return true  
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let toRemove = this.get(index)
        let oneLess = this.get(index - 1)
        oneLess.next = toRemove.next
        toRemove.next.prev = oneLess
        toRemove.next = null
        toRemove.prev = null
        this.length--
        return toRemove
    }
}

let dls = new DoublyLinkedList()
dls.push(10)
dls.unshift(5)
dls.push(15)
// console.log(dls.tail)
// console.log(dls.get(1))
// console.log(dls)
console.log(dls.remove(1))