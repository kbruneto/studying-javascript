// console.log(stringTeste.replace(/[0-2]/g, "$"));
// console.log(stringTeste.length);

const ifStringTeste = () => {
  const stringTeste = "Aa2aaa#3e";
  if (
    stringTeste.length < 12 &&
    stringTeste.length > 8 &&
    /[a-z]/g.test(stringTeste) &&
    /[A-Z]/g.test(stringTeste) &&
    /[0-9]/g.test(stringTeste)
  ) {
    return console.log("senha aceita");
  } else {
    console.log("senha invalida fdp");
  }
};

ifStringTeste();

// const fecomfe = /a-z/g.test(stringTeste);

// console.log(fecomfe);
