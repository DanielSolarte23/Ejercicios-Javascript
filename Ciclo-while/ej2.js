document.getElementById("compararBtn").addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numeroInput").value);
    let resultado = document.getElementById("resultado");
    let i = numero;

    while (i >= 1) {
        console.log(i);
        i--;
    }

resultado.innerText = i;
});

