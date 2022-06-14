/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe.
miFuncion("Hola Mundo") devolverá 10. */

function miFuncion(cadena){
  if(typeof cadena === 'string'){
    return cadena.length;
  }else{
    return 'No es una cadena'
  }
}

let prueba1 = miFuncion('Probando');
let prueba2 = miFuncion(100);
let prueba3 = miFuncion(undefined);
let prueba4 = miFuncion(['Juan', "Miguel", "Manuel"])

console.log(prueba1);
console.log(prueba2);
console.log(prueba3);
console.log(prueba4);