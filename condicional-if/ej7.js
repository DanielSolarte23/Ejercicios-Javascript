document.getElementById("compararBtn").addEventListener("click", function () {
    let temperatura = document.getElementById("numeroInput").value;

    let resultado = document.getElementById("resultado");
    
    let temperaturaF = temperatura * 1.8 + 32;

    resultado.innerText = `${temperatura} grados Celsius equivale a ${temperaturaF} grados Fahrenheit`;
});
