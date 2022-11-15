//here we shall write a weighted graph
class WeightedGraph {
    
    constructor() {
        this.adjLst = {}
    }
    
    addVertex(vertex) {
        if(!this.adjLst[vertex]) this.adjLst[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjLst[vertex1].push({node: vertex2, weight})
        this.adjLst[vertex2].push({node: vertex1, weight})
    }
}

const graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", "B", 5)
graph.addEdge("A", "C", 7)
graph.addEdge("B", "C", 9)
console.log("***",graph.adjLst)