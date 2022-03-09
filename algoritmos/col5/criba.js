function criba(max) {
  var arr = [];

  for( var i = 0; i < parseInt(max + 5); i++ ){
    arr[i] = true;
  }

  arr[0] = false;
  arr[1] = false;

  for(  i = 4; i < arr.length; i += 2 ) {
    arr[i] = false;
  }

  for(  i = 3; i < arr.length; i += 2 ) {
    if( arr[i] ) {
      for (j = i * i; j < arr.length; j *= 2) {
        if (j % i === 0) {
          arr[j] = false;
        }
      }
    }
  }

  var arrResult = [];

  for( i = 0; i < parseInt(max + 1); i++ ){
    if( arr[i] === true ){
      arrResult.push(i);
    }
  }

  if( arrResult.length > 0 ){
    return arrResult;
  }else{
    return "There are not primes numbers"
  }
}

