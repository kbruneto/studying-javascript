// ---------------------- MÉTODO MAIS LONGO, MAS FUNCIONA ---------------------------

// let okdata = document.querySelector(".dataok");
// let okhora = document.querySelector(".horaok");
// const data = new Date();
// const verifyDiaSemana = (data) => {
//   if ((data = 0)) {
//     return "Domingo";
//   } else if ((data = 1)) {
//     return "Segunda-feira";
//   } else if ((data = 2)) {
//     return "Terça-feira";
//   } else if ((data = 3)) {
//     return "Quarta-feira";
//   } else if ((data = 4)) {
//     return "Quinta-feira";
//   } else if ((data = 5)) {
//     return "Sexta-feira";
//   } else if ((data = 6)) {
//     return "Sábado";
//   } else {
//     return "data invalida";
//   }
// };
// const verifyMes = (data) => {
//   if ((data = 0)) {
//     return "Janeiro";
//   } else if ((data = 0)) {
//     return "Fevereiro";
//   } else if ((data = 0)) {
//     return "Março";
//   } else if ((data = 0)) {
//     return "Abril";
//   } else if ((data = 0)) {
//     return "Maio";
//   } else if ((data = 0)) {
//     return "Junho";
//   } else if ((data = 0)) {
//     return "Julho";
//   } else if ((data = 0)) {
//     return "Agosto";
//   } else if ((data = 0)) {
//     return "Setembro";
//   } else if ((data = 8)) {
//     return "Outubro";
//   } else if ((data = 0)) {
//     return "Novembro";
//   } else if ((data = 0)) {
//     return "Dezembro";
//   } else {
//     return "data invalida";
//   }
// };
// const adjustMinutes = (data) => {
//   if (data.getMinutes() < 10) {
//     return `0${data.getMinutes()}`;
//   } else {
//     return data.getMinutes();
//   }
// };
// okdata.innerHTML = `${verifyDiaSemana(data.getDay())}, ${data.getDate()} de ${verifyMes(data.getUTCMonth())} de ${data.getFullYear()}.`;
// okhora.innerHTML = `${data.getHours()}:${adjustMinutes(data)}`;
// console.log(datatlgd());
//
//
//
//

// ---------------------- MELHOR MÉTODO (documentação) -------------------------
const h1 = document.querySelector(".shit h1");
const data = new Date();

h1.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "medium",
});

// ------------------- Outra opção -------------------------

// const diaSemana = data.getDay();
// const verifyDiaSemana = (diaSemana) => {
//   const diasDaSemana = [
//     "Domingo",
//     "Segunda-feira",
//     "Terça-Feira",
//     "Quarta-feira",
//     "Quinta-Feira",
//     "Sexta-Feira",
//     "Sábado",
//   ];
//   return diasDaSemana[diaSemana];
// };
