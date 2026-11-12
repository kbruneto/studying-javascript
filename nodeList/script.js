const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");
const bodyElements = getComputedStyle(document.body);
const corDoBackground = bodyElements.backgroundColor;

for (var i of ps) {
  i.style.backgroundColor = corDoBackground;
  i.style.color = "#fff";
}
