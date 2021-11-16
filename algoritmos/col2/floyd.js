
graph = new Graph();

function floyd( nodeFirst){

}


/*funciones para el fronten*/

function addListVFloyd() {
    closeSmsErrorFloyd();
    inpListV = document.getElementById("listVertexToFloyd");
    errorInpListV = document.getElementById("errorInpFloyd");

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

function addEdgeFloyd() {
    closeSmsErrorFloyd();
    inpPairV = document.getElementById("edgesFloyd");
    smsErrrPair = document.getElementById("errorInpEdgesFloyd");
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

function showListsFloyd() {
    debugger
    closeSmsErrorFloyd();
    pListV = document.getElementById("listVFloyd");
    listEdges = document.getElementById("listEdgeFloyd");
    tittle = document.getElementById("tittleLEdgesFloyd");

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

function FloydHTMLFloyd() {
    closeSmsErrorFloyd();
    pBFS = document.getElementById("listFloyd");

}

function closeAllFloyd() {
    debugger
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

function closeSmsErrorFloyd() {
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