myCriba =  criba(9999999);

function sumDivisors(numero) {
  var sum = 0;
  var indice = 0;
  var primo = myCriba[indice];

  while( primo * primo <= numero ){
    while( numero % primo === 0 ){
      sum += primo;
      numero = numero / primo  ;
    }
    indice += 1;
    primo = myCriba[indice];
  }

  if (numero > 1) {
    sum += numero;
  }

  return sum;
}