/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const esPalindromo = cadena => {
  if(typeof cadena === 'string' && cadena){
    let lowCaseCadena = cadena.toLowerCase();
    for(let i = 0, j = cadena.length-1; i < cadena.length; i++, j--){
      if(lowCaseCadena[i] !== lowCaseCadena[j]){
        return 'No es palindromo';
      }
    return 'Es palindromo';
    }
  }else{
    return 'No es una cadena'
  }
}

const prueba1 = 'Salas';
const prueba2 = 'Pepe';

console.log(esPalindromo(prueba1));
console.log(esPalindromo(prueba2));