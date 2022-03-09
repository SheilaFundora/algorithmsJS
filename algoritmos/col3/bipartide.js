
graph = new Graph();


function bipartide( nodeFirst){
    let i;
    index = graph.arrVertex.indexOf(nodeFirst);

    bipart = [];
    visitado = [];
    cola = [];

    for(i = 0; i < (graph.arrVertex.length + 5); i++ ){
        visitado[i] = false;
    }
    for( var j = 0; j < (graph.arrVertex.length + 5); j++ ){
        bipart[j] = -1;
    }

    bipart[index] = 1;
    visitado[index] = true;
    cola.push(0);

    while ( cola.length > 0 ){
        var aux = cola.pop();

        for ( let vecino of graph.arrEdge[aux] ){
            if( !visitado[vecino] ){
                visitado[vecino] = true;
                cola.push(vecino);

                if( bipart[aux] === 1 ) {
                    bipart[vecino] = 0;
                }else{
                    bipart[vecino] = 1;
                }

            }else{
                if( bipart[vecino] === bipart[aux] ){
                    return "Is not a bipartide graph";
                }
            }
        }
    }
    return "Is a bipartide graph";
}
