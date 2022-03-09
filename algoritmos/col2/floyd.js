class Pair{
    constructor( node, peso) {
        this.node = node;
        this.peso = peso;
    }
}

graph = new Graph();
matrix =  [];

function existEdgeFloyd(v1,v2) {
    var indexV1 = graph.arrVertex.indexOf(v1);
    var indexV2 = graph.arrVertex.indexOf(v2);

    var exist = false;
    if (graph.existVertex(v1) && graph.existVertex(v2)) {
        for( var i = 0; i < graph.arrEdge[indexV1].length; i ++){
            if( graph.arrEdge[indexV1].length > 0 ){
                if( graph.arrEdge[indexV1][i].node === indexV2 ){
                    return true;
                }
            }
        }
        for( var j = 0; j < graph.arrEdge[indexV2].length; j ++){
            if( graph.arrEdge[indexV2].length > 0 ){
                if( graph.arrEdge[indexV2][j].node === indexV1 ) {
                    return true;
                }
            }
        }
    }
    return false;
}

function  addVertextPair(v){
    if (!graph.existVertex(v)) {
        graph.arrVertex.push(v);
        graph.arrEdge.push([]);
        matrix.push([]);
    }
}

function  addEdgePair(v1, v2, peso) {
    var indexV1 = graph.arrVertex.indexOf(v1);
    var indexV2 = graph.arrVertex.indexOf(v2);

    if (graph.existVertex(v1) && graph.existVertex(v2)) {
        matrix[indexV2][indexV1] = peso;
        matrix[indexV1][indexV2] = peso;
        graph.arrEdge[indexV1].push(new Pair(indexV2, peso));
        graph.arrEdge[indexV2].push(new Pair(indexV1, peso));
    }
}

function init(){
    for( var i = 0; i < matrix.length; i++){
        for( var j = 0; j < matrix.length; j++){
            if( i === j ){
                matrix[ i ][ j ] = 0;
            }else{
                if(  matrix[i][j] === 0 ){
                    matrix[ i ][ j ] = 99999999;
                }
            }
        }
    }
    return matrix
}


function floyd() {
    matrix = init();

    for( var i = 0; i < matrix.length; i ++){
        for( var j = 0; j < matrix.length; j++){
            for( var k = 0; k < matrix.length; k++){
                matrix[ i ][ j ] = parseInt(Math.min( matrix[ i ][ j ], matrix[ i ][ k ] + matrix[ j ][ k ] ));
            }
        }
    }
    return matrix;
}


/*funciones para el fronten*/
function addListVFloyd() {
    closeSmsErrorFloyd();
    inpLVDFS = document.getElementById("listVertexToFloyd");
    errorFloyd = document.getElementById("errorInpFloyd");

    var arrListV =inpLVDFS.value;

    if( arrListV === "" ){
       errorFloyd.innerText = "Empty entry is not allowed";
       errorFloyd.style.visibility = "visible";
       errorFloyd.style.color = "#910504";
    }else{
        arrListV = arrListV.trim();
        if( arrListV.includes(" ") ){
            arrListV = arrListV.split(" ");
        }
        if( arrListV.includes(",") ){
            arrListV = arrListV.split(",");
        }

        for( var i = 0; i < arrListV.length;i++ ){
            if( arrListV[i] === "," ){
                arrListV.splice(i, 1);
            }
            if( arrListV[i] === "" ){
                arrListV.splice(i, 1);
                i -= 1;
            }
        }

        for( var j = 0; j < arrListV.length;j++ ){
            addVertextPair( arrListV[j] );
        }
       errorFloyd.innerText = "The list of vertexes has be added successfully";
       errorFloyd.style.visibility = "visible";
       errorFloyd.style.color = "green";
    }
   inpLVDFS.value = "";

}

function addEdgeFloyd() {
    closeSmsErrorFloyd();
    inpPairFloyd = document.getElementById("edgesFloyd");
    errorPairFloyd = document.getElementById("errorInpEdgesFloyd");
    var arrVFloyd =inpPairFloyd.value;

    if( arrVFloyd === "" ){
        errorPairFloyd.innerText = "Empty entry is not allowed";
        errorPairFloyd.style.color = "#910504";
        errorPairFloyd.style.visibility = "visible";
    }else{
        arrVFloyd = arrVFloyd.trim();
        if( arrVFloyd.includes(" ") ){
            arrVFloyd = arrVFloyd.split(" ");
        }
        if( arrVFloyd.includes(",") ){
            arrVFloyd = arrVFloyd.split(",");
        }

        for( var i = 0; i < arrVFloyd.length;i++ ){
            if( arrVFloyd[i] === "," ){
                arrVFloyd.splice(i, 1);
            }
            if( arrVFloyd[i] === "" ){
                arrVFloyd.splice(i, 1);
                i -= 1;
            }
        }
        if( arrVFloyd.length === 3 ){
            var v1 = arrVFloyd[0];
            var v2 = arrVFloyd[1];
            var peso = arrVFloyd[2];

            if( !isNaN(peso) ){
                peso = Number(peso);
                if( graph.existVertex( v1 ) && graph.existVertex( v2 ) ) {
                    if( existEdgeFloyd( v1, v2 ) ){
                        errorPairFloyd.innerText = "The edge already exist";
                        errorPairFloyd.style.color = "#910504";
                        errorPairFloyd.style.visibility = "visible";
                    }else{
                        addEdgePair( v1, v2, peso );
                        errorPairFloyd.innerText = "Has been added successfully";
                        errorPairFloyd.style.visibility = "visible";
                        errorPairFloyd.style.color = "green";
                    }
                }else{
                    if (!graph.existVertex(v1) && !graph.existVertex(v2)) {
                        errorPairFloyd.innerText = "The vertexes isn't found";
                        errorPairFloyd.style.visibility = "visible";
                        errorPairFloyd.style.color = "#910504";
                    }else{
                        if (!graph.existVertex(v1)) {
                            errorPairFloyd.innerText = "The first vertex isn't found";
                            errorPairFloyd.style.visibility = "visible";
                            errorPairFloyd.style.color = "#910504";
                        }
                        if (!graph.existVertex(v2)) {
                            errorPairFloyd.innerText = "The second vertex isn't found";
                            errorPairFloyd.style.color = "#910504";
                            errorPairFloyd.style.visibility = "visible";
                        }
                    }
                }
            }
            else{
                errorPairFloyd.innerText = "The third element isn't a number";
                errorPairFloyd.style.color = "#910504";
                errorPairFloyd.style.visibility = "visible";
            }
        }else{
            errorPairFloyd.innerText = "Only three numbers please";
            errorPairFloyd.style.visibility = "visible";
        }
       inpPairFloyd.value = "";
    }
}

