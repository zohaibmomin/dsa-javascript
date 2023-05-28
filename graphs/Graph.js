class Graph {
    constructor() {
        this.adjacencyList = {};// use map instead of array
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        //undirected graph
        //if directed then only one way v1-> v2 or v2-> v1
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {

        //filter javascript function 
        // remove vertex from the array
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        )
    }

    removeVertex(vertex) {
        //lloop over all connections of vertex
        //remove that edge
        this.adjacencyList[vertex].forEach(element => {
            this.removeEdge(vertex, element)
        });

        /* 
        alternative
        while(this.adjacencyList[vertex].length){
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacencyVertex);
        } 
        */
        delete this.adjacencyList[vertex];
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");


