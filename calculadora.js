const { createElement } = require("react");

function sumar() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num1").value);


    resultado = n1 + n2;

    document.getElementById("resultado").textContent = resultado;
}

function restar(a,b) {
  return a-b;
}

function multiplicar(a,b) {
  return a*b;
}

function dividir(a,b) {
  if (b<=0) {
    return console.log("No se puede dividir por 0!!!")
  }else{
    return a/b;
  }
}

function potencia(base,exponente) {
  return base**exponente;
}

function raiz(x) {
  return Math.sqrt(x);
}

function modulo(a,b) {
  return a%b;
}

function menu() {
    const op = document.getElementById("op").value;
    const out = document.getElementById("resultado");

  switch (op) {
  case 1:
    console.log(sumar(2,2))
    break;
  case 2:
    console.log(restar(2,2))
    break;
  case 3:
    console.log(multiplicar(2,2))
    break;
  case 4:
    console.log(dividir(2,2))
    break;
  case 5:
    console.log(potencia(2,2))
    break;
  case 6:
    console.log(raiz(2,2))
    break;
  case 7:
    console.log(modulo(2,2))
    break;
  default:
    console.log("Elija una opción valida!")
  }

}
