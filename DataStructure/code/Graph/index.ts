import { Graph } from "./Graph";

const graph = new Graph();
const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
arr.forEach((item) => {
  graph.addVertex(item);
});

graph.addEdges("a", "b");
graph.addEdges("a", "c");
graph.addEdges("a", "d");
graph.addEdges("b", "e");
graph.addEdges("c", "g");
graph.addEdges("d", "h");
graph.addEdges("e", "f");
graph.addEdges("f", "i");

console.log(graph.toString());


// console.log(graph.BFS(graph.vertex[0]));
// console.log(graph.BFS(graph.vertex[1]));

console.log(graph.DFS(graph.vertex[0]))
console.log(graph.DFS(graph.vertex[1]))
