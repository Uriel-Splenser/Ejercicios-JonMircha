/* 12) Programa una función que determine si un número es primo (aquel que solo
es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const esPrimo = num => {
    if(typeof num === 'number'){
      let contador = 0;
      for(let i = 1; i < num; i++){
        if(!(num % i)){
          contador++;
        }
      }
      if(contador === 1 && num !== 1){
        return true;
      }else{
        return false;
      }
    }else{
      return 'No es un número';
    }
  }
  
  console.log(esPrimo(5));
  console.log(esPrimo(6));