document.getElementById("compararBtn").addEventListener("click", function () {
    let palabra = document.getElementById("numeroInput").value.toLowerCase();
    let resultado = document.getElementById("resultado");


    switch (palabra) {
        case "casa":
            resultado.innerText ="House";
            break;
        case "perro":
            resultado.innerText ="Dog";
            break;
        case "gato":
            resultado.innerText ="Cat";
            break
        case "carr":
            resultado.innerText ="Car";
            break;
        case "motocicleta":
            resultado.innerText ="Bike";
            break;
        case "futbol":
            resultado.innerText ="Soccer";
            break;

    }
});

