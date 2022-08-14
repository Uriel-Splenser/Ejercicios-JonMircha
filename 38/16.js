/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a
una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

const montoFinal = (precio, descuento) => {
  // Validaciones
  if(typeof precio !== 'number' || typeof descuento !== 'number'){
    return 'Debes introducir dos numeros';
  }else if(precio <= 0 || descuento > 100){
    return 'El precio debe ser mayor a 0 y el descuento menor o igual a 100';
  }
  // Funcion
  resultado = precio - precio * descuento / 100;
  return Number.isInteger(resultado) ? resultado : Number.parseFloat(resultado.toFixed(2));
}

console.log(montoFinal(450, 50));
console.log(montoFinal(110.5, 88));
console.log(montoFinal(70, 100));
console.log(montoFinal(2450, 150));
console.log(montoFinal('ajsdklf', 50));