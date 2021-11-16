class Graph {

    constructor() {
        this.arrVertex = [];
        this.arrEdge = [];
    }

    addVertext(v) {
        if (!this.existVertex(v)) {
            this.arrVertex.push(v);
            this.arrEdge.push([]);
        }
    }

    addEdge(v1, v2) {
        var indexV1 = this.arrVertex.indexOf(v1);
        var indexV2 = this.arrVertex.indexOf(v2);

        if (this.existVertex(v1) && this.existVertex(v2)) {
            this.arrEdge[indexV1].push(indexV2);
            this.arrEdge[indexV2].push(indexV1);
        }
    }

    removeVertex(v) {
        var index = this.arrVertex.indexOf(v);

        if (this.existVertex(v)) {
            this.arrVertex.splice(index, 1);
            this.arrEdge.splice(index, 1);

            for (var i = 0; i < this.arrEdge.length; i++) {
                if (this.arrEdge[i].includes(index)) {
                    this.arrEdge[i].splice(this.arrEdge[i].indexOf(index), 1);
                }
            }
        }
    }

    removeEdge(v1, v2) {
        var indexV1 = this.arrVertex.indexOf(v1);
        var indexV2 = this.arrVertex.indexOf(v2);

        if (this.existVertex(v1) && this.existVertex(v2)) {
            this.arrEdge[indexV1].splice(this.arrEdge[indexV1].indexOf(indexV2), 1);
            this.arrEdge[indexV2].splice(this.arrEdge[indexV2].indexOf(indexV1), 1);
        }
    }

    isEmpty() {
        return this.arrVertex.length !== 0;
    }

    existVertex(v) {
        var index = this.arrVertex.indexOf(v);
        return index !== -1;
    }

    existEdge(v1, v2) {
        var indexV1 = this.arrVertex.indexOf(v1);
        var indexV2 = this.arrVertex.indexOf(v2);

        if (this.existVertex(v1) && this.existVertex(v2)) {
            if (this.arrEdge[indexV1].includes(indexV2) && this.arrEdge[indexV2].includes(indexV1)) {
                return true;
            }
        }
        return false;
    }

    numberVertex() {
        return this.arrVertex.length;
    }

    numberEdge() {
        var count = 0;
        for (var i = 0; i < this.arrEdge.length; i++) {
            count += this.arrEdge[i].length;
        }
        return count / 2;
    }

    vertexAdyacenntes(v) {
        var index = this.arrVertex.indexOf(v);
        var arrAdj = [];

        if (this.existVertex(v)) {
            arrAdj.push(this.arrEdge[index])
        }
        return arrAdj
    }

    /*dfs y bfs*/
}

/* he cambiedo, existEdgw,removeV, vertAdj*/
graph = new Graph();

function isEmpty(){
    var respuesta = document.getElementsByClassName("showListGraph")[0];
    var modelG1 = document.getElementById("mg-1");

    if( !graph.isEmpty() ){
        modelG1.style.display = "block";
        respuesta.innerHTML = "The list of vertexes is empty";
        respuesta.style.visibility = "visible";
    }else{
        modelG1.style.display = "block";
        respuesta.innerHTML = "The list of vertexes have some elements";
        respuesta.style.visibility = "visible";
    }
}

function numberV(){
    var respuesta = document.getElementsByClassName("showListGraph")[1];
    var modelG1 = document.getElementById("mg-2");

    var n = graph.numberVertex();

    if( n === 0 ){
        modelG1.style.display = "block";
        respuesta.innerHTML = "Don't exist any vertex";
        respuesta.style.visibility = "visible";
    }else{
        if( n === 1 ){
            modelG1.style.display = "block";
            respuesta.innerHTML = "<p>Exist one vertex</p>";
            respuesta.style.visibility = "visible";
        }else{
            modelG1.style.display = "block";
            respuesta.innerHTML = "<p>Exist " +  n + " vertexes</p>";
            respuesta.style.visibility = "visible";
        }
    }
}

