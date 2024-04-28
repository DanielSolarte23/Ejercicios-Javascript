document.getElementById("compararBtn").addEventListener("click", function () {
    let numero = document.getElementById("numeroInput").value;
    let resultado = document.getElementById("resultado");

    if (numero < 0) {
        resultado.innerText = `El numero ${numero} es negativo`;
    } else if (numero == 0) {
        resultado.innerText = `El numero es 0`;
    } else {
        resultado.innerText = `El numero ${numero} es positivo`;
    }
});


