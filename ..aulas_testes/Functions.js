// função padrão:

function nome(x, y) {
  return x + y;
}

// função const

const nomeDaFuncao = function (y, z) {
  return y * z;
};

// arrow function

const nomeFunciones = () => {
  return 4 + 4;
};

console.log(`1: ${nome(20, 10)}
2: ${nomeDaFuncao(5, 2)}
3: ${nomeFunciones()}`);
