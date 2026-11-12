let altura = document.querySelector("#altura");
let peso = document.querySelector("#peso");
let resposta = document.querySelector("#resposta");
const resultado = document.querySelector(".resultado");

const submit = () => {
  // onClick in the button "calcular"
  const alturaNumber = Number(altura.value); // take the value "altura" in the form
  const pesoNumber = Number(peso.value); // take the value "peso" in the form
  const IMC = Number(pesoNumber / (alturaNumber * alturaNumber)).toFixed(2); // calculate the "IMC"

  if (
    // verify if the values is number
    Number.isNaN(alturaNumber) === false &&
    Number.isNaN(pesoNumber) === false
  ) {
    //verify the values and edit the text and styles
    if (IMC < 18.5) {
      resposta.classList.add("resposta-red");
      resposta.innerHTML = `Seu IMC é: ${IMC} (Abaixo do peso)`;
    } else if (IMC >= 18.5 && IMC < 25) {
      resposta.classList.add("resposta-green");
      resposta.innerHTML = `Seu IMC é: ${IMC} (Peso normal)`;
    } else if (IMC >= 25 && IMC < 30) {
      resposta.classList.add("resposta-yellow");
      resposta.innerHTML = `Seu IMC é: ${IMC} (Sobrepeso)`;
    } else if (IMC >= 30 && IMC < 35) {
      resposta.classList.add("resposta-red");
      resposta.innerHTML = `Seu IMC é: ${IMC} (Obesidade grau I)`;
    } else if (IMC >= 35 && IMC < 40) {
      resposta.classList.add("resposta-red");
      resposta.innerHTML = `Seu IMC é: ${IMC} (Obesidade grau II)`;
    } else if (IMC > 40) {
      resposta.classList.add("resposta-red");
      resposta.innerHTML = `Seu IMC é: ${IMC} (Obesidade grau III)`;
    }
  } else {
    resposta.classList.add("resposta-invalid");
    resposta.innerHTML = "Insira um número válido.";
  }
};