function numberEdge() {
    var respuesta = document.getElementsByClassName("showListGraph")[2];
    var modelG1 = document.getElementById("mg-3");

    var n = graph.numberEdge();

    if( n === 0 ){
        modelG1.style.display = "block";
        respuesta.innerHTML = "Don't exist any edges";
        respuesta.style.visibility = "visible";
    }else{
        if( n === 1){
            modelG1.style.display = "block";
            respuesta.innerHTML = "<p>Exist one edge</p>";
            respuesta.style.visibility = "visible";
        }else{
            modelG1.style.display = "block";
            respuesta.innerHTML = "<p>Exist " +  n + " edges</p>";
            respuesta.style.visibility = "visible";
        }
    }
}

function addV() {
    closeSmsError();
    inpVertexAdd = document.getElementById("addV");
    errorAdd = document.getElementsByClassName("errorGraph")[0];

    var vertex = inpVertexAdd.value;
    errorAdd.style.visibility = "hidden";
    errorAdd.style.color = "#910504";

    if( vertex === ""){
        errorAdd.innerHTML = "Empty entry is not allowed";
        errorAdd.style.visibility = "visible";
    }else{
        vertex = vertex.trim();
        vertex = vertex.split(" ");
        if( vertex.length > 1 ){
            errorAdd.innerHTML = "Only one number please";
            errorAdd.style.visibility = "visible";
        }else{
            vertex = vertex.toString();
            if( graph.existVertex(vertex) ){
                errorAdd.innerHTML = "The vertex already exist";
                errorAdd.style.color = "#910504";
                errorAdd.style.visibility = "visible";
            }else{
                graph.addVertext(vertex);
                errorAdd.innerHTML = "Has been added successfully";
                errorAdd.style.color = "green";
                errorAdd.style.visibility = "visible";
            }
        }
    }
    inpVertexAdd.value = "";
}

function removeV() {
    closeSmsError();
    inpVertexRemove = document.getElementById("removeV");
    errorRemove = document.getElementById("errorRevomeV");

    var vertex = inpVertexRemove.value;
    errorRemove.style.visibility = "hidden";
    errorRemove.style.color = "#910504";


    if( vertex === ""){
        errorRemove.innerHTML = "Empty entry is not allowed";
        errorRemove.style.visibility = "visible";
    }else{
        vertex = vertex.trim();
        vertex = vertex.split(" ");
        if( vertex.length > 1 ){
            errorRemove.innerHTML = "Only one number please";
            errorRemove.style.visibility = "visible";
        }else{
            vertex = vertex.toString();
            if(graph.existVertex(vertex) ){
                graph.removeVertex(vertex);
                errorRemove.innerHTML = "Has been removed successfully";
                errorRemove.style.color = "green";
                errorRemove.style.visibility = "visible";
            }else{
                errorRemove.innerHTML = "Vertex isn't found";
                errorRemove.style.color = "#910504";
                errorRemove.style.visibility = "visible";
            }
        }
    }

    inpVertexRemove.value="";
}

function showGraph() {
    debugger
    listVGraphs = document.getElementById("listaVertex");
    listEdgeGraphs = document.getElementById("listaEdges");
    var modelG1 = document.getElementById("mg-4");

    listVGraphs.style.display = "none";
    listEdgeGraphs.style.display = "none";
    listVGraphs.style.listStyleType = "decimal";


    if( graph.numberVertex() === 0 ){
        listVGraphs.innerHTML = "<p>The list of vertexes have not elements</p>";
        modelG1.style.display = "block";
        listVGraphs.style.display = "block";
        listVGraphs.style.columnCount = "1";
    }else{
        listVGraphs.innerHTML = "";
        var listOld = document.getElementById("ulListV");
        if( listOld != null ){
            listOld.remove();
        }
        for( var i = 0; i < graph.numberVertex(); i++ ){
            var element = document.createElement('li');
            element.innerText = graph.arrVertex[i];
            listVGraphs.appendChild(element);
        }
        modelG1.style.display = "block";
        listVGraphs.style.display = "block";
        listVGraphs.style.columnCount = "3";
        listVGraphs.style.marginTop = "15px";
    }

    if( graph.numberEdge() === 0) {
        listEdgeGraphs.innerHTML = "<p>The list of edge have not elements</p>";
        modelG1.style.display = "block";
        listEdgeGraphs.style.display = "block";
    }else{
        listEdgeGraphs.innerHTML = "";
        var listOldEdges = document.getElementById("ulListEdge");
        if( listOldEdges != null ){
            listOldEdges.remove();
        }
        for( var i = 0; i < graph.numberVertex(); i++ ){
            var listEdge = document.createElement('li');
            listEdge.innerText = graph.arrEdge[i];
            listEdgeGraphs.appendChild(listEdge);
        }
        modelG1.style.display = "block";
        listEdgeGraphs.style.display = "block";
        listEdgeGraphs.style.columnCount = "3";
    }
}

