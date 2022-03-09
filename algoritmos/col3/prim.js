class PairPrim{
  constructor( node, peso) {
    this.node = node;
    this.peso = peso;
  }
}

function prim(primerNodo) {
  sum = 0;
  index = graph.arrVertex.indexOf(primerNodo);
  visitado = [];
  arr = [];
  pq = new PQ();
  var nodo = 0;
  var valor = 0;
  for( var i = 0; i < (graph.arrVertex.length + 5); i++ ){
    visitado[i] = false;
  }

  visitado[index] = true;
  arr.push(primerNodo);
  if( graph.arrEdge[index].length === 0 ){
    return primerNodo;
  }else{
    for( var i = 0; i < graph.arrEdge[index].length; i++ ){
      nodo = graph.arrEdge[index][i].node;
      valor = graph.arrEdge[index][i].peso;
      pq.add( new PairPrim ( nodo, valor ) );
    }
    while( pq.size > 0 ) {
      var aux = pq.extraer();
      nodo = aux.node;
      valor = aux.peso;
      if ( !visitado[nodo] ) {
        visitado[nodo] = true;
        arr.push(graph.arrVertex[nodo]);
        sum += valor;
      }

      for (var i = 0; i < graph.arrEdge[nodo].length; i++) {
        if ( !visitado[graph.arrEdge[nodo][i].node] ) {
          pq.add(new PairPrim(graph.arrEdge[nodo][i].node, graph.arrEdge[nodo][i].peso));
        }
      }
    }
    return "<br>orden: " + arr + " <br>suma: "  + sum;
  }

}

graph = new Graph();


