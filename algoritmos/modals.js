/*
OJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJOOJO
hacer mas librerias y no todas las cosas separado, es mas facil utilizar metodos y pasar por parametros los diferentes
valores cuado lo llamemos q copiar toda la funcion, ejemmplo para los errores de validcion, es mejor y mas
eficaz por librerias,ejempli el error de campo invalido o vacio es ,mejor una funcion que nos valide y slo lamarla
*/

function showModal( modalId ) {
    modal = document.getElementById( modalId );
    if( modal !== undefined ){
        modal.style.display = 'block';
    }else{

        console.error('Wrong modal ID: ' + modalId);
    }
}

function closeModal( modalId ) {
    modal = document.getElementById( modalId );
    if( modal !== undefined ){
        modal.style.display = 'none';
    }else{
        console.error('Wrong modal ID: ' + modalId);
    }
}

//a partir de la 3ra columna los metodos son globales
graph = new Graph();

//metodospara add arista y exite arista para grafos con peso
function existEdgePeso(v1,v2) {
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

function  addEdgePeso(v1, v2, peso) {
    var indexV1 = graph.arrVertex.indexOf(v1);
    var indexV2 = graph.arrVertex.indexOf(v2);

    if (graph.existVertex(v1) && graph.existVertex(v2)) {
        graph.arrEdge[indexV1].push(new Pair(indexV2, peso));
        graph.arrEdge[indexV2].push(new Pair(indexV1, peso));
    }
}

//metodos pa adicionar vertices, aristas y mostrar en grafos
function addList(inpG,smsErrorG) {
    closeSmsError();
    inpLV = document.getElementById(inpG);
    error = document.getElementById(smsErrorG);

    var arrListV =inpLV.value;

    if( arrListV === "" ){
        error.innerText = "Empty entry is not allowed";
        error.style.visibility = "visible";
        error.style.color = "#910504";
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
        error.innerText = "The list of vertexes has be added successfully";
        error.style.visibility = "visible";
        error.style.color = "green";
    }
    inpLV.value = "";
}

//adiciona arista sin peso
function addEdges(inpEdges, errorEdges) {
    debugger
    closeSmsError();
    inpPair = document.getElementById(inpEdges);
    errorPair = document.getElementById(errorEdges);
    var arrPair =inpPair.value;

    if( arrPair === "" ){
        errorPair.innerText = "Empty entry is not allowed";
        errorPair.style.color = "#910504";
        errorPair.style.visibility = "visible";
    }else{
        arrPair = arrPair.trim();
        if( arrPair.includes(" ") ){
            arrPair = arrPair.split(" ");
        }
        if( arrPair.includes(",") ){
            arrPair = arrPair.split(",");
        }

        for( var i = 0; i < arrPair.length;i++ ){
            if( arrPair[i] === "," ){
                arrPair.splice(i, 1);
            }
            if( arrPair[i] === "" ){
                arrPair.splice(i, 1);
                i -= 1;
            }
        }
        if( arrPair.length === 2 ){
            var v1 = arrPair[0];
            var v2 = arrPair[1];

            if( graph.existVertex( v1 ) && graph.existVertex( v2 ) ) {
                if( graph.existEdge( v1, v2 ) ){
                    errorPair.innerText = "The edge already exist";
                    errorPair.style.color = "#910504";
                    errorPair.style.visibility = "visible";
                }else {
                    graph.addEdge(v1, v2);
                    errorPair.innerText = "Has been added successfully";
                    errorPair.style.visibility = "visible";
                    errorPair.style.color = "green";
                }
            }else{
                if (!graph.existVertex(v1) && !graph.existVertex(v2)) {
                    errorPair.innerText = "The vertexes isn't found";
                    errorPair.style.visibility = "visible";
                    errorPair.style.color = "#910504";
                }else{
                    if (!graph.existVertex(v1)) {
                        errorPair.innerText = "The first vertex isn't found";
                        errorPair.style.visibility = "visible";
                        errorPair.style.color = "#910504";
                    }
                    if (!graph.existVertex(v2)) {
                        errorPair.innerText = "The second vertex isn't found";
                        errorPair.style.color = "#910504";
                        errorPair.style.visibility = "visible";
                    }
                }
            }

        }else{
            errorPair.innerText = "Only two numbers please";
            errorPair.style.visibility = "visible";
        }
        inpPair.value = "";
    }
}

//adiciona arista con peso
function addEdgesPeso(inpEdges, errorEdges) {
    debugger
    closeSmsError();
    inpPair = document.getElementById(inpEdges);
    errorPair = document.getElementById(errorEdges);
    var arrPair =inpPair.value;

    if( arrPair === "" ){
        errorPair.innerText = "Empty entry is not allowed";
        errorPair.style.color = "#910504";
        errorPair.style.visibility = "visible";
    }else{
        arrPair = arrPair.trim();
        if( arrPair.includes(" ") ){
            arrPair = arrPair.split(" ");
        }
        if( arrPair.includes(",") ){
            arrPair = arrPair.split(",");
        }

        for( var i = 0; i < arrPair.length;i++ ){
            if( arrPair[i] === "," ){
                arrPair.splice(i, 1);
            }
            if( arrPair[i] === "" ){
                arrPair.splice(i, 1);
                i -= 1;
            }
        }
        if( arrPair.length === 3 ){
            var v1 = arrPair[0];
            var v2 = arrPair[1];
            var peso = arrPair[2];

            if( !isNaN(peso) ){
                peso = Number(peso);
                if( graph.existVertex( v1 ) && graph.existVertex( v2 ) ) {
                    if( existEdgePeso( v1, v2 ) ){
                        errorPair.innerText = "The edge already exist";
                        errorPair.style.color = "#910504";
                        errorPair.style.visibility = "visible";
                    }else{
                        addEdgePeso( v1, v2, peso );
                        errorPair.innerText = "Has been added successfully";
                        errorPair.style.visibility = "visible";
                        errorPair.style.color = "green";
                    }
                }else{
                    if (!graph.existVertex(v1) && !graph.existVertex(v2)) {
                        errorPair.innerText = "The vertexes isn't found";
                        errorPair.style.visibility = "visible";
                        errorPair.style.color = "#910504";
                    }else{
                        if (!graph.existVertex(v1)) {
                            errorPair.innerText = "The first vertex isn't found";
                            errorPair.style.visibility = "visible";
                            errorPair.style.color = "#910504";
                        }
                        if (!graph.existVertex(v2)) {
                            errorPair.innerText = "The second vertex isn't found";
                            errorPair.style.color = "#910504";
                            errorPair.style.visibility = "visible";
                        }
                    }
                }
            }
            else{
                errorPair.innerText = "The third element isn't a number";
                errorPair.style.color = "#910504";
                errorPair.style.visibility = "visible";
            }
        }else{
            errorPair.innerText = "Only three numbers please";
            errorPair.style.visibility = "visible";
        }
        inpPair.value = "";
    }
}
//para mostrar aristas con peso
function showListsEdgesPeso(listV, listEdge, tittle, ulLEdges) {
    debugger
    closeSmsError();
    listVertex = document.getElementById(listV);
    listEdges = document.getElementById(listEdge);
    tittleEdge = document.getElementById(tittle);

    tittleEdge.style.display = "none";

    if( graph.numberVertex() === 0 ){
        listVertex.innerHTML = "Don't exist any vertex";
        listVertex.style.display = "block";

    }else{
        listVertex.innerHTML = "<h3 style='display: inline'>List of vertexes: </h3>" + graph.arrVertex;
        listVertex.style.display = "block";
    }

    if( graph.numberEdge() === 0 ){
        listEdges.innerText = "Don't exist any edge";
        listEdges.style.display = "block";
    }else{
        tittleEdge.style.display = "block";

        listEdges.style.columnCount = "2";
        listEdges.style.width = "60%";
        listEdges.innerText = "";
        var listOldEdges = document.getElementById(ulLEdges);
        if( listOldEdges != null ){
            listOldEdges.remove();
        }
        for( var i = 0; i < graph.numberVertex(); i++ ){
            var LE = document.createElement('li');
            var valor = 0;
            for( var j = 0; j < graph.arrEdge[i].length; j++ ){
                LE.innerText += " node: " + graph.arrEdge[i][j].node + " peso: " + graph.arrEdge[i][j].peso ;
            }
            listEdges.appendChild(LE);
        }
        listEdges.style.display = "block";
    }
}
//para aristas sin peso
function showListstEdgesSinPeso(listV, listEdge, tittle, ulLEdges) {
    debugger
    closeSmsError();
    listVertex = document.getElementById(listV);
    listEdges = document.getElementById(listEdge);
    tittleEdge = document.getElementById(tittle);

    tittleEdge.style.display = "none";

    if( graph.numberVertex() === 0 ){
        listVertex.innerHTML = "Don't exist any vertex";
        listVertex.style.display = "block";

    }else{
        listVertex.innerHTML = "<h3 style='display: inline'>List of vertexes: </h3>" + graph.arrVertex;
        listVertex.style.display = "block";
    }

    if( graph.numberEdge() === 0 ){
        listEdges.innerText = "Don't exist any edge";
        listEdges.style.display = "block";
    }else{
        tittleEdge.style.display = "block";

        listEdges.style.columnCount = "2";
        listEdges.style.width = "60%";
        listEdges.innerText = "";
        var listOldEdges = document.getElementById(ulLEdges);
        if( listOldEdges != null ){
            listOldEdges.remove();
        }
        for( var i = 0; i < graph.numberVertex(); i++ ){
            var LE = document.createElement('li');
            var valor = 0;
            for( var j = 0; j < graph.arrEdge[i].length; j++ ){
                LE.innerText += graph.arrEdge[i][j];
            }
            listEdges.appendChild(LE);
        }
        listEdges.style.display = "block";
    }
}

//para loe metodos
function metHTMLNodefirst(respuesta, nodeInicio, errorSms, metodo) {
    closeSmsError();
    answer = document.getElementById(respuesta);
    nodefirst = document.getElementById(nodeInicio);
    errorNode = document.getElementById(errorSms);

    node = nodefirst.value;

    if( node === ""){
        errorNode.innerText = "Required field";
        errorNode.style.visibility = "visible";
    }else{
        node = node.trim();

        if( graph.numberVertex() === 0 ){
            errorNode.innerText = "Don't exist any vertex";
            errorNode.style.visibility = "visible";
        }else{
            if( graph.numberEdge() === 0 ){
                errorNode.innerText = "Don't exist any edges";
                errorNode.style.visibility = "visible";
            }else{
                if( graph.existVertex(node) ){
                    node = node.toString();
                    answer.innerHTML = "<h3 style='display: inline'>Algorithm: </h3>" + metodo(node);
                    answer.style.display = "block";
                    answer.style.visibility = "visible";
                }else{
                    errorNode.innerText = "The vertext don't exist";
                    errorNode.style.visibility = "visible";
                }
            }
        }
    }
    nodefirst.value = "";
}

function metHTMLNodeinicioANDfind(respuesta, errorInicio, errorFin, i, j) {
    debugger
    closeSmsError();
    answer = document.getElementById(respuesta);

    nodoInicio = document.getElementById(i);
    errorNInicio = document.getElementById(errorInicio);

    nodoFin = document.getElementById(j);
    errorNFin = document.getElementById(errorFin);

    var inicio = nodoInicio.value;
    var fin = nodoFin.value;

    if( inicio === "" || fin ==="" ){
        if( inicio === ""){
            errorNInicio.innerText = "Required field";
            errorNInicio.style.width = "100%";
            errorNInicio.style.visibility = "visible";
        }
        if( fin === ""){
            errorNFin.innerText = "Required field";
            errorNFin.style.visibility = "visible";
        }
    }else{
        inicio = inicio.trim();
        fin = fin.trim();

        if( graph.numberVertex() === 0 ){
            errorNInicio.innerText = "Don't exist any vertex in the list";
            errorNInicio.style.width = "150%";
            errorNInicio.style.visibility = "visible";
        }else{
            if( graph.numberEdge() === 0 ){
                errorNInicio.innerText = "Don't exist any edges";
                errorNInicio.style.width = "150%";
                errorNInicio.style.visibility = "visible";
            }else{
                if( graph.existVertex(inicio) && graph.existVertex(fin) ){
                    inicio = inicio.toString();
                    fin = fin.toString();
                    answer.innerHTML = "<h3 style='display: inline'>Djkstra: </h3>" + djkstra(inicio,fin);
                    answer.style.display = "block";
                    answer.style.visibility = "visible";

                }else{
                    if( !graph.existVertex(inicio) ){
                        errorNInicio.innerText = "vertex don't exist";
                        errorNInicio.style.visibility = "visible";
                    }
                    if( !graph.existVertex(fin) ){
                        errorNFin.innerText = "vertex don't exist";
                        errorNFin.style.visibility = "visible";
                    }

                }
            }
        }
    }
    nodoInicio.value = "";
    nodoFin.value = "";

}

function metHTMLonlyButtom(respuesta, errorSms, metodo) {
    closeSmsError();
    answer = document.getElementById(respuesta);
    errorNode = document.getElementById(errorSms);


    if( graph.numberVertex() === 0 ){
        errorNode.innerText = "Don't exist any vertex";
        errorNode.style.visibility = "visible";
    }else{
        if( graph.numberEdge() === 0 ){
            errorNode.innerText = "Don't exist any edges";
            errorNode.style.visibility = "visible";
        }else{
            answer.innerHTML = "<h3 style='display: inline'>Algorithm: </h3>" + metodo();
            answer.style.display = "block";
            answer.style.visibility = "visible";
        }
    }
}

function closeAllMet() {
    if( typeof error !== "undefined"){
        error.style.visibility = "hidden";
    }
    if( typeof errorPair !== "undefined"){
        errorPair.style.visibility = "hidden";
    }
    if( typeof listVertex !== "undefined"){
        listVertex.style.display = "none";
    }
    if( typeof listEdges !== "undefined"){
        listEdges.style.display = "none";
    }
    if( typeof answer !== "undefined"){
        answer.style.display = "none";
    }
    if( typeof errorNode !== "undefined"){
        errorNode.style.visibility = "hidden";
    }
    if( typeof tittleEdge !== "undefined"){
        tittleEdge.style.display = "none";
    }
    graph.arrVertex.length = 0;
    graph.arrEdge.length = 0;

    arrPrime.length = 0;

    if( typeof listVertex !== "undefined"){
        listVertex.innerHTML = "";
    }
    if( typeof listEdges !== "undefined"){
        listEdges.innerHTML = "";
    }

    if( typeof errorNInicio !== "undefined"){
        errorNInicio.style.visibility = "hidden";
    }
    if( typeof errorNFin !== "undefined"){
        errorNFin.style.visibility = "hidden";
    }
    if( typeof respuesta !== "undefined"){
        respuesta.style.visibility = "hidden";
    }
    if( typeof errorSMS !== "undefined"){
        errorSMS.style.visibility = "hidden";
    }
    if( typeof errorAddList !== "undefined"){
        errorAddList.style.visibility = "hidden";
    }
}

function closeSmsError() {
    arrPrime.length = 0;

    if( typeof error !== "undefined"){
        error.style.visibility = "hidden";
    }
    if( typeof errorPair !== "undefined"){
        errorPair.style.visibility = "hidden";
    }
    if( typeof listVertex !== "undefined"){
        listVertex.style.display = "none";
    }

    if( typeof answer !== "undefined"){
        answer.style.display = "none";
    }

    if( typeof errorNode !== "undefined"){
        errorNode.style.visibility = "hidden";
    }
    if( typeof tittleEdge !== "undefined"){
        tittleEdge.style.display = "none";
    }

    if( typeof respuesta !== "undefined"){
        respuesta.style.visibility = "hidden";
    }
    if( typeof errorSMS !== "undefined"){
        errorSMS.style.visibility = "hidden";
    }
    if( typeof errorAddList !== "undefined"){
        errorAddList.style.visibility = "hidden";
    }
}

//metodo globar para la quinta columna
arrPrime = [];

function addNumberMax(numberMax, errorM) {
    debugger
    closeSmsError();
    inputMAx = document.getElementById(numberMax);
    errorAddList = document.getElementById(errorM);

    arrListV = inputMAx.value;

    if( arrListV === ""){
        errorAddList.innerText = "Empty entry is not allowed";
        errorAddList.style.visibility = "visible";
        errorAddList.style.color = "#910504";
    }else{
        arrListV = arrListV.trim();

        if( isNaN( arrListV ) ){
            errorAddList.innerText = "Only one number please";
            errorAddList.style.visibility = "visible";
            errorAddList.style.color = "#910504";
        }else{
            arrPrime.push( Number(arrListV) );
            errorAddList.innerText = "The number has be added successfully";
            errorAddList.style.visibility = "visible";
            errorAddList.style.color = "green";
        }
    }
    inputMAx.value = "";
}

function showMetPrimeNumber(  answer, errorM, metodo) {
    debugger
    respuesta = document.getElementById(answer);
    errorSMS = document.getElementById(errorM);

    if( arrPrime.length === 0 ){
        errorSMS.innerText = "Don't exist any element";
        errorSMS.style.visibility = "visible";
    }else{
        var maximo = Number(arrListV);

        respuesta.innerHTML = "<h3 style='display: inline'>Answer: </h3>" + metodo(maximo);
        respuesta.style.visibility = "visible";
    }
}


