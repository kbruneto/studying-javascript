// ------------- XXXX ------------- ( FOR CLASSICO ) ------------- XXXX -------------

const forArray = ["uva", "salada", "mista"];

for (var i = 0; i < forArray.length; i++) {
  console.log(forArray[i]);
}
console.log("--------------");

// ------------- XXXX ------------- ( FOR IN ) ------------- XXXX -------------

//               0       1       2
const array = ["uva", "maçã", "pêra"];

for (var i in array) {
  console.log(array[i]);
}
console.log("--------------");

const objeto = {
  motor: "v8",
  marca: "volks",
  modelo: "tiguan",
};

for (var i in objeto) {
  console.log(`${i}: ${objeto[i]}`);
}
console.log("--------------");

// ------------- XXXX ------------- ( FOR OF ) ------------- XXXX -------------

const arrayOF = ["nada", "a", "ver"];

for (var i of arrayOF) {
  console.log(i);
}

const objetoOF = [
  {
    nome: "juninho",
    sobrenome: "safado",
    idade: 32,
    cachorro: "salsicha",
  },
];

for (var i of objetoOF) {
  console.log();
}
