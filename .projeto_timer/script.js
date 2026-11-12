const timer = document.querySelector(".timer");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let minutos = 0;
let horas = 0;

let intervalo;

const adjustZero = () => {
  let horasFormatada = horas < 10 ? `0${horas}` : horas;
  let minutosFormatada = minutos < 10 ? `0${minutos}` : minutos;
  let segundosFormatada = segundos < 10 ? `0${segundos}` : segundos;
  timer.innerHTML = `${horasFormatada}:${minutosFormatada}:${segundosFormatada}`;
};

const timerRodando = () => {
  segundos++;
  if (segundos >= 60) {
    minutos++;
    segundos = 0;
  }
  if (minutos >= 60) {
    horas++;
    minutos = 0;
  }

  adjustZero();
};

const iniciarTimer = () => {
  clearInterval(intervalo);
  timer.style.color = "#000";
  intervalo = setInterval(timerRodando, 1000);
};

const pausarTimer = () => {
  clearInterval(intervalo);
  timer.style.color = "#d21d1d";
};

const zerarTimer = () => {
  clearInterval(intervalo);

  segundos = 0;
  minutos = 0;
  horas = 0;

  timer.style.color = "#000";
  adjustZero();
};

iniciar.addEventListener("click", iniciarTimer);
pausar.addEventListener("click", pausarTimer);
zerar.addEventListener("click", zerarTimer);
