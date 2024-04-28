document.getElementById("compararBtn").addEventListener("click", function () {
    let caracter = document.getElementById("numeroInput").value;


    let resultado = document.getElementById("resultado");

    if (caracter >= "A" && caracter <= "Z") {
        resultado.innerText = `${caracter} Es una letra mayuscula`;
    } else if (caracter >= "a" && caracter <= "z") {
        resultado.innerText = `${caracter} Es una letra minuscula`;
    } else if (caracter >= 0 && caracter <= 100000000) {
        resultado.innerText = `${caracter} es un numero`;
    } else {
        resultado.innerText = `${caracter} es un simbolo`;
    }
}
);

// let caracter = prompt("Ingrese un caracter");

// if(caracter.length > 1){
//     alert("ingresa un solo caracter")
// }else if (caracter >= "A" && caracter <= "Z"){
//     alert("Es una letra mayuscula");
// }else if (caracter >= "a" && caracter <= "z"){
//     alert("Es una letra minuscula");
// }else if (caracter >= 0 && caracter <= 9){
//     alert("es un numero");
// }else{
//     alert("es un simbolo");
// }