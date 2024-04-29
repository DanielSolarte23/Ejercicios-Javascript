document.getElementById("compararBtn").addEventListener("click", function () {
    let numero = document.getElementById("numeroInput").value.toLowerCase();
    let resultado = document.getElementById("resultado");
    let i = 1;
    let suma = 0;

    while (i <= numero){
        suma += i;
        i++;
    }

    resultado.innerText = `La suma de los números enteros positivos desde 1 hasta ${numero} es: ${suma}`;

});
