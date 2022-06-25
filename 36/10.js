/* 10) Programa una función que reciba un número y evalúe si es capicúa o no
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const esCapicua = num => {
  if(typeof num === 'number'){
    return num.toString().split('').reverse().join('') === num.toString() ?
    'Es capicua':
    'No es capicua';
  }else{
    return 'No ingresaste un número'
  }
}

const prueba1 = esCapicua(1009);
const prueba2 = esCapicua(202);
const prueba3 = esCapicua('Hola');
const prueba4 = esCapicua([1, 3]);

console.log(prueba1);
console.log(prueba2);
console.log(prueba3);
console.log(prueba4);