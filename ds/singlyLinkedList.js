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
}

let lst = new SinglyLinkedList()
lst.push(10)
lst.push(20)
lst.unshift(5)
console.log(lst)
console.log(lst.head.next.next)