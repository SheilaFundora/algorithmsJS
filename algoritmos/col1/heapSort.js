
function heapSort(arr) {
    var size = arr.length;
    build(size, arr);

    while(size > 1){
        swap(0, size - 1,arr );
        heapify(0, size - 1, arr);
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
    if( ( i * 2 ) + 1 < size){
        if( arr[2 * i + 1] < arr[i]){
            this.swap(2 * i + 1, i, arr);
            this.heapify(2 * i + 1, size, arr);
        }
    }
    if( ( i * 2 ) + 2 < size ){
        if( arr[ (2 * i) + 2] < arr[i]){
            swap((2 * i) + 2, i, arr);
            heapify((2 * i) + 2, size, arr);
        }
    }
}

function  swap(i, j, arr){
    var aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
}

function showHeapSort() {
    debugger
    inputList = document.getElementsByClassName("list-number")[1];
    parafo = document.getElementsByClassName("showList")[1];
    errorSms = document.getElementsByClassName("smsError")[1];

    parafo.style.visibility="hidden";
    errorSms.style.visibility="hidden";

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
            arr = heapSort(arr);
            var newArr =  "";
            for( var i = 0; i < arr.length; i++ ){
                newArr += arr[i] + " ";
            }
            parafo.innerHTML = newArr;
            parafo.style.visibility="visible";
        }
    }
}

function closeAll() {
    if (typeof inputList !== "undefined") {
        inputList.value = "";
    }
    if (typeof parafo !== "undefined") {
        parafo.style.visibility = "hidden";
    }
    if (typeof errorSms !== "undefined") {
        errorSms.style.visibility = "hidden";
    }
}