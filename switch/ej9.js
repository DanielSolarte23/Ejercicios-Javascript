document.getElementById("compararBtn").addEventListener("click", function () {
  let Celebracion = document.getElementById("numeroInput").value.toLowerCase();
  let resultado = document.getElementById("resultado");

  switch (Celebracion) {
    case "cumpleaños":
      resultado.innerText = "¡Feliz cumpleaños!";
      break;
    case "boda":
      resultado.innerText = "¡Felicidades en su boda!";
      break;
    case "graduacion":
      resultado.innerText = "¡Felicidades por tu graduacion!";
      break;
    default:
      resultado.innerText = "Celebracion no valida";
  }
});
