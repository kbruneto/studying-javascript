let controle = 0;

// while - checa a condição e depois executa, se a condição for verdadeira

while (controle <= 10) {
  console.log(controle);
  controle++;
}

console.log("                    ");
controle = 10;
// do while - primeiro executa a função, depois checa o valor.. se for verdadeiro,
// ele executa novamente, se for falso, ele não executa mais

do {
  console.log(controle);
  controle++;
} while (controle <= 10);

// acho que o do while é bom pra vc ter um gatilho antes da checagem,
// e o while quando vc já tem algum valor e precisa checar antes de executar determinada função
