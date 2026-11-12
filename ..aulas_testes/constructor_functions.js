// funções construtoras: constroem objetos, mas, é diferente das funções fábricas
function Pessoa(n, s, i) {
  this.nome = n;
  this.sobrenome = s;
  this.idade = i;

  this.fala = () => {
    console.log(
      `Olá, meu nome é ${this.nome} ${this.sobrenome}, e eu tenho ${this.idade} anos.`,
    );
  };
}

const p1 = new Pessoa("Kaique", "Roberto", 22);
const p2 = new Pessoa("Danilo", "Duarte", 43);

p1.fala();
p2.fala();
