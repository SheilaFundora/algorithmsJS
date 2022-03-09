graph = new Graph();

/*dfs y bfs*/
function dfs( i, visitado, arr){

    visitado[i] = true;
    arr.push(graph.arrVertex[i]);

    for( let vecino of graph.arrEdge[i] ){
        if( !visitado[vecino] ){
            dfs(vecino,visitado,arr)
        }
    }
    return arr;
}


/*funciones para el fronten*/

function addListVDFS() {
    closeSmsErrorDFS();
    inpListVDFS = document.getElementById("listVertexToDFS");
    errorDFS = document.getElementById("errorInpDFS");

    var arrDFS =inpListVDFS.value;

    if( arrDFS === "" ){
        errorDFS.innerText = "Empty entry is not allowed";
        errorDFS.style.visibility = "visible";
        errorDFS.style.color = "#910504";
    }else{
        arrDFS = arrDFS.trim();
        if( arrDFS.includes(" ") ){
            arrDFS = arrDFS.split(" ");
        }
        if( arrDFS.includes(",") ){
            arrDFS = arrDFS.split(",");
        }

        for( var i = 0; i < arrDFS.length;i++ ){
            if( arrDFS[i] === "," ){
                arrDFS.splice(i, 1);
            }
            if( arrDFS[i] === "" ){
                arrDFS.splice(i, 1);
                i -= 1;
            }
        }

        for( var j = 0; j < arrDFS.length;j++ ){
            graph.addVertext( arrDFS[j] );
        }
        errorDFS.innerText = "The list of vertexes has be added successfully";
        errorDFS.style.visibility = "visible";
        errorDFS.style.color = "green";
    }
   inpListVDFS.value = "";

}

function addEdgeDFS() {
    closeSmsErrorDFS();
    inpPairDFS = document.getElementById("edgesDFS");
    errorPairDFS = document.getElementById("errorInpEdgesDFS");
    var arrV = inpPairDFS.value;

    if( arrV === "" ){
        errorPairDFS.innerText = "Empty entry is not allowed";
        errorPairDFS.style.color = "#910504";
        errorPairDFS.style.visibility = "visible";
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
                    errorPairDFS.innerText = "The edge already exist";
                    errorPairDFS.style.color = "#910504";
                    errorPairDFS.style.visibility = "visible";
                }else{
                    graph.addEdge( v1, v2 );
                    errorPairDFS.innerText = "Has been added successfully";
                    errorPairDFS.style.visibility = "visible";
                    errorPairDFS.style.color = "green";
                }
            }else{
                if (!graph.existVertex(v1) && !graph.existVertex(v2)) {
                    errorPairDFS.innerText = "The vertexes isn't found";
                    errorPairDFS.style.visibility = "visible";
                    errorPairDFS.style.color = "#910504";
                }else{
                    if (!graph.existVertex(v1)) {
                        errorPairDFS.innerText = "The first vertex isn't found";
                        errorPairDFS.style.visibility = "visible";
                        errorPairDFS.style.color = "#910504";
                    }
                    if (!graph.existVertex(v2)) {
                        errorPairDFS.innerText = "The second vertex isn't found";
                        errorPairDFS.style.color = "#910504";
                        errorPairDFS.style.visibility = "visible";
                    }
                }
            }
        }else{
            errorPairDFS.innerText = "Only two numbers please";
            errorPairDFS.style.visibility = "visible";
        }
        inpPairDFS.value = "";
    }
}

