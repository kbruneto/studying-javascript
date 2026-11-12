const criaCalculadora = () => {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.display.value = "";
        }

        if (el.classList.contains("btn-del")) {
          this.display.value = this.display.value.slice(0, -1);
        }

        if (el.classList.contains("btn-eq")) {
          let conta = this.display.value;

          try {
            conta = eval(conta);
            if (!conta) {
              alert("Conta invalida!");
            } else {
              this.display.value = conta;
            }
          } catch (e) {
            alert("Conta invalida!");
          }
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
};

const calculadora = criaCalculadora();
calculadora.inicia();
