
graph = new Graph();

/*dfs y bfs*/
 function bfs( nodeFirst){
        var index = graph.arrVertex.indexOf(nodeFirst);
        var arrFinal = [];
        var cola = [];
        var visitado = [graph.arrVertex.length + 5];

        if( graph.existVertex(nodeFirst) ){
            arrFinal.push(nodeFirst);
            cola.push(index);
            visitado[index] = true;

            while ( cola.length > 0 ){
                var aux = cola.pop();
                /*for( vecino in graph.arrEdge[aux]){
                    if( !visitado[vecino]){
                        visitado[vecino] = true;
                        cola.push(vecino);
                        arrFinal.push(graph.arrVertex[vecino]);
                    }
                }*/
                for( var vecino = 0; vecino < graph.arrVertex.length; vecino++ ){
                    if( !visitado[graph.arrEdge[aux][vecino]]){
                        visitado[graph.arrEdge[aux][vecino]] = true;
                        cola.push(graph.arrEdge[aux][vecino]);
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
    inpListV = document.getElementById("listVertexToDFS");
    errorInpListV = document.getElementById("errorInpBFS");

    var arrListV = inpListV.value;

    if( arrListV === "" ){
        errorInpListV.innerText = "Empty entry is not allowed";
        errorInpListV.style.visibility = "visible";
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
            graph.addVertext( arrListV[j] );
        }
        errorInpListV.innerText = "The list of vertexes has be added successfully";
        errorInpListV.style.visibility = "visible";
        errorInpListV.style.color = "green";
    }
    inpListV.value = "";

}

function addEdgeBFS() {
    closeSmsErrorBFs();
    inpPairV = document.getElementById("edges");
    smsErrrPair = document.getElementById("errorInpEdges");
    var arrV = inpPairV.value;

    if( arrV === "" ){
        smsErrrPair.innerText = "Empty entry is not allowed";
        smsErrrPair.style.color = "#910504";
        smsErrrPair.style.visibility = "visible";
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
                    smsErrrPair.innerText = "The edge already exist";
                    smsErrrPair.style.color = "#910504";
                    smsErrrPair.style.visibility = "visible";
                }else{
                    graph.addEdge( v1, v2 );
                    smsErrrPair.innerText = "Has been added successfully";
                    smsErrrPair.style.visibility = "visible";
                    smsErrrPair.style.color = "green";
                }
            }else{
                if (!graph.existVertex(v1) && !graph.existVertex(v2)) {
                    smsErrrPair.innerText = "The vertexes isn't found";
                    smsErrrPair.style.visibility = "visible";
                    smsErrrPair.style.color = "#910504";
                }else{
                    if (!graph.existVertex(v1)) {
                        smsErrrPair.innerText = "The first vertex isn't found";
                        smsErrrPair.style.visibility = "visible";
                        smsErrrPair.style.color = "#910504";
                    }
                    if (!graph.existVertex(v2)) {
                        smsErrrPair.innerText = "The second vertex isn't found";
                        smsErrrPair.style.color = "#910504";
                        smsErrrPair.style.visibility = "visible";
                    }
                }
            }
        }else{
            smsErrrPair.innerText = "Only two numbers please";
            smsErrrPair.style.visibility = "visible";
        }
        inpPairV.value = "";
    }
}

function showListsBFS() {
    closeSmsErrorBFs();
    pListV = document.getElementById("listV");
    listEdges = document.getElementById("listEdge");
    tittle = document.getElementById("tittleLEdges");

    tittle.style.display = "none";


    if( graph.numberVertex() === 0 ){
        pListV.innerText = "Don't exist any vertex";

    }else{
        pListV.innerHTML = "<h3 style='display: inline'>List of vertexes: </h3>" + graph.arrVertex;
    }

    if( graph.numberEdge() === 0 ){
        listEdges.innerText = "Don't exist any edge";
    }else{
        tittle.style.display = "block";

        listEdges.style.columnCount = "3";
        listEdges.style.width = "60%";
        listEdges.innerText = "";
        var listOldEdges = document.getElementById("ulLisEdges");
        if( listOldEdges != null ){
            listOldEdges.remove();
        }
        for( var i = 0; i < graph.numberVertex(); i++ ){
            var listEdge = document.createElement('li');
            listEdge.innerText = graph.arrEdge[i];
            listEdges.appendChild(listEdge);
        }
    }
}

function bfsHTMLBFS() {
    closeSmsErrorBFs();
    debugger
    inputNo = document.getElementById("nodeStrar");
    pBFS = document.getElementById("listBFS");
    errorNo = document.getElementById("errorNode");

    node = inputNo.value;

    if( node === ""){
        errorNo.innerText = "Required field";
        errorNo.style.visibility = "visible";
    }else{
        if( node.length === 1 ){
            if( graph.numberVertex() === 0 ){
                pBFS.innerText = "Don't exist any vertex";
            }else{
                node = node.toString();
                pBFS.innerHTML = "<h3 style='display: inline'>BFS: </h3>" + bfs(node);
            }
        }else{
            errorNo.innerText = "Only one number";
            errorNo.style.visibility = "visible";
        }
    }
    inputNo.value = "";

}

function closeAllBFS() {
    if( typeof inpListV !== "undefined"){
        inpListV.value = "";
    }
    if( typeof errorInpListV !== "undefined"){
        errorInpListV.style.visibility = "hidden";
    }

    if( typeof inpPairV !== "undefined"){
        inpPairV.value = "";
    }
    if( typeof smsErrrPair !== "undefined"){
        smsErrrPair.style.visibility = "hidden";
    }
    if( typeof inputNo !== "undefined"){
        inputNo.value = "";
    }
    if( typeof errorNo !== "undefined"){
        errorNo.style.visibility = "hidden";
    }

    graph.arrVertex.length = 0;
    graph.arrEdge.length = 0;
    pListV.innerText = "";
    listEdges.innerText = "";
    tittle.style.display = "none";
}

function closeSmsErrorBFs() {
    if( typeof errorInpListV !== "undefined"){
        errorInpListV.style.visibility = "hidden";
    }
    if( typeof smsErrrPair !== "undefined"){
        smsErrrPair.style.visibility = "hidden";
    }
    if( typeof errorNo !== "undefined"){
        errorNo.style.visibility = "hidden";
    }
}