const criaObjPessoa = (nome, sobrenome, idade) => {
  const armazena = { nome, sobrenome, idade };

  return `Oi, meu nome é ${armazena.nome} ${armazena.sobrenome}, e eu tenho ${idade} anos.`;
};

const pessoa1 = criaObjPessoa("Fernando", "Augusto", 32);

const pessoa2 = criaObjPessoa("João", "Victor", 15);

console.log(pessoa1);
console.log(pessoa2);
