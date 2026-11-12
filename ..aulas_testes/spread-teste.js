const a = {
  nome: "João",
  sobrenome: "Rubens",
};
const b = { ...a };

a.nome = "Kaique";

// console.log(a);
const c = { ...a };

a.nome = "Maria";

// console.log(a, b, c);

// spread copia o valor referenciado, sem fazer
// alterações caso venham depois da copia
// ou seja, se eu altero "a.nome (João)" pra "Maria"
// depois de ter feito a copia com spread em "b"
// "b" continua sendo "João", "a" se torna "Maria"

const nome = ["Kaique"];
const backup = [...nome];

nome[0] = "João";

console.log(nome, backup);

// da pra usar spread como backup (teoria da minha cabeça)
