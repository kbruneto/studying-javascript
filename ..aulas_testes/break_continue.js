numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (var i of numeros) {
  // continue corta o numero 2, e continua para a próximas iterações
  if (i === 2) {
    continue;
  }
  console.log(i);
  // break ele breca o laço, para, não continua mais nada
  if (i === 5) {
    break;
  }
}
