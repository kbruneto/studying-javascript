function getNotaProva(notaProva) {
  switch (notaProva) {
    case 0:
      return console.log("pessimo");
    case 1:
      return console.log("ruim");
    case 2:
      return console.log("meu deus");
    case 3:
      return console.log("mais ou menos");
    case 4:
      return console.log("ok, passou de ano");
    case 5:
      return console.log("nota máxima!! parabéns vc é pica");
    default:
      console.log("a nota é de 0 a 5 cabaço");
  }
}

const teste = getNotaProva(5);
