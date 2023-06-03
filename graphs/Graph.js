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
    dfsRecursive(start) {
        let results = [];
        let visited = {};

        let adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            // Check if vertex exists
            if (!vertex) return null;
            // mark the vertex visited
            visited[vertex] = true;
            // push to results array
            results.push(vertex);

            //Go deep for all neighbours until deadend and then callback same dfs
            adjacencyList[vertex].forEach(element => {
                if (!visited[element]) {
                    return dfs(element);
                }
            });
        })(start)

        return results;
    }

    dfsIterative(start) {
        //maintain a stack with initialised as start node
        let stack = [start];
        let results = [];
        let visited = {};

        let currentVertex;
        visited[start] = true;
        while (stack.length) {
            //remove from stack & push to results
            currentVertex = stack.pop();//removes last
            results.push(currentVertex);

            // go deep for all neighbours
            this.adjacencyList[currentVertex].forEach(element => {
                // if not visited
                // mark visit
                // push to results
                if (!visited[element]) {
                    visited[element] = true;
                    stack.push(element);
                }
            });
        }
        return results;
    }

    bfsIterative(start) {
        //maintain a queue with initialised as start node
        let queue = [start];
        let results = [];
        let visited = {};

        let currentVertex;
        visited[start] = true;
        while (queue.length) {
            //remove from queue & push to results
            currentVertex = queue.shift();//removes 1st element
            results.push(currentVertex);

            // go deep for all neighbours
            this.adjacencyList[currentVertex].forEach(element => {
                // if not visited
                // mark visit
                // push to results
                if (!visited[element]) {
                    visited[element] = true;
                    queue.push(element);
                }
            });
        }
        return results;
    }
}

// let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
g.dfsRecursive("A")
g.dfsIterative("A")
g.bfsIterative("A")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F


