class Arista{
    constructor( desde, hasta, peso) {
        this.desde = desde;
        this.hasta = hasta;
        this.peso = peso;
    }
}

class disJoinSet {

    constructor( max ){
        this.parents = [ max ];
        this.rank = [ max ];
        this.max = max;
        this._init();
    }

    _init(){
        for( var i = 0; i < this.max; i++ ){
            this.parents[ i ] = i;
            this.rank[ i ] = 0;
        }
    }

    getParent( child ){
        return this.parents[ child ] === child ? child : this.getParent( this.parents[ child ] );
    }


    joinSets( desde, hasta ){
        desde = this.getParent( desde );
        hasta = this.getParent( hasta );

        if( desde !== hasta ){

            if( this.rank[ desde ] > this.rank [ hasta ] ){
                this.parents[ desde ] = this.parents[ hasta ];
            }else{
                this.parents[ hasta ] = this.parents[ desde ];
                if( this.rank[ desde ] === this.rank[ hasta ] ){
                    this.rank[ desde ] ++;
                }
            }
            return true;
        }
        return false;
    }
}

function kruskal(primerNodo) {
    var cant = 0;
    arrArista.sort( function (edge1, edge2 ) {
        if( edge1.peso > edge2.peso ) return 1;
        if( edge1.peso < edge2.peso ) return -1;
        return 0;
    });

    dj = new disJoinSet(100);
    for( var i = 0; i < arrArista.length; i++ ){
        if(dj.joinSets(arrArista[i].desde,arrArista[i].hasta)){
            cant += arrArista[i].peso;
        }
    }
    return cant;
}

arrArista = [];

function addEdgesPesoKruskal(inpEdges, errorEdges) {
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
                    if( existEdgePesoKrusal( v1, v2 ) ){
                        errorPair.innerText = "The edge already exist";
                        errorPair.style.color = "#910504";
                        errorPair.style.visibility = "visible";
                    }else{
                        addEdgePesoArista( v1, v2, peso );
                        arrArista.push( new Arista( v1,v2, peso) );
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

function  addEdgePesoArista(v1, v2, peso) {
    var indexV1 = graph.arrVertex.indexOf(v1);
    var indexV2 = graph.arrVertex.indexOf(v2);

    if (graph.existVertex(v1) && graph.existVertex(v2)) {
        graph.arrEdge[indexV1].push(new Arista( indexV1, indexV2, peso));
        graph.arrEdge[indexV2].push(new Arista(indexV2, indexV1, peso));
    }
}

function existEdgePesoKrusal(v1,v2) {
    var indexV1 = graph.arrVertex.indexOf(v1);
    var indexV2 = graph.arrVertex.indexOf(v2);

    var exist = false;
    if (graph.existVertex(v1) && graph.existVertex(v2)) {
        for( var i = 0; i < graph.arrEdge[indexV1].length; i ++){
            if( graph.arrEdge[indexV1].length > 0 ){
                if( graph.arrEdge[indexV1][i].hasta === indexV2 ){
                    return true;
                }
            }
        }
        for( var j = 0; j < graph.arrEdge[indexV2].length; j ++){
            if( graph.arrEdge[indexV2].length > 0 ){
                if( graph.arrEdge[indexV2][j].hasta === indexV1 ) {
                    return true;
                }
            }
        }
    }
    return false;
}

function showListsEdgesPesoKruskal(listV, listEdge, tittle, ulLEdges) {
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
                LE.innerText += " node: " + graph.arrEdge[i][j].hasta + " peso: " + graph.arrEdge[i][j].peso ;
            }
            listEdges.appendChild(LE);
        }
        listEdges.style.display = "block";
    }
}
