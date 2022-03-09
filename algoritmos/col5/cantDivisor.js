myCriba =  criba(9999999);

function cantDivisors(numero) {
  var cant = 0;
  var indice = 0;
  var primo = myCriba[indice];

  while( primo * primo <= numero ){
    while( numero % primo === 0 ){
      cant += 1;
      numero = numero / primo  ;
    }
    indice += 1;
    primo = myCriba[indice];
  }

  if (numero > 1) {
    cant += 1;
  }

  return cant;
}

