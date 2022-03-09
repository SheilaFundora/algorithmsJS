graph = new Graph();

function regularGraph(){
    var posibleGrado = grado( graph.arrVertex[0] );

    for( var i = 1; i < graph.arrVertex.length; i++ ){
        if( grado(i) !== posibleGrado ){
            return "Is not a regular graph";
        }
    }
    return "Is a regular graph";
}

function grado(nodo) {
    return graph.arrEdge[nodo].length;
}