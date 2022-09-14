// here I shall be writing the code of priority queue
// we shall be using a min binary heap to make the priority queue

class Node {
    constructor(val, pri) {
        this.val = val
        this.pri = pri
    }
}

class PriorityQueue {
    
    constructor() {
        this.vals = []
    }

    enqueue(val, pri) {
        let node = new Node(val, pri)
        this.vals.push(node)
        this.bubbleUp()
    }

    bubbleUp() {
        let id = this.vals.length - 1
        const elem = this.vals[id]
        while (id > 0) {
            let parentId = Math.floor((id - 1) / 2)
            let parent = this.vals[parentId]
            if (elem.pri <= parent.pri) break
            this.vals[id] = parent
            id = parentId
        }
    }

    dequeue() {
        const min = this.vals[0]
        const end = this.vals.pop()
        if (this.vals.length > 0) {
            this.vals[0] = end
            this.sinkDown()
        }
        return min
    }

    sinkDown() {
        let id = 0
        const len = this.vals.length
        const elem = this.vals[0]
        while (true) {
            let leftId = 2 * id + 1
            let rightId = 2 * id + 2
            let leftChild, rightChild
            let swap = null
            if (leftId < len) {
                leftChild = this.vals[leftId]
                if (leftChild.pri < elem.pri) {
                    swap = leftId
                }
            }
            if (rightId < len) {
                rightChild = this.vals[rightId]
                if (
                    (swap === null && rightChild.pri < elem.pri) ||
                    (swap !== null && rightChild.pri < leftChild.pri) 
                ) {
                    swap = rightId
                }
            }
            if(swap === null) break
            this.vals[id] = this.vals[swap]
            this.vals[swap] = elem
            id = swap
        }
    }
}

