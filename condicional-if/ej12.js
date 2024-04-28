document.getElementById("compararBtn").addEventListener("click", function () {
    let numeros = [document.getElementById("numeroInput").value, document.getElementById("numeroInput2").value, document.getElementById("numeroInput3").value];


    let resultado = document.getElementById("resultado");

    if (numeros[0] > numeros[1] && numeros[1] > numeros[2]) {
        resultado.innerText = `El numero ${numeros[0]} es mayor el ${numeros[1]} es el medio y ${numeros[2]} el menor`;
    } else if (numeros[0] > numeros[2] && numeros[2] > numeros[1]) {
        resultado.innerText = `El numero ${numeros[0]} es mayor el ${numeros[2]} es el medio y ${numeros[1]} el menor`;
    } else if (numeros[1] > numeros[0] && numeros[0] > numeros[2]) {
        resultado.innerText = `El numero ${numeros[1]} es mayor el ${numeros[0]} es el medio y ${numeros[2]} el menor`;
    } else if (numeros[1] > numeros[2] && numeros[2] > numeros[0]) {
        resultado.innerText = `El numero ${numeros[1]} es mayor el ${numeros[2]} es el medio y ${numeros[0]} el menor`;
    } else if (numeros[2] > numeros[0] && numeros[0] > numeros[1]) {
        resultado.innerText = `El numero ${numeros[2]} es mayor el ${numeros[0]} es el medio y ${numeros[1]} el menor`;
    } else if (numeros[2] > numeros[1] && numeros[1] > numeros[0]) {
        resultado.innerText = `El numero ${numeros[2]} es mayor el ${numeros[1]} es el medio y ${numeros[0]} el menor`;
    }
}
);

// let numeros = [prompt("Ingrese el primer numero"), prompt("Ingrese el segundo numero"), prompt("Ingrese el tercer numero")];



// } else if (numeros[2] > numeros[0] && numeros[0] > numeros[1]) {
//     alert(`El numero ${numeros[2]} es mayor el ${numeros[0]} es el medio y ${numeros[1]} el menor`)
// } else if (numeros[2] > numeros[1] && numeros[1] > numeros[0]) {
//     alert(`El numero ${numeros[2]} es mayor el ${numeros[1]} es el medio y ${numeros[0]} el menor`)
// } 