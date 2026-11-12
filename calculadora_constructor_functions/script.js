function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    const realizaConta = () => {
      try {
        const conta = eval(this.display.value);
        this.display.value = conta;
      } catch (error) {
        alert("Conta invalida!");
      }
    };

    document.addEventListener("keypress", (e) => {
      if (e.keyCode == 13) realizaConta();
    });

    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.display.value += el.innerText;
        this.display.focus();
      }
      if (el.classList.contains("btn-clear")) this.display.value = "";
      if (el.classList.contains("btn-del"))
        this.display.value = this.display.value.slice(0, -1);
      if (el.classList.contains("btn-eq")) realizaConta();
    });
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