function existV(){
    closeSmsError();
    inpExistV = document.getElementById("existV");
    answer = document.getElementById("respuesta");

    var vertex = inpExistV.value;
    answer.style.visibility="hidden";

    if( vertex === "" ){
        answer.innerText = "Empty entry is not allowed";
        answer.style.visibility="visible";
        answer.style.color=" #910504";
    }else{
        vertex = vertex.trim();
        if( graph.existVertex(vertex) ){
            answer.innerText = "the vertex is found";
            answer.style.visibility="visible";
            answer.style.color="green";
        }else{
            answer.innerText = "The vertex isn't found";
            answer.style.visibility="visible";
            answer.style.color=" #910504";
        }
    }
}

function addEdge() {
    closeSmsError();
    inpAddEdge = document.getElementById("addEdge");
    smsError = document.getElementById("errorAddEdge");
    var arrV = inpAddEdge.value;

    if( arrV === "" ){
        smsError.innerText = "Empty entry is not allowed";
        smsError.style.color = "#910504";
        smsError.style.visibility = "visible";
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
                    smsError.innerText = "The edge already exist";
                    smsError.style.color = "#910504";
                    smsError.style.visibility = "visible";
                }else{
                    graph.addEdge( v1, v2 );
                    smsError.innerText = "Has been added successfully";
                    smsError.style.visibility = "visible";
                    smsError.style.color = "green";
                }
            }else{
                if (!graph.existVertex(v1) && !graph.existVertex(v2)) {
                    smsError.innerText = "The vertexes isn't found";
                    smsError.style.visibility = "visible";
                    smsError.style.color = "#910504";
                }else{
                    if (!graph.existVertex(v1)) {
                        smsError.innerText = "The first vertex isn't found";
                        smsError.style.visibility = "visible";
                        smsError.style.color = "#910504";
                    }
                    if (!graph.existVertex(v2)) {
                        smsError.innerText = "The second vertex isn't found";
                        smsError.style.color = "#910504";
                        smsError.style.visibility = "visible";
                    }
                }
            }
        }else{
            smsError.innerText = "Only two numbers please";
            smsError.style.visibility = "visible";
        }
        inpAddEdge.value = "";
    }
}

function removeEdge() {
    closeSmsError();
    inpRemoveEdge = document.getElementById("removeEdge");
    smsErrorR = document.getElementById("errorRevomeEdge");
    var arrV = inpRemoveEdge.value;

    if( arrV === "" ){
        smsErrorR.innerText = "Empty entry is not allowed";
        smsErrorR.style.color = "#910504";
        smsErrorR.style.visibility = "visible";
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
                    graph.removeEdge( v1, v2 );
                    smsErrorR.innerText = "Has been removed successfully";
                    smsErrorR.style.visibility = "visible";
                    smsErrorR.style.color = "green";
                }else{
                    smsErrorR.innerText = "The edge not exist";
                    smsErrorR.style.color = "#910504";
                    smsErrorR.style.visibility = "visible";
                }
            }else{
                if (!graph.existVertex(v1) && !graph.existVertex(v2)) {
                    smsErrorR.innerText = "The vertexes isn't found";
                    smsErrorR.style.visibility = "visible";
                    smsErrorR.style.color = "#910504";
                }else{
                    if (!graph.existVertex(v1)) {
                        smsErrorR.innerText = "The first vertex isn't found";
                        smsErrorR.style.visibility = "visible";
                        smsErrorR.style.color = "#910504";
                    }
                    if (!graph.existVertex(v2)) {
                        smsErrorR.innerText = "The second vertex isn't found";
                        smsErrorR.style.color = "#910504";
                        smsErrorR.style.visibility = "visible";
                    }
                }
            }

        }else{
            smsError.innerText = "Only two numbers please";
            smsError.style.visibility = "visible";
        }
        inpRemoveEdge.value = "";
    }
}

