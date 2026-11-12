let resposta = prompt("Digite um número");

document.write(`
    O número é: ${resposta} <br/>
    Raíz quadrada: ${Number(Math.sqrt(resposta)).toFixed(2)} <br/>
    Número inteiro: ${Number.isInteger(resposta)} <br/>
    É NaN?: ${isNaN(resposta)} <br/>
    Arredondando para baixo: ${Math.floor(resposta)} <br/>
    Arredondando para cima: ${Math.ceil(resposta)} <br/>
    Com duas casas decimais: ${Number(resposta).toFixed(2)}<br/>
    `);
