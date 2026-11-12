const criaMultiplicador = (multiplicador) => {
  return function (numero) {
    return numero * multiplicador;
  };
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);

console.log(duplica(6));
console.log(triplica(6));