function existEdge() {
    debugger
    closeSmsError();
    inpExistEdge = document.getElementById("existEdge");
    smsErrorEEdge = document.getElementById("ErrorexistEdge");
    var arrV = inpExistEdge.value;

    if( arrV === "" ){
        smsErrorEEdge.innerText = "Empty entry is not allowed";
        smsErrorEEdge.style.color = "#910504";
        smsErrorEEdge.style.visibility = "visible";
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
                    smsErrorEEdge.innerText = "The edeg exist";
                    smsErrorEEdge.style.visibility = "visible";
                    smsErrorEEdge.style.color = "green";
                }else{
                    smsErrorEEdge.innerText = "The edge not exist";
                    smsErrorEEdge.style.color = "#910504";
                    smsErrorEEdge.style.visibility = "visible";
                }
            }else{
                if (!graph.existVertex(v1) && !graph.existVertex(v2)) {
                    smsErrorEEdge.innerText = "The vertexes isn't found";
                    smsErrorEEdge.style.visibility = "visible";
                    smsErrorEEdge.style.color = "#910504";
                }else{
                    if (!graph.existVertex(v1)) {
                        smsErrorEEdge.innerText = "The first vertex isn't found";
                        smsErrorEEdge.style.visibility = "visible";
                        smsErrorEEdge.style.color = "#910504";
                    }
                    if (!graph.existVertex(v2)) {
                        smsErrorEEdge.innerText = "The second vertex isn't found";
                        smsErrorEEdge.style.color = "#910504";
                        smsErrorEEdge.style.visibility = "visible";
                    }
                }
            }

        }else{
            smsErrorEEdge.innerText = "Only two numbers please";
            smsErrorEEdge.style.visibility = "visible";
        }
        inpExistEdge.value = "";
    }

}

function Vadj(v) {

}

function closeAll() {

    if( typeof errorAdd !== "undefined" ){
        errorAdd.style.visibility = "hidden";
    }
    if( typeof inpVertexAdd !== "undefined" ){
        inpVertexAdd.value = "";
    }

    if( typeof errorRemove !== "undefined" ){
        errorRemove.style.visibility = "hidden";
    }
    if( typeof inpVertexRemove !== "undefined" ){
        inpVertexRemove.value = "";
    }
    if( typeof  inpExistV !== "undefined" ){
        inpExistV.value = "";
    }
    if( typeof answer !== "undefined" ){
        answer.style.visibility = "hidden";
    }
    if( typeof inpAddEdge !== "undefined" ){
        inpAddEdge.value ="";
    }
    if( typeof smsError !== "undefined" ){
        smsError.style.visibility = "hidden";
    }
    if( typeof inpRemoveEdge !== "undefined" ){
        inpRemoveEdge.value ="";
    }
    if( typeof smsErrorR !== "undefined" ){
        smsErrorR.style.visibility = "hidden";
    }
    if( typeof inpExistEdge !== "undefined" ){
        inpExistEdge.value ="";
    }
    if( typeof smsErrorEEdge !== "undefined" ){
        smsErrorEEdge.style.visibility = "hidden";
    }
}

function closeSmsError() {
    if( typeof errorAdd !== "undefined" ){
        errorAdd.style.visibility = "hidden";
    }
    if( typeof errorRemove !== "undefined" ){
        errorRemove.style.visibility = "hidden";
    }
    if( typeof answer !== "undefined" ){
        answer.style.visibility = "hidden";
    }
    if( typeof smsError !== "undefined" ){
        smsError.style.visibility = "hidden";
    }
    if( typeof smsErrorR !== "undefined" ){
        smsErrorR.style.visibility = "hidden";
    }
    if( typeof smsErrorEEdge !== "undefined" ){
        smsErrorEEdge.style.visibility = "hidden";
    }
}