/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado
hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const cuantosAnios = fecha => {
  if(fecha instanceof Date){
    milisegundos = Date.now() - fecha;
    anios = Math.floor(milisegundos / 1000 / 60 / 60 / 24 / 365);
    return anios !== 1 ? `${anios} años`: '1 año';
  }else{
    return 'Debes ingresar un objeto Date'
  }
}

console.log(cuantosAnios(new Date(1984,4,23)));
console.log(cuantosAnios(new Date(2021,12,22)));
console.log(cuantosAnios(new Date(2020,10,11)));
console.log(cuantosAnios(20201011));