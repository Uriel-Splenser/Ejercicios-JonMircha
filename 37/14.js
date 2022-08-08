/* 14) Programa una función para convertir grados Celsius a Fahrenheit y
viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const aFahrenheit = num => {
    if(typeof num === 'number'){
      return num * 1.8 + 32;
    }else{
      return 'No es un número';
    }
  }
  
  console.log(aFahrenheit(12));
  console.log(aFahrenheit(0));