function showListsDFS() {
    closeSmsErrorDFS();
    listVDFS = document.getElementById("listVDFS");
    listEdgesDFS = document.getElementById("listEdgeDFS");
    tittleDFS = document.getElementById("tittleLEdgesDFS");

   tittleDFS.style.display = "none";


    if( graph.numberVertex() === 0 ){
       listVDFS.innerText = "Don't exist any vertex";
       listVDFS.style.display = "block";

    }else{
       listVDFS.innerHTML = "<h3 style='display: inline'>List of vertexes: </h3>" + graph.arrVertex;
       listVDFS.style.display = "block";
    }

    if( graph.numberEdge() === 0 ){
       listEdgesDFS.innerText = "Don't exist any edge";
        listEdgesDFS.style.display = "block";
    }else{
       tittleDFS.style.display = "block";

       listEdgesDFS.style.columnCount = "3";
       listEdgesDFS.style.width = "60%";
       listEdgesDFS.innerText = "";
        var listOldEdges = document.getElementById("ulLisEdgesDFS");
        if( listOldEdges != null ){
            listOldEdges.remove();
        }
        for( var i = 0; i < graph.numberVertex(); i++ ){
            var listEdge = document.createElement('li');
            listEdge.innerText = graph.arrEdge[i];
           listEdgesDFS.appendChild(listEdge);
        }
    }
    listEdgesDFS.style.display = "block";
}

function dfsHTMLDFS() {
    closeSmsErrorDFS();
    inpNode = document.getElementById("nodeStrarDFS");
    answerDFS = document.getElementById("listDFS");
    errorNodeDFS = document.getElementById("errorNodeDFS");

    node = inpNode.value;

    if( node === ""){
        errorNodeDFS.innerText = "Required field";
        errorNodeDFS.style.visibility = "visible";
    }else{
        node = node.trim();

        if( graph.numberVertex() === 0 ){
            errorNodeDFS.innerText = "Don't exist any vertex";
            errorNodeDFS.style.visibility = "visible";
        }else{
            if( graph.numberEdge() === 0 ){
                errorNodeDFS.innerText = "Don't exist any edges";
                errorNodeDFS.style.visibility = "visible";
            }else{
                if( graph.existVertex(node) ){
                    node = node.toString();
                    node = graph.arrVertex.indexOf(node);
                    var  arr = [];
                    var visitado = [];
                    for( var i = 0; i < graph.arrVertex.length; i++ ){
                        visiatdo = [false];
                    }
                    answerDFS.innerHTML = "<h3 style='display: inline'>DFS: </h3>" + dfs( node,visitado, arr);
                    answerDFS.style.visibility = "visible";
                    answerDFS.style.display = "block";
                }else{
                    errorNodeDFS.innerText = "The vertext don't exist";
                    errorNodeDFS.style.visibility = "visible";
                }
            }
        }
    }
    inpNode.value = "";

}

function closeAllDFS() {
    debugger
    if( typeof inpListVDFS !== "undefined"){
       inpListVDFS.value = "";
    }
    if( typeof errorDFS !== "undefined"){
       errorDFS.style.visibility = "hidden";
    }

    if( typeof inpPairDFS !== "undefined"){
        inpPairDFS.value = "";
    }
    if( typeof errorPairDFS !== "undefined"){
        errorPairDFS.style.visibility = "hidden";
    }

    if( typeof inpNode !== "undefined"){
        inpNode.value = "";
    }
    if( typeof errorNodeDFS !== "undefined"){
        errorNodeDFS.style.visibility = "hidden";
    }
    if( typeof answerDFS !== "undefined"){
        answerDFS.style.display = "none";
    }

    graph.arrVertex.length = 0;
    graph.arrEdge.length = 0;
    listVDFS.innerText = "";
    listEdgesDFS.innerText = "";
    tittleDFS.style.display = "none";
}

function closeSmsErrorDFS() {
    if( typeof errorDFS !== "undefined"){
        errorDFS.style.visibility = "hidden";
    }
    if( typeof errorNodeDFS !== "undefined"){
        errorNodeDFS.style.visibility = "hidden";
    }
    if( typeof errorPairDFS !== "undefined"){
        errorPairDFS.style.visibility = "hidden";
    }
    if( typeof listVDFS !== "undefined"){
        listVDFS.style.display = "none";
    }
    if( typeof listEdgesDFS !== "undefined"){
        listEdgesDFS.style.display = "none";
    }
    if( typeof tittleDFS !== "undefined"){
        tittleDFS.style.display = "none";
    }
    if( typeof answerDFS !== "undefined"){
        answerDFS.style.display = "none";
    }
}


