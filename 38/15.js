/* 15) Programa una función para convertir números de base binaria a decimal y viceversa,
pe. miFuncion(100,2) devolverá 4 base 10. */

const binarioDecimal = (num, base) => {
  // Validaciones
  if(typeof num !== 'number' || typeof base !== 'number'){
    return 'Debes introducir dos numeros';
  }else if(base !== 2 && base !== 10){
    return 'La base debe ser 2 o 10';
  }else if(base === 2 && /[^01]/.test(num.toString())){
    return 'Si la base es 2 solo debes introducir 0s y 1s en el numero'
  }
  // Conversor binario a decimal
  if(base === 2){
    numArr = num.toString().split('').reverse();
    let resultado = 0;
    let contador = 1
    for(let i = 0; i < numArr.length; i++){
      if(numArr[i] === '1'){
        resultado += contador;
      }
      contador *= 2;
    }
    return resultado;
  }
  // Conversor decimal a binario
  let resultado = [];
  let contador = 1;
  // Determino como contador el numero mas alto pero menor a num
  while(contador*2 <= num){
    contador *= 2;
  }
  // Desde el contador voy dividiendo a la mitad y agregando 0s y 1s
  for(let i = contador; i >= 1; i/=2){
    if(i <= num){
      resultado.push('1');
      num -= i;
    }else{
      resultado.push('0');
    }
  }
  
  return parseInt(resultado.join(''));
}

console.log(binarioDecimal(3000, 2));
console.log(binarioDecimal(11010, 2));
console.log(binarioDecimal(0001, 2));

console.log(binarioDecimal(26, 10));
console.log(binarioDecimal(1, 10));
console.log(binarioDecimal(945, 10));