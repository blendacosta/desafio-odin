class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        // In order to add edge we get the adjacency list 
        // of the corresponding src vertex and add the dest 
        // to the adjacency list.
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        // get all the vertices
        let get_keys = this.AdjList.keys();

        // iterate over the vertices
        for (let i of get_keys) {
            // great the corresponding adjacency list
            // for the vertex
            let get_values = this.AdjList.get(i);
            let conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for (let j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }
}

// Using the above implemented graph class
let g = new Graph(6);
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
 
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
console.log(g)