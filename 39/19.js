/* 19) Programa una función que valide que un texto sea un nombre válido,
pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

const validarNombre = cadena => {
  if(typeof cadena !== 'string'){
    return 'Nombre inválido, no es un string';
  }
  return /^[a-zA-Z\u00C0-\u017F]+ [a-zA-Z\u00C0-\u017F]+$/gi.test(cadena) ?
  'Nombre válido' :
  'Nombre inválido, hay caracteres no permitidos';
}

console.log(validarNombre('Pepito Rodríguez'));
console.log(validarNombre('Pepito_Rodríguez'));
console.log(validarNombre(155));