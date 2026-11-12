const nomes = ["kaique", "joão", "mille", "fernando", "marcelo", "henrique"];

const [nome1, nome2, nome3, ...demais] = nomes;

// console.log(nome1, nome2, nome3);
// console.log(demais);

// para "capturar, puxar (pull)" informações com ... = rest operator
// para "espalhar, distribuir, empurrar(push)" com ... = spread operator

const pessoa = {
  nome: "joão",
  sobrenome: "vuitton",
  endereco: {
    rua: "rua macaco",
    numero: 10,
    complemento: "casa",
  },
};

const {
  nome, // apenas pegando a variavel pelo nome
  endereco: { rua = "rua dois", numero: num },
  // chave: nome da = valor   , chave:  nome da variavel
  //       variavel = padrao (caso nao tenha nenhum valor, retorna "rua dois")
} = pessoa;

console.log(nome, rua, num);
