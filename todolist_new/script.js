const buttonAdd = document.querySelector(".button-add");
const tasksDiv = document.querySelector(".tasks");
const taskText = document.querySelector(".task-text");

taskText.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!taskText.value) return;
    createTask(taskText.value);
  }
});

buttonAdd.addEventListener("click", () => {
  if (!taskText.value) {
    return;
  }
  createTask(taskText.value);
});

const createTask = (e) => {
  const newTask = document.createElement("div");
  tasksDiv.appendChild(newTask);
  newTask.setAttribute("class", "taskDiv");
  const textP = document.createElement("p");
  textP.innerText = `${e}`;
  newTask.appendChild(textP);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.setAttribute("class", "delete-button");
  newTask.appendChild(deleteButton);
  taskText.value = "";
  dbLocal();
};

document.addEventListener("click", (e) => {
  const clicked = e.target;
  if (clicked.classList.contains("delete-button")) {
    clicked.parentElement.remove();
    dbLocal();
  }
});

const dbLocal = () => {
  const list = [];
  const ps = document.querySelectorAll("p");

  for (let i of ps) {
    let text = i.innerText;
    list.push(text);
  }

  const jsonList = JSON.stringify(list);
  localStorage.setItem("tasks", jsonList);
};

const initList = () => {
  const tasks = localStorage.getItem("tasks");
  const taskList = JSON.parse(tasks);

  for (let i of taskList) {
    createTask(i);
  }
};
initList();
