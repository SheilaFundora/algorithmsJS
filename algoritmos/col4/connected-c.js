graph = new Graph();

function connectedComponents(){
    debugger
    var visitado = [];
    var cant = 0;

    for( var j = 0; j < (graph.arrVertex.length + 5); j++ ){
        visitado[j] = false;
    }

    for( var i = 0; i < graph.arrVertex.length; i++ ){
        if( !visitado[i] ){
            cant ++;
            visitado = bfs(i, visitado);
        }
    }
    return cant;
}

function bfs( node, visitado) {
    cola = [];

    cola.push(node);
    visitado[node] = true;

    while( cola.length > 0 ){
        var aux = cola.pop();

        for( let vecino of graph.arrEdge[aux] ){
            if( !visitado[vecino] ){
                visitado[vecino] = true;

                cola.push(vecino);
            }
        }
    }
    return visitado;
}