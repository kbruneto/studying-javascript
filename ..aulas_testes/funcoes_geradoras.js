//funções geradoras - a cada chamada, ela retorna o próximo (.next()) valor..
// além disso, trocamos 'return' por yield
// a criação é diferente, em vez de function é function*

function* geradora() {
  //código aqui
  yield "valor 1";
  //código aqui
  yield "valor 2";
  //código aqui
  yield "valor 3";
}

const g1 = geradora();

//console.log(g1); // não retorna dessa forma, apenas diz que é um objeto gerador (objeto de arrays)
//console.log(g1.next().value); // valor 1
//console.log(g1.next().value); // valor 2
//console.log(g1.next().value); // valor 3
//console.log(g1.next().done); // aqui o JS reconhece que saiu do objeto, o valor fica undefined e o 'done' se torna 'true'.

// podemos também iterar a função com for

for (let valor of g1) {
  console.log(valor);
}
