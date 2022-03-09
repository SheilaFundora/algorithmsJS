
myCriba =  criba(9999999);

function primesFactors(numero) {
  var arr_factores_primos = [];

  var indice_numero_primo = 0 ;
  var numero_primo = myCriba[indice_numero_primo];

  while( numero_primo * numero_primo <= numero ){
    while( numero % numero_primo === 0 ){
      arr_factores_primos.push(numero_primo);
      numero = numero / numero_primo;
    }

    indice_numero_primo += 1;
    numero_primo = myCriba[indice_numero_primo];
  }


  if( numero > 1 ){
    arr_factores_primos.push(numero);
  }

  return arr_factores_primos;

}