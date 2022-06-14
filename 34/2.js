/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

function miFuncion(cadena, num){
  if (typeof cadena === 'string' && !isNaN(num)){
    let res = cadena.slice(0, num);
    return res;      
  }else{
    return 'Error en input';
  }
}

let prueba1 = miFuncion('Probandooo', 7);
let prueba2 = miFuncion(100, 'lol');
let prueba3 = miFuncion(undefined, null);
let prueba4 = miFuncion(['Juan', "Miguel", "Manuel"], 2);
let prueba5 = miFuncion('Pablito clavó un clavito', 15);

console.log(prueba1);
console.log(prueba2);
console.log(prueba3);
console.log(prueba4);
console.log(prueba5);