/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

const numVocalesConsonantes = cadena => {
  if(typeof cadena !== 'string'){
    return 'Debes introducir una cadena'
  }
  let arrCadena = cadena.split('');
  let totalLetras = 0;
  let vocales = 0;

  arrCadena.forEach(letra => {
    if(/[a-zA-Z\u00C0-\u017F]/gi.test(letra)){
      totalLetras++;
      if(/[AEIOU\u00C0-\u00C6\u00C8-\u00CF\u00D2-\u00D6\u00D8-\u00DC]/i.test(letra)){
        vocales++;
      }
    }
  })

  let consonantes = totalLetras - vocales;

  return `Vocales: ${vocales} - Consonantes: ${consonantes}`
}

console.log(numVocalesConsonantes('Jejóx 1'));
console.log(numVocalesConsonantes('Romáááncetèè'));
console.log(numVocalesConsonantes('AAÈÈ-m'));
console.log(numVocalesConsonantes(15));
console.log(numVocalesConsonantes({'jsdklfl': 'jsdklfjsdk'}));