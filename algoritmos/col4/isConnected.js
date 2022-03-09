graph = new Graph();

function isAConnectedGraph() {
  cont = 1;
  visitado = [];
  cola = [];

  for( var j = 0; j < (graph.arrVertex.length + 5); j++ ){
    visitado[j] = false;
  }

  cola.push(0);
  visitado[0] = true;

  while ( cola.length > 0 ){
    var aux = cola.pop();

    for( let vecino of graph.arrEdge[aux] ){

      if( !visitado[vecino] ){
        visitado[vecino] = true;
        cola.push(vecino);
        cont++;
      }
    }
  }

  if( cont === graph.arrVertex.length ){
    return "Is a connected graph";
  }else{
    return "Is not a connected graph";

  }

}