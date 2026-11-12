// exercício 1
console.log("Exercício 1:");
const funcao = (num1, num2) => Math.max(num1, num2);

console.log(funcao(15, 10));

// exercício 2
console.log("");
console.log("Exercício 2:");
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(200, 300));

// exercício 3
console.log("");
console.log("Exercício 3:");

const divisivel = (numero) => {
  const divisivel3 = numero % 3;
  const divisivel5 = numero % 5;

  if (typeof numero !== "number") {
    return numero;
  } else if (divisivel3 === 0 && divisivel5 === 0) {
    return "FizzBuzz";
  } else if (divisivel3 === 0) {
    return "Fizz";
  } else if (divisivel5 === 0) {
    return "Buzz";
  } else {
    return numero;
  }
};

for (i = 0; i <= 100; i++) {
  console.log(divisivel(i));
}
