/* 20) Programa una función que valide que un texto sea un email válido,
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validarMail = cadena => {
    if(typeof cadena !== 'string'){
      return 'No es string';
    }
    return /^[\w\u00C0-\u017F]+[\.\-\w\u00C0-\u017F]*@[a-z]*.[a-z]+$/gi.test(cadena) ?
    'Mail válido' :
    'Mail inválido';
  }
  
  console.log(validarMail('Pepito Rodríguez@gmail.com'));
  console.log(validarMail('Pepito_Rodríguez@gmail.com'));
  console.log(validarMail('Pepito-Rodríguez@gmail.com'));
  console.log(validarMail(155));