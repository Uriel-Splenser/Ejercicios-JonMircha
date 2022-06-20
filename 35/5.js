/* 5) Programa una función que invierta las palabras de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const invertirCadena = function(cadena){
  if(typeof cadena === 'string' && cadena){
    let resultArray = [];
    for(let i = cadena.length-1; i >= 0; i--){
      resultArray.push(cadena[i]);
    }
    return resultArray.join('');
  }else{
    return 'No es una cadena'
  }
}

const prueba1 = 'Stringcito de prueba';
console.log(invertirCadena(prueba1));