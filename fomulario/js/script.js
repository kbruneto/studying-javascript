function meuEscopo() {
  const formulario = document.querySelector(".form");
  const resposta = document.querySelector(".resposta");

  const pessoas = [
    {
      nome: "",
      sobrenome: "",
      peso: "",
      altura: "",
    },
  ];

  const envioForm = (event) => {
    event.preventDefault();
    const name = formulario.querySelector(".nome");
    const lastname = formulario.querySelector(".sobrenome");
    const kg = formulario.querySelector(".peso");
    const altitud = formulario.querySelector(".altura");

    if (name.value && lastname.value && kg.value && altitud.value !== "") {
      pessoas.push({
        nome: name.value,
        sobrenome: lastname.value,
        peso: kg.value,
        altura: altitud.value,
      });

      const lastUser = pessoas[pessoas.length - 1];
      resposta.innerHTML += `Nome: ${lastUser.nome} | Sobrenome: ${lastUser.sobrenome} | Peso: ${lastUser.peso} | Altura: ${lastUser.altura} </br>`;

      console.log(pessoas);
    } else {
      alert("preencha tudo");
    }
  };

  formulario.addEventListener("submit", envioForm);
}

meuEscopo();
