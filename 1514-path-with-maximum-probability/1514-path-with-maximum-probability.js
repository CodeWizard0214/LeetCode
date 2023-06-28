class Node {
  constructor(index, probability) {
    this.index = index;
    this.probability = probability;
  }
}

class Edge {
  constructor(node, probability) {
    this.node = node;
    this.probability = probability;
  }
}

const maxProbability = (n, edges, succProb, start, end) => {
  const graph = buildGraph(n, edges, succProb);
  
  const visited = new Array(n).fill(false);
  const probabilities = new Array(n).fill(0);
  probabilities[start] = 1;
  
  const queue = [];
  queue.push(new Node(start, 1));
  
  while (queue.length > 0) {
    const { index, probability } = queue.shift();
    visited[index] = true;
    
    for (const edge of graph[index]) {
      const { node, probability: edgeProb } = edge;
      const newProb = probability * edgeProb;
      
      if (newProb > probabilities[node]) {
        probabilities[node] = newProb;
        queue.push(new Node(node, newProb));
      }
    }
  }
  
  return probabilities[end];
};

const buildGraph = (n, edges, succProb) => {
  const graph = new Array(n).fill().map(() => []);
  
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    const prob = succProb[i];
    
    graph[a].push(new Edge(b, prob));
    graph[b].push(new Edge(a, prob));
  }
  
  return graph;
};