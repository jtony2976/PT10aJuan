'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
     sum = sum + +num[i] * 2 ** (num.length - 1 - i);

     //comentario: +num[i] -> significa que intenta convertir el valor de num[i] en un número, si aún no lo es.
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary = (num % 2).toString();

  while (num > 1) {
      num = Math.floor(num / 2);
      binary =  (num % 2) + (binary);
  }

  return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}