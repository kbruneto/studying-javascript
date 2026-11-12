// + Adição e Concatenação

let numero = 1;
let palavra = "oi";
console.log(numero + palavra + numero + numero); // se houver string, concatena, e não soma de forma alguma
console.log(numero + palavra, numero + numero); // para alterar a operação, obrigatório o uso da vírgula
console.log(numero + numero + numero); // soma simples

console.log(2 ** 4); // 2 elevado a 4
console.log(10 % 5); // sobra, resulta em 0 pois 10/5 da 2 para cada um e não sobra nada
console.log(10 % 6); // sobra, resulta em 4 pois 10/6 da 6 para uma pessoa, e "sobram" 4

console.log((10 / 5) * 2); // primeiro calcula o que está dentro dos parenteses

/**
 * Ordem de precedência:
 * 1) () parenteses
 * 2) ** expoente
 * 3) * / %
 * 4) + -
 */

let intfloat = 10;
let num1 = "5"; // concatena, é uma string
// "Como transformar string em number?"
// Segue a resposta:
let num2 = parseInt("5.2"); // parseInt não entende as casas decimais, próprio nome diz, somente números INTeiros
let num3 = parseFloat("5.2"); // parseFloat entende as casas decimais
let num4 = Number("5.2"); // Number se vira para entender
let num5 = Number("5"); // Number se vira para entender

console.log(intfloat + num1);
console.log(intfloat + num2);
console.log(intfloat + num3);
console.log(intfloat + num4);
console.log(intfloat + num5);
