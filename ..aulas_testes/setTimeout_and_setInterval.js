const mostrarHora = () => {
  const hora = new Date();

  console.log(
    hora.toLocaleString("pt-BR", {
      hour12: false,
    }),
  );
};

const timer = setInterval(mostrarHora, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 5000);

setTimeout(function () {
  console.log("mensagem no meio");
}, 3000);

setTimeout(function () {
  console.log("mensagem no final");
}, 6000);
