const nomes = ["Eduardo", "João", "Davi", "Kaique"];
const novo = [...nomes]; // o spread operator resolve o problema de ambas as variáveis referenciarem o mesmo valor

novo.pop();
novo.push("olá"); // push adiciona elementos no final do array, unshift adiciona elementos no inicio do array (não muito utilizado)

console.log(nomes);
console.log(novo);

// ----------------------------------------xxxxxx---------------------------------------

// também podemos guardar numa variável o que o pop (final) ou shift (começo) remove do array.

const frutas = ["Uva", "Maça", "Pêra"];
const removido = frutas.shift();

console.log(frutas, removido);
