// here we shall start implementing the linked list

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0 
    }
    // push accepts a value
    // create a new Node with the val
    // if head is not present, we set the head and tail as newNode
    // if head is present
    // set the new node as existing tail.next
    //set the tail to new node
    // increment length by 1
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

    pop() {
        if (!this.head) return undefined
        let current = this.head
        let newtail = current
        while (current.next) {
            newtail = current
            current = current.next
        }
        this.tail = newtail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) return undefined
        let current = this.head
        this.head = current.next
        length--
        if (this.length === 0) {
            this.tail = null
        }
        return current 
    }

    unshift(v) {
        let newnode = new Node(v)
        if (!this.head) {
            this.head = newnode
            this.tail = this.head
        }
        newnode.next = this.head
        this.head = newnode
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }

    set(val, index) {
        let node = this.get(index)
        if (!node) return false
        node.val = val
        return true
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false
        if (index === length) return this.push(val)
        if (index === 0) return this.unshift(val)
        let newnode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = newnode
        newnode.next = temp
    }

    remove(index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.shift(index)
        if (index === this.length - 1) return this.pop(index)
        let prev = this.get(index - 1)
        let removed = prev.next
        prev.next = removed.next
        return removed
    }

    reverse() {
        //this is an important one
        //start with head
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }   
    }
}

let lst = new SinglyLinkedList()
lst.push(5)
console.log(lst)
lst.unshift(2)
console.log(lst)