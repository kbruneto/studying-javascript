const funcao = (a) => {
  if (a !== 2) {
    throw "precisa ser 2";
  }
  return a;
};

try {
  console.log(funcao(1));
} catch (error) {
  console.log("mano,", error);
}

// usando o finally:

const recebeData = (data) => {
  if (data && !(data instanceof Date)) {
    throw "Não é uma data!";
  }
  return data.toLocaleString("pt-BR");
};

try {
  const dataok = new Date("08/11/2026 10:20:30");
  const teste = recebeData(dataok);
  console.log(teste);
} catch (err) {
  console.log(err);
} finally {
  console.log("Sempre executarei.");
}
