const botao = document.querySelector(".botao");
const lista = document.querySelector(".lista");
const input = document.querySelector(".input");

document.addEventListener("click", (e) => {
  const clicado = e.target;
  if (clicado.classList.contains("apagar")) {
    clicado.parentElement.remove();
    saveTasks();
  }
});

input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!input.value) return;
    criaTarefa(input.value);
  }
});

botao.addEventListener("click", (e) => {
  if (!input.value) return;
  criaTarefa(input.value);
});

const criaTarefa = (e) => {
  const li = document.createElement("li");
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "X";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Delete task");
  li.innerText = e;
  lista.appendChild(li);
  li.appendChild(botaoApagar);
  input.value = "";
  saveTasks();
};

const saveTasks = () => {
  const lis = lista.querySelectorAll("li");
  const taskList = [];

  for (let i of lis) {
    let text = i.innerText;
    text = text.replace("X", "").trim();
    taskList.push(text);
  }

  const savedTasks = JSON.stringify(taskList);
  localStorage.setItem("tasks", savedTasks);
  console.log(savedTasks);
};

const initList = () => {
  const tasks = localStorage.getItem("tasks");
  const taskList = JSON.parse(tasks);

  for (let i of taskList) {
    criaTarefa(i);
  }
};
initList();
