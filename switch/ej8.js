document.getElementById("compararBtn").addEventListener("click", function () {
  let valor = document.getElementById("numeroInput").value.toLowerCase();
  let resultado = document.getElementById("resultado");

  switch (true) {
    case !isNaN(valor):
      resultado.innerText = "Es un número";
      break;
    case valor === "true" || valor === "false":
      resultado.innerText = "Es un valor booleano";
      break;
    case valor.startsWith("{") && valor.endsWith("}"):
      resultado.innerText = "Es un objeto";
      break;
    default:
      resultado.innerText = "Es una cadena de texto";
  }
});
