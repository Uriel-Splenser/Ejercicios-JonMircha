/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const eliminar = (cadena, el) => {
  if(typeof cadena === 'string' && typeof el === 'string' && cadena && el){
    const resultado = cadena.replaceAll(el, '');
    return resultado;
  }else{
    return 'Datos erróneos'
  }
}

const prueba1 = 'Prueba prueba prueba';
const prueba2 = 'Hola, buen dia';

console.log(eliminar(prueba1, 'ba'));
console.log(eliminar(prueba2, ' '));
console.log(eliminar('', ''));