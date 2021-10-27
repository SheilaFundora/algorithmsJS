
class Priorityqueue{

    constructor(arr) {
        this.arr = arr;
        this.size = arr.length;
        this.build()
    }

    build() {
        for( var i = parseInt( (this.size / 2) -  1 ); i >= 0; i --){
            this.heapify(i);
        }
    }

    heapify(i){
        if( ( ( i * 2 ) + 1 ) < this.size){
            if( this.arr[2 * i + 1] < this.arr[i]){
                this.swap(2 * i + 1, i);
                this.heapify(2 * i + 1);
            }

        }
        if( ( ( i * 2 ) + 2) < this.size){
            if( this.arr[2 * i + 2] < this.arr[i]){
                this.swap(2 * i + 2, i);
                this.heapify(2 * i + 2);
            }
        }
    }

    heapifyInvertido(i){
        if( i % 2 !== 0 && i !== 0){
            if( this.arr[i] < parseInt( this.arr[( i -1 ) / 2] ) ){
                this.swap(i, ( (i - 1 ) / 2) );
                this.heapifyInvertido( ( i -1 )/ 2 );
            }

        }
        if(  i % 2 === 0 && i !== 0){
            if( this.arr[i] < parseInt( this.arr[( i - 2 ) / 2] ) ){
                this.swap(i, ( i - 2) / 2 );
                this.heapifyInvertido( ( i - 2) / 2 );
            }
        }
    }

    swap(i, j){
        var aux = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = aux;
    }

    extraer(){
        if(this.size > 0){
            var aux = this.arr[0];
            this.swap(0, this.size - 1);
            this.arr.pop(this.arr[this.size - 1], 1);
            this.size -= 1;
            this.heapify(0);
            return  aux;
        }
    }

    add( elemento ){
        this.arr.push(elemento);
        this.size += 1;
        this.heapifyInvertido(this.size - 1);
    }
}

function showPq() {
    debugger
    inputList = document.getElementsByClassName("list-number")[0];
    parafo = document.getElementsByClassName("showList")[0];
    errorSms = document.getElementsByClassName("smsError")[0];

    parafo.style.visibility="hidden";
    errorSms.style.visibility="hidden";

    if( typeof pq === "undefined"){
        var arrString = inputList.value;
        if(arrString === ""){
            errorSms.innerHTML = "Empty entry is not allowed, enter numbers";
            errorSms.style.visibility="visible";
        }else{
            arrString = arrString.trim();
            var arr = arrString.split(" ");
            var containString = false;

            for( var i = 0; i < arr.length; i++ ){
                if(arr[i] === ""){
                    arr.splice(i,1);
                }
                if( isNaN(arr[i]) ){
                    containString = true;
                    errorSms.innerHTML = "Only numbers please";
                    errorSms.style.visibility="visible";
                }
            }
            for(var i = 0; i < arr.length; i++){
                if( arr[i] !== ""){
                    arr[i] = Number(arr[i]);
                }else{
                    arr.splice(i,1);
                }
            }

            if( ! containString ){
                pq = new Priorityqueue(arr);
                var newArr =  "";
                for( var i = 0; i < arr.length; i++ ){
                    newArr += pq.arr[i] + " ";
                }
                if(pq.size > 0){
                    parafo.innerHTML = newArr;
                    parafo.style.visibility="visible";
                }
                else{
                    parafo.innerHTML = "The priority queue is empty now";
                    parafo.style.visibility="visible";
                }

            }
        }
    }else{
        var newArr =  "";
        for( var i = 0; i < pq.size; i++ ){
            newArr += pq.arr[i] + " ";
        }
        if(pq.size > 0){
            parafo.innerHTML = newArr;
            parafo.style.visibility="visible";
        }
        else{
            parafo.innerHTML = "The priority queue is empty now";
            parafo.style.visibility="visible";
        }
    }

}

function getOut() {
    inputList = document.getElementsByClassName("list-number")[0];
    errorExtrear = document.getElementById("smsErrorRemove");
    showExtraer = document.getElementById("extraerPQ");
    errorSms = document.getElementsByClassName("smsError")[0];


    errorExtrear.style.visibility="hidden";
    errorSms.style.visibility="hidden";
    showExtraer.style.visibility="hidden";

    if(typeof pq === "undefined"){
        var arrString = inputList.value;
        if(arrString === ""){
            errorSms.innerHTML = "Empty entry is not allowed, enter numbers";
            errorSms.style.visibility="visible";
        }else{
            arrString = arrString.trim();
            var arr = arrString.split(" ");
            var containString = false;

            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === "") {
                    arr.splice(i, 1);
                }
                if (isNaN(arr[i])) {
                    containString = true;
                    errorSms.innerHTML = "Only numbers please";
                    errorSms.style.visibility = "visible";
                }
            }
            for (var i = 0; i < arr.length; i++) {
                if( arr[i] !== ""){
                    arr[i] = Number(arr[i]);
                }else{
                    arr.splice(i,1);
                }
            }

            if (!containString) {
                pq = new Priorityqueue(arr);
                showExtraer.innerHTML = "The element is: " + pq.extraer();
                showExtraer.style.visibility = "visible";
            }
        }
    }else{
        if(pq.size > 0){
            showExtraer.innerHTML = "The element is: " + pq.extraer();
            showExtraer.style.visibility = "visible";
        }else{
            showExtraer.innerHTML = "The priority queue is empty";
            showExtraer.style.visibility = "visible";
        }
    }

}

function addElement() {
    debugger
    errorAdd = document.getElementById("smsErrorAdd");
    inputElementToAdd = document.getElementById("element-to-add");

    errorAdd.style.visibility = "hidden";

    var elementAdd = inputElementToAdd.value;
    elementAdd = elementAdd.trim();

    if(elementAdd === ""){
        errorAdd.innerHTML = "Empty entry is not allowed";
        errorAdd.style.visibility = "visible";
    }else{
        if( isNaN(elementAdd) ){
            errorAdd.innerHTML = "Only one numbers please";
            errorAdd.style.visibility = "visible";
        }else{
            element = Number(elementAdd);
            if( typeof pq === "undefined"){
                arr = [element];
                pq = new Priorityqueue(arr);
            }else{
                pq.add(element)
            }
        }
    }
}

function closeAll(){
    if(typeof inputList !== "undefined" ){inputList.value = "";}
    if(typeof parafo !== "undefined" ){ parafo.style.visibility="hidden";}
    if(typeof errorSms !== "undefined" ){ errorSms.style.visibility="hidden";}

    if( typeof errorExtrear !== "undefined"){errorExtrear.style.visibility="hidden";}
    if( typeof showExtraer !== "undefined"){showExtraer.style.visibility = "hidden";}
    if( typeof errorAdd !== "undefined"){errorAdd.style.visibility = "hidden";}
    if( typeof inputElementToAdd !== "undefined"){inputElementToAdd.value = "";}

    if( typeof pq !== "undefined"){
        pq = undefined;
    }
}

