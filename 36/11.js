/* 11) Programa una función que calcule el factorial de un número (El factorial
de un entero positivo n, se define como el producto de todos los números enteros
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = num => {
  if(typeof num === 'number'){
    if(num > 0){
      return num * factorial(num-1);
    }else{
      return 1;
    }
  }else{
    return 'No es un número';
  }
}

console.log(factorial(5));
console.log(factorial(6));