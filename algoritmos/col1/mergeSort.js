function mergeSort(start, end, arr) {
    if(start < end){
        var middle = parseInt(( start + end ) / 2 );
        mergeSort(start, middle, arr);
        mergeSort( middle + 1, end, arr);
        merge(start, middle, end, arr);
    }
    return arr
}

function merge(start, middle, end, arr) {
    var arrAux = [];
    var i = start;
    var j = middle + 1;

    while ( i <= middle && j <= end){
        if( arr[i] < arr[j] ){
            arrAux.push(arr[i]);
            i += 1;
        }else{
            arrAux.push(arr[j]);
             j += 1;
        }
    }
    while( i <= middle){
        arrAux.push(arr[i]);
        i += 1;
    }
    while( j <= end){
        arrAux.push(arr[j]);
        j += 1;
    }
    var k = 0;
    while( start <= end ){
        arr[start] = arrAux[k];
        start += 1;
        k += 1;
    }
    return arr;
}

function showMergeSort() {
    inputList = document.getElementsByClassName("list-number")[2];
    parafo = document.getElementsByClassName("showList")[2];
    errorSms = document.getElementsByClassName("smsError")[2];

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
            arr = mergeSort(0, (arr.length - 1 ), arr);
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