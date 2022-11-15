// this shall be a simple priority queue 
// used for implementig difkstra
class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({val, priority})
        this.sort()
    }
    dequeue() {
        this.values.shift()
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}