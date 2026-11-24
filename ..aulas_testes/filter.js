//retornar apenas números maiores que 10
const numbers = [5, 10, 60, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const numbersFiltrados = numbers.filter((v) => v >= 10);
// função filter sempre recebe valor, index e array
console.log(numbersFiltrados);

const pessoas = [
  { nome: "Kaique", idade: 22 },
  { nome: "João", idade: 40 },
  { nome: "Rosana", idade: 42 },
  { nome: "Felipe", idade: 33 },
  { nome: "Daniele", idade: 24 },
  { nome: "Teodoro", idade: 87 },
];

const idadeMaiorQue50 = pessoas.filter((obj) => obj.idade > 50);
const nomeMaisQue5Letras = pessoas.filter((obj) => obj.nome.length >= 5);
const terminaComE = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("e"),
);
const idadeMaior50eMaisQue5Letras = pessoas.filter(
  (obj) => obj.idade > 50 && obj.nome.length > 5,
);

console.log(idadeMaiorQue50);
console.log(nomeMaisQue5Letras);
console.log(terminaComE);
console.log(idadeMaior50eMaisQue5Letras);
