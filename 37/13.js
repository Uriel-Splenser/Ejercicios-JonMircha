/* 13) Programa una función que determine si un número es par
o impar, pe. miFuncion(29) devolverá Impar. */

const esParImpar = num => {
    if(typeof num === 'number'){
      if(num === 0){
        return 'Es cero!';
      }else{
        return num % 2 ? 'Impar' : 'Par';
      }
    }else{
      return 'No es un número';
    }
  }
  
  console.log(esParImpar(12));
  console.log(esParImpar(0));