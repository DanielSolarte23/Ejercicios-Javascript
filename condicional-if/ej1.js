document.getElementById("compararBtn").addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numeroInput").value);
    let resultado = document.getElementById("resultado");

    if (numero % 2 === 0) {
            resultado.innerText = "El número ingresado es par.";
        } else {
            resultado.innerText = "El número ingresado es impar.";
        }
    }
);