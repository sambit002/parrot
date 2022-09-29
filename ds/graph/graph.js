// graphs can be implemented using adcency matrix or adjacency list
// here we shall be using an adjacency list
// it takes up less space and is faster to iterate through the edges
// so let us begin

class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(vertex) {
        if (!this.adjList[vertex])
            this.adjList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjList[vertex1]) return undefined
        if (!this.adjList[vertex2]) return undefined
        this.adjList[vertex1].push(vertex2)
        this.adjList[vertex2].push(vertex1)
        return this.adjList
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjList[vertex1]) {
            this.adjList[vertex1] = this.adjList[vertex1].
                    filter(v => v != vertex2) 
        }
        if (this.adjList[vertex2]) {
            this.adjList[vertex2] = this.adjList[vertex2].
                    filter(v => v != vertex1) 
        }
    }

    removeVertex(vertex) {
        //get the connection list for the given vertex
        // run a while loop till the length of the connection list > 0
        // get each connected node by popping
        //  call remove edge for popped node and the vertex
        // after the while loop has run its course, delete the particular vertex from adj list
        while (this.adjList[vertex].length) {
            let connected = this.adjList[vertex].pop()
            this.removeEdge(vertex, connected)
        }
        delete this.adjList[vertex]
    }
}

let gra = new Graph()
gra.addVertex("a")
gra.addVertex("b")
gra.addVertex("c")
gra.addEdge("a","b")
gra.addEdge("a","c")
gra.removeEdge("a","c")

console.log(gra)
