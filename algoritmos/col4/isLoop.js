graph = new Graph();

function isLoop(){
    cicloVisitado = [];
    cola = [];

    for( var j = 0; j < (graph.arrVertex.length + 5); j++ ){
        cicloVisitado[j] = -1;
    }
    cola.push(0);
    cicloVisitado[0] = -2;

    while ( cola.length > 0 ) {
        var aux = cola.pop();

        for ( let vecino of graph.arrEdge[aux] ){
            if( cicloVisitado[aux] === vecino ){
                continue
            }

            if ( cicloVisitado[vecino] === -1) {
                cicloVisitado[vecino] = aux;
                cola.push(vecino);
            }else{
                return "Is a loop graph"
            }
        }
    }
    return "Is not a loop graph"
}

