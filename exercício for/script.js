// ------------- XXXX ------------- ( FOR CLASSICO ) ------------- XXXX -------------

const container = document.querySelector(".container");

const elementos = [
  { tag: "p", texto: "Frase 1" }, // 0
  { tag: "div", texto: "Frase 2" }, // 1
  { tag: "footer", texto: "Frase 3" }, // 2
  { tag: "section", texto: "Frase 4" }, // 3
];

for (i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  container.innerHTML += `<${tag}> ${texto} </${tag}>`;
}
