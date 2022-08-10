/* 14) Programa una función para convertir grados Celsius a Fahrenheit y
viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const convertirTemperatura = (num, farCel) => {
    if(typeof num === 'number'){
      if(farCel === 'F'){
        return num * 1.8 + 32;
      }else if(farCel === 'C'){
        return (num - 32) / 1.8;
      }else{
        return 'Debes poner F o C';
      }
    }else{
      return 'No es un número';
    }
  }
  
  console.log(convertirTemperatura(12, 'F'));
  console.log(convertirTemperatura(0, 'F'));

  console.log(convertirTemperatura(53.6, 'C'));
  console.log(convertirTemperatura(32, 'C'));