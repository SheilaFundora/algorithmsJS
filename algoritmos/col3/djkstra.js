class PQ{
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  heapifyInvertido(i){
    if( i % 2 !== 0 && i !== 0){
      if( this.arr[i].peso < parseInt( this.arr[( i -1 ) / 2].peso ) ){
        this.swap(i, ( (i - 1 ) / 2) );
        this.heapifyInvertido( ( i -1 )/ 2 );
      }

    }
    if(  i % 2 === 0 && i !== 0){
      if( this.arr[i].peso < parseInt( this.arr[( i - 2 ) / 2].peso ) ){
        this.swap(i, ( i - 2) / 2 );
        this.heapifyInvertido( ( i - 2) / 2 );
      }
    }
  }
  heapify(i){
    if( ( ( i * 2 ) + 1 ) < this.size){
      if( this.arr[2 * i + 1].peso < this.arr[i].peso){
        this.swap(2 * i + 1, i);
        this.heapify(2 * i + 1);
      }

    }
    if( ( ( i * 2 ) + 2) < this.size){
      if( this.arr[2 * i + 2].peso < this.arr[i].peso){
        this.swap(2 * i + 2, i);
        this.heapify(2 * i + 2);
      }
    }
  }
  extraer(){
    if(this.size > 0){
      var aux = this.arr[0];
      this.swap(0, this.size - 1);
      this.arr.pop(this.arr[this.size - 1], 1);
      this.size -= 1;
      this.heapify(0);
      return  aux;
    }
  }

  swap(i, j){
    var aux = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = aux;
  }
  add( elemento ){
    this.arr.push(elemento);
    this.size += 1;
    this.heapifyInvertido(this.size - 1);
  }
}

graph = new Graph();

class PairDjkstra{
  constructor( node, peso) {
    this.node = node;
    this.peso = peso;
  }
}

function djkstra(inicio, fin) {
  indexInicio = graph.arrVertex.indexOf(inicio);
  indexFin = graph.arrVertex.indexOf(fin);

  visitado = [];
  arrDistancia = [];
  pq = new PQ();


  for( var i = 0; i < (graph.arrVertex.length + 5); i++ ){
    visitado[i] = false;
  }
  for( var j = 0; j < (graph.arrVertex.length + 5); j++ ){
    arrDistancia[j] = 999999;
  }

  visitado[indexInicio] = true;
  arrDistancia[indexInicio] = 0;
  pq.add( new PairDjkstra(indexInicio, 0) );

  while ( pq.size > 0 ){
    var aux = pq.extraer();
    var nodo = aux.node;
    var valor = aux.peso;

    visitado[nodo] = true;


    for (var i = 0; i < graph.arrEdge[nodo].length; i++) {
      var pesoArista = graph.arrEdge[nodo][i].peso;
      var nodoVecino = graph.arrEdge[nodo][i].node ;
      if ( !visitado[nodoVecino] && ( valor + pesoArista ) < arrDistancia[nodoVecino] ) {
        arrDistancia[nodoVecino] = valor + pesoArista;
        pq.add(new PairPrim(graph.arrEdge[nodo][i].node, valor + pesoArista));
      }
    }
  }

  return arrDistancia[indexFin];

}