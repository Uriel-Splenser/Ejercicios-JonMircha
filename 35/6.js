/* 6) Programa una función para contar el número de veces que se repite una palabra en un
texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const contarPalabra = function(cadena, palabra){
  if(typeof cadena === 'string'){
    let contador = 0;
    const cadenaArray = cadena.split(' ');
    for(let item of cadenaArray){
      item === palabra ? contador++ : contador += 0;
    }
    return contador;
  }else{
    return 'No es una cadena'
  }
}

const prueba1 = 'Vamos a contar cuantas veces puse la palabra veces veces';
console.log(contarPalabra(prueba1, 'veces'));