function heapSort(arr) {
    var size = arr.length;
    build(size, arr);

    while(size > 1){
        swap(0, size - 1,arr );
        heapify(0, size-1, arr);
        size -= 1;
    }
    return arr.reverse();
}

function  build(size, arr){
    for( var i = parseInt( (size / 2) -  1 ); i >= 0; i --){
        this.heapify(i, size, arr);
    }
}

function  heapify(i, size, arr){
    if( ( ( i * 2 ) + 1 ) < size){
        if( arr[2 * i + 1] < arr[i]){
            this.swap(2 * i + 1, i, arr);
            this.heapify(2 * i + 1, size, arr);
        }

    }
    if( ( ( i * 2 ) + 2) < size){
        if( arr[2 * i + 2] < arr[i]){
            swap(2 * i + 2, i, arr);
            heapify(2 * i + 2, size, arr);
        }
    }
}

function  swap(i, j, arr){
    var aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
}

function binarySearch(arr, element){
    heapSort(arr);
    var strat = 0; var end = arr.length - 1;

    while( strat <= end ){
        var middle = parseInt( ( strat + end ) / 2);

        if( arr[middle] === element ){
            return true;
        }else{
            if( arr[middle] > element ){
                end = middle - 1;
            }else{
                strat = middle + 1;
            }
        }
    }
    return false
}

function showBinarySearch() {
    inputList = document.getElementsByClassName("list-number")[3];
    parafo = document.getElementsByClassName("showList")[3];
    errorSms = document.getElementsByClassName("smsError")[3];
    inputElement = document.getElementById("element-to-search");
    errorB = document.getElementById("smsErrorBinary");

    parafo.style.visibility="hidden";
    errorSms.style.visibility="hidden";
    errorB.style.visibility="hidden";

    var arrString = inputList.value;
    var element = inputElement.value;
    element = element.trim();

    if(arrString === ""){
        errorSms.innerHTML = "Empty entry is not allowed, enter numbers";
        errorSms.style.visibility="visible";
    }
    if(element === ""){
        errorB.innerHTML = "Empty entry is not allowed";
        errorB.style.visibility="visible";
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
        var elementIsString = false;
        if( isNaN(element) ){
            elementIsString = true;
            errorB.innerHTML = "Only one numbers please";
            errorB.style.visibility="visible";
        }

        if( !containString && ! elementIsString ){
            for(var i = 0; i < arr.length; i++){
                arr[i] = Number(arr[i]);
            }
            element = Number(element);
            var result = binarySearch(arr, element);
            if (result) {
                parafo.innerHTML = "The element is at the list";
                parafo.style.visibility = "visible";
            }else{
                parafo.innerHTML = "The element isn't at the list";
                parafo.style.visibility = "visible";
            }
        }
    }
}

function closeAll() {
    if (typeof inputList !== "undefined") {
        inputList.value = "";
    }
    if (typeof inputElement !== "undefined") {
        inputElement.value = "";
    }
    if (typeof parafo !== "undefined") {
        parafo.style.visibility = "hidden";
    }
    if (typeof errorSms !== "undefined") {
        errorSms.style.visibility = "hidden";
    }
    if (typeof errorB !== "undefined") {
        errorB.style.visibility = "hidden";
    }
}