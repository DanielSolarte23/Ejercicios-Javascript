document.getElementById("compararBtn").addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numeroInput").value);
    let resultado = document.getElementById("resultado");
    let factorial = 1;
    let i = 1;

    while (i <= numero) {
        factorial *= i;
        i++
    }

    resultado.innerText = 5;
});