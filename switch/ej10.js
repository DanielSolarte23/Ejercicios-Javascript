document.getElementById("compararBtn").addEventListener("click", function () {
let opcion = document.getElementById("numeroInput").value.toLowerCase();
    let resultado = document.getElementById("resultado");


    switch (opcion) {
        case "1":
            resultado.innerText = "¡Hola! Esto es un mensaje de prueba.";  
            break;
        case "2":
            let num1 = parseFloat(prompt("Ingrese el primer número"));
            let num2 = parseFloat(prompt("Ingrese el segundo número"));
            resultado.innerText = `La suma es: ${num1 + num2}`;  
            break;
        case "3":
            resultado.innerText = "Saliendo del programa...";  
            break;
        default:
            resultado.innerText ="Opción no válida. Por favor, seleccione una opción válida.";
            break;
};
});
