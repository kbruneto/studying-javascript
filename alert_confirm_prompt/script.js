let numero1 = prompt("primeiro numero");
let numero2 = prompt("segundo numero");
let confirmado = confirm("tem certeza que quer realizar a operação?");

if (confirmado === true) {
  alert(Number(numero1) + Number(numero2));
} else {
  alert("ok se mata então");
}
