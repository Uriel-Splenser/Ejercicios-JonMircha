/* 3) Programa una función que dada una String te devuelva un Array de textos separados por
cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

function miFuncion(cadena, caracter){
  if(typeof cadena === 'string' && typeof caracter === 'string'){
    let res = cadena.split(caracter);
    return res;
  }else{
    return 'Error en input';
  }
}

let prueba1 = miFuncion('Probandooo esta funcion', " ");
let prueba2 = miFuncion(100, 'lol');
let prueba3 = miFuncion(undefined, null);
let prueba4 = miFuncion(['Juan', "Miguel", "Manuel"], " ");
let prueba5 = miFuncion('Pablito clavó un clavito', 15);
let prueba6 = miFuncion('Pablito clavó un clavito, que clavito clavó Pablito?', ',');
let prueba7 = miFuncion('Acá le voy a pasar un separador que no está presente', ".");

console.log(prueba1);
console.log(prueba2);
console.log(prueba3);
console.log(prueba4);
console.log(prueba5);
console.log(prueba6);
console.log(prueba7);