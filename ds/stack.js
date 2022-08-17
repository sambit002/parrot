// here we shall use a stack class
// and a node class just like singly linked list

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        let node = new Node(val)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            let tmp = this.first
            this.first = node
            this.first.next = tmp
        }
        return this.size++
    }
    pop() {
        if (!this.first) return undefined
        if (this.first === this.last) {
            this.last = null
        }
        let tmp = this.first
        this.first = this.first.next
        this.length--
        return tmp.val
    }
}

let st = new Stack()
st.push("first")
st.push("second")
st.push("third")
console.log(st.pop())