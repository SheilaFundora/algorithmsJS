
graph = new Graph();

/*dfs y bfs*/
function bfs( nodeFirst){
    var index = graph.arrVertex.indexOf(nodeFirst);
    var arrFinal = [];
    var cola = [];
    var visitado = [];

    for( var i = 0; i < (graph.arrVertex.length + 5); i++ ){
        visitado[i] = false;
    }

    if( graph.existVertex(nodeFirst) ){
        arrFinal.push(nodeFirst);
        cola.push(index);
        visitado[index] = true;

        while ( cola.length > 0 ){
            var aux = cola.pop();
            for( let vecino of graph.arrEdge[aux]){
                if( !visitado[vecino]){
                    visitado[vecino] = true;
                    cola.push(vecino);
                    arrFinal.push(graph.arrVertex[vecino]);
                }
            }
        }
    }
    return arrFinal;
}

/*funciones para el fronten*/

function addListVBFS() {
    closeSmsErrorBFs();
    inpLVBFS = document.getElementById("listVertexToBFS");
    errorBFS = document.getElementById("errorInpBFS");

    var arrBFS = inpLVBFS.value;

    if( arrBFS === "" ){
        errorBFS.innerText = "Empty entry is not allowed";
        errorBFS.style.visibility = "visible";
        errorBFS.style.color = "#910504";
    }else{
        arrBFS = arrBFS.trim();
        if( arrBFS.includes(" ") ){
            arrBFS = arrBFS.split(" ");
        }
        if( arrBFS.includes(",") ){
            arrBFS = arrBFS.split(",");
        }

        for( var i = 0; i < arrBFS.length;i++ ){
            if( arrBFS[i] === "," ){
                arrBFS.splice(i, 1);
            }
            if( arrBFS[i] === "" ){
                arrBFS.splice(i, 1);
                i -= 1;
            }
        }

        for( var j = 0; j < arrBFS.length;j++ ){
            graph.addVertext( arrBFS[j] );
        }
        errorBFS.innerText = "The list of vertexes has be added successfully";
        errorBFS.style.visibility = "visible";
        errorBFS.style.color = "green";
    }
    inpLVBFS.value = "";

}

function addEdgeBFS() {
    closeSmsErrorBFs();
    inpPairBFS = document.getElementById("edges");
    errorPairBFS = document.getElementById("errorInpEdges");
    var arrV = inpPairBFS.value;

    if( arrV === "" ){
        errorPairBFS.innerText = "Empty entry is not allowed";
        errorPairBFS.style.color = "#910504";
        errorPairBFS.style.visibility = "visible";
    }else{
        arrV = arrV.trim();
        if( arrV.includes(" ") ){
            arrV = arrV.split(" ");
        }
        if( arrV.includes(",") ){
            arrV = arrV.split(",");
        }

        for( var i = 0; i < arrV.length;i++ ){
            if( arrV[i] === "," ){
                arrV.splice(i, 1);
            }
            if( arrV[i] === "" ){
                arrV.splice(i, 1);
                i -= 1;
            }
        }

        if( arrV.length === 2 ){
            var v1 = arrV[0];
            var v2 = arrV[1];

            if( graph.existVertex( v1 ) && graph.existVertex( v2 ) ) {
                if( graph.existEdge( v1, v2 ) ){
                    errorPairBFS.innerText = "The edge already exist";
                    errorPairBFS.style.color = "#910504";
                    errorPairBFS.style.visibility = "visible";
                }else{
                    graph.addEdge( v1, v2 );
                    errorPairBFS.innerText = "Has been added successfully";
                    errorPairBFS.style.visibility = "visible";
                    errorPairBFS.style.color = "green";
                }
            }else{
                if (!graph.existVertex(v1) && !graph.existVertex(v2)) {
                    errorPairBFS.innerText = "The vertexes isn't found";
                    errorPairBFS.style.visibility = "visible";
                    errorPairBFS.style.color = "#910504";
                }else{
                    if (!graph.existVertex(v1)) {
                        errorPairBFS.innerText = "The first vertex isn't found";
                        errorPairBFS.style.visibility = "visible";
                        errorPairBFS.style.color = "#910504";
                    }
                    if (!graph.existVertex(v2)) {
                        errorPairBFS.innerText = "The second vertex isn't found";
                        errorPairBFS.style.color = "#910504";
                        errorPairBFS.style.visibility = "visible";
                    }
                }
            }
        }else{
            errorPairBFS.innerText = "Only two numbers please";
            errorPairBFS.style.visibility = "visible";
        }
        inpPairBFS.value = "";
    }
}

