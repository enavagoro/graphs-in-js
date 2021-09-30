class Graph { //Representación de lista Adyancete
    constructor(isDirected = false) {
      this.isDirected = isDirected; 
      this.vertices = []; //Vertices 
      this.adjList = {}; //Vertices Adyacentes
    } 
    
    addVertex(v) {
        if (!this.vertices.includes(v)) { // Lo agrega solo si no existe
          this.vertices.push(v); // Lo agrega a vertices
          this.adjList[v] = []; // Le asigna un arreglo de vertices adyacentes vacios.
        }
    }

    addEdge(v, w) { //Recibe dos vertices como parámetros.
        if (!this.adjList[v]) { // verifica si los vertices existen en el grafo
          this.addVertex(v); //sino los añade
        }
        if (!this.adjList[w]) {
           this.addVertex(w);
        }

        this.adjList[v].push(w); // Como es directa el nodo V apunta a W

        if (!this.isDirected) { 
          this.adjList[w].push(v); //Si no es directa el nodo W apunta a V de vuelta
        }
   }

   getVertices() {
        return this.vertices;
   }

    getAdjList() {
        return this.adjList;
    }
}


const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // Creamos un array con los vertices que queremos añadir
for (let i = 0; i < myVertices.length; i++) { //Pusheamos los vertices 1 por 1
  graph.addVertex(myVertices[i]);
}

   graph.addEdge('A', 'B'); // Añadimos Bordes entre grafos
   graph.addEdge('A', 'C');
   graph.addEdge('A', 'D');
   graph.addEdge('C', 'D');
   graph.addEdge('C', 'G');
   graph.addEdge('D', 'G');
   graph.addEdge('D', 'H');
   graph.addEdge('B', 'E');
   graph.addEdge('B', 'F');
   graph.addEdge('E', 'I');

   console.log(graph.getAdjList());