function showListsFloyd() {
    debugger
    closeSmsErrorFloyd();
    pListV = document.getElementById("listVFloyd");
    listEdges = document.getElementById("listEdgeFloyd");
    tittleFloyd = document.getElementById("tittleLEdgesFloyd");

    tittleFloyd.style.display = "none";


    if( graph.numberVertex() === 0 ){
        pListV.innerHTML = "Don't exist any vertex";
        pListV.style.display = "block";


    }else{
        pListV.innerHTML = "<h3 style='display: inline'>List of vertexes: </h3>" + graph.arrVertex;
        pListV.style.display = "block";
    }

    if( graph.numberEdge() === 0 ){
        listEdges.innerText = "Don't exist any edge";
        listEdges.style.display = "block";
    }else{
        tittleFloyd.style.display = "block";

        listEdges.style.columnCount = "2";
        listEdges.style.width = "60%";
        listEdges.innerText = "";
        var listOldEdges = document.getElementById("ulLisEdgesFloyd");
        if( listOldEdges != null ){
            listOldEdges.remove();
        }
        for( var i = 0; i < graph.numberVertex(); i++ ){
            var listEdge = document.createElement('li');
            var valor = 0;
            for( var j = 0; j < graph.arrEdge[i].length; j++ ){
                listEdge.innerText += " node: " + graph.arrEdge[i][j].node + " peso: " + graph.arrEdge[i][j].peso ;
            }
            listEdges.appendChild(listEdge);
        }
        listEdges.style.display = "block";
    }
}

function FloydHTMLFloyd() {
    debugger
    closeSmsErrorFloyd();
    answerFloyd = document.getElementById("listFloyd");

    if( graph.numberVertex() === 0 ){
        answerFloyd.innerText = "Don't exist any vertex";
        answerFloyd.style.display = "block";
        answerFloyd.style.visibility = "visible";
    }else{
        if( graph.numberEdge() === 0){
            answerFloyd.innerText = "Don't exist any edge";
            answerFloyd.style.visibility = "visible";
            answerFloyd.style.display = "block";
        }else{

            for( var i = 0; i < graph.arrVertex.length; i ++ ){
                for( var j = 0; j < graph.arrVertex.length; j ++ ){
                    if( isNaN(matrix[i][j]) ){
                        matrix[i][j] = 0;
                    }
                    if( matrix[i][j] === undefined){
                        matrix[i][j] = 0;
                    }
                }
            }
            answerFloyd.innerHTML = "<h3 style='display: inline'>Floyd Matrix: </h3>" + floyd() ;
            answerFloyd.style.visibility = "visible";
            answerFloyd.style.display = "block";
        }
    }
}

function closeAllFloyd() {
    debugger
    if( typeof inpLVDFS !== "undefined"){
       inpLVDFS.value = "";
    }
    if( typeof errorFloyd !== "undefined"){
       errorFloyd.style.visibility = "hidden";
    }

    if( typeof inpPairFloyd !== "undefined"){
       inpPairFloyd.value = "";
    }
    if( typeof errorPairFloyd !== "undefined"){
        errorPairFloyd.style.visibility = "hidden";
    }

    if( typeof  answerFloyd !== "undefined"){
        answerFloyd.style.display = "none";
    }

    graph.arrVertex.length = 0;
    graph.arrEdge.length = 0;
    pListV.innerHTML = "";
    listEdges.innerText = "";
    tittleFloyd.style.display = "none";
}

function closeSmsErrorFloyd() {
    if( typeof errorFloyd !== "undefined"){
       errorFloyd.style.visibility = "hidden";
    }
    if( typeof errorPairFloyd !== "undefined"){
        errorPairFloyd.style.visibility = "hidden";
    }
    if( typeof pListV !== "undefined"){
        pListV.style.display = "none";
    }
    if( typeof listEdges !== "undefined"){
        listEdges.style.display = "none";
    }
    if( typeof tittleFloyd !== "undefined"){
        tittleFloyd.style.display = "none";
    }
    if( typeof  answerFloyd !== "undefined"){
        answerFloyd.style.display = "none";
    }
}