function showListsBFS() {
    debugger
    closeSmsErrorBFs();
    listVBfs = document.getElementById("listV");
    listEdgesBFS = document.getElementById("listEdge");
    tittleBFS = document.getElementById("tittleLEdges");

    tittleBFS.style.display = "none";


    if( graph.numberVertex() === 0 ){
        listVBfs.innerText = "Don't exist any vertex";
        listVBfs.style.display = "block";

    }else{
        listVBfs.innerHTML = "<h3 style='display: inline'>List of vertexes: </h3>" + graph.arrVertex;
        listVBfs.style.display = "block";
    }

    if( graph.numberEdge() === 0 ){
        listEdgesBFS.innerText = "Don't exist any edge";
        listEdgesBFS.style.display = "block";
    }else{
        tittleBFS.style.display = "block";

        listEdgesBFS.style.columnCount = "3";
        listEdgesBFS.style.width = "60%";
        listEdgesBFS.innerText = "";
        var listOldEdges = document.getElementById("ulLisEdges");
        if( listOldEdges != null ){
            listOldEdges.remove();
        }
        for( var i = 0; i < graph.numberVertex(); i++ ){
            var listEdge = document.createElement('li');
            listEdge.innerText = graph.arrEdge[i];
            listEdgesBFS.appendChild(listEdge);
        }
        listEdgesBFS.style.display = "block";
    }
}

function bfsHTMLBFS() {
    closeSmsErrorBFs();
    debugger
    inpNode = document.getElementById("nodeStrar");
    answerBFS = document.getElementById("listBFS");
    errorNodeBFS = document.getElementById("errorNodeBFS");

    node = inpNode.value;

    if( node === ""){
        errorNodeBFS.innerText = "Required field";
        errorNodeBFS.style.visibility = "visible";
    }else{
        node = node.trim();

        if( graph.numberVertex() === 0 ){
            errorNodeBFS.innerText = "Don't exist any vertex";
            errorNodeBFS.style.visibility = "visible";
        }else{
            if( graph.numberEdge() === 0 ){
                errorNodeBFS.innerText = "Don't exist any edges";
                errorNodeBFS.style.visibility = "visible";
            }else{
                if( graph.existVertex(node) ){
                    node = node.toString();
                    answerBFS.innerHTML = "<h3 style='display: inline'>BFS: </h3>" + bfs(node);
                    answerBFS.style.display = "block";
                    answerBFS.style.visibility = "visible";
                }else{
                    errorNodeBFS.innerText = "The vertext don't exist";
                    errorNodeBFS.style.visibility = "visible";
                }
            }
        }
    }
    inpNode.value = "";

}

function closeAllBFS() {
    if( typeof inpLVBFS !== "undefined"){
        inpLVBFS.value = "";
    }
    if( typeof errorBFS !== "undefined"){
        errorBFS.style.visibility = "hidden";
    }

    if( typeof inpPairBFS !== "undefined"){
        inpPairBFS.value = "";
    }
    if( typeof errorPairBFS !== "undefined"){
        errorPairBFS.style.visibility = "hidden";
    }
    if( typeof inpNode !== "undefined"){
        inpNode.value = "";
    }
    if( typeof errorNodeBFS !== "undefined"){
        errorNodeBFS.style.visibility = "hidden";
    }
    if( typeof answerBFS !== "undefined"){
        answerBFS.style.visibility = "hidden";
    }

    graph.arrVertex.length = 0;
    graph.arrEdge.length = 0;
    listVBfs.innerText = "";
    listEdgesBFS.innerText = "";
    tittleBFS.style.display = "none";
}

function closeSmsErrorBFs() {
    if( typeof errorBFS !== "undefined"){
        errorBFS.style.visibility = "hidden";
    }
    if( typeof errorPairBFS !== "undefined"){
        errorPairBFS.style.visibility = "hidden";
    }
    if( typeof errorNodeBFS !== "undefined"){
        errorNodeBFS.style.visibility = "hidden";
    }
    if( typeof answerBFS !== "undefined"){
        answerBFS.style.visibility = "hidden";
    }
    if( typeof listVBfs !== "undefined"){
        listVBfs.style.display = "none";
    }
    if( typeof listEdgesBFS !== "undefined"){
        listEdgesBFS.style.display = "none";
    }
    if( typeof tittleBFS !== "undefined"){
        tittleBFS.style.display = "none";
    }
    if( typeof answerBFS !== "undefined"){
        answerBFS.style.display = "none";
    }
}