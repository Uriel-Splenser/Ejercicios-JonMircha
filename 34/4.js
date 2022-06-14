/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
devolverá Hola Mundo Hola Mundo Hola Mundo. */

function miFuncion(cadena, num){
  if (typeof cadena === 'string' && typeof num === 'number' && num > 0){
    let res = cadena
    for(let x = 2; x <= num; x++){
      res += `\n${cadena}`;
    }
    return res;
  }else{
    return 'Error en input'
  }
}

let prueba1 = miFuncion('Hola como va', 5);
let prueba2 = miFuncion('JonMircha', 2);
let prueba3 = miFuncion('A ver aca...', 0);

console.log(prueba1);
console.log(prueba2);
console.log(prueba3);