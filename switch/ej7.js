document.getElementById("compararBtn").addEventListener("click", function () {
    let conv = parseInt(document.getElementById("numeroInput").value);
    let valor = parseInt(document.getElementById("numeroInput2").value);
    let resultado = document.getElementById("resultado");

    switch (conv) {
        case 1:
            resultado.innerText = `El valor ${valor} centímetros equivale a ${valor / 2.54} pulgadas.`;
            break;
        case 2:
            resultado.innerText = `El valor ${valor} kilogramos equivale a ${valor * 2.20462} libras.`;
            break;
        default:
            alert("Opción no válida.");
    };
});


/* const conv = prompt("operacion a realizar 1.Centimetros a pulgadas 2. libras a kilogramos")
const valor = prompt("Ingrese un valor");

switch (conv) {
    case "1":
        alert(`el valor ${valor} centimetros equilavale a ${(valor / 2.54)} pulgadas`);
        break;
    case "2":
        alert(`el valor ${valor} kilogramos equilavale a ${(valor * 2.20462)} libras`);
        break;
} */

