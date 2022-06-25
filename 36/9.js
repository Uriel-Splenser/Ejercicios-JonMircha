/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const numAleatorio = () => {
  return Math.floor(Math.random() * 100) + 501;
}

const prueba1 = numAleatorio();
const prueba2 = numAleatorio();
const prueba3 = numAleatorio();
const prueba4 = numAleatorio();

console.log(prueba1);
console.log(prueba2);
console.log(prueba3);
console.log(prueba4);