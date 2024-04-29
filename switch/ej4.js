document.getElementById("compararBtn").addEventListener("click", function () {
    let num1 = parseInt(document.getElementById("numeroInput").value);
    let num2 = parseInt(document.getElementById("numeroInput2").value);
    let operador = document.getElementById("numeroInput3").value;
    let resultado = document.getElementById("resultado");


    switch (operador) {
        case "+":
            resultado.innerText = `la suma de los numero es: ${(num1 + num2)}`;
            break;
        case "-":
            resultado.innerText =`La resta de los numeros es: ${( num1 - num2)}`;
            break;
        case "*":
            resultado.innerText = `La multiplicacion de los numeros es: ${(num1 * num2)}`;
            break
        case "/":
            resultado.innerText = `La division de los numeros es ${(num1 / num2)}`;
            break;
        default:
            alert("Caracter no valido")
    }
});


