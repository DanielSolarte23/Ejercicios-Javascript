document.getElementById("compararBtn").addEventListener("click", function () {

    let resultado = document.getElementById("resultado");
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinado = false;

    while (!adivinado) {
        let numeroUsuario = document.getElementById("numeroInput").value.toLowerCase();
    
        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
            resultado.innerText = "Por favor ingresa un número válido entre 1 y 100.";
        } else {
            intentos++;
    
            if (numeroUsuario === numeroAleatorio) {
                adivinado = true;
                resultado.innerText =`¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
            } else if (numeroUsuario < numeroAleatorio) {
                resultado.innerText = "El número es demasiado bajo. Inténtalo de nuevo.";
            } else {
                resultado.innerText ="El número es demasiado alto. Inténtalo de nuevo.";
            }
        }
    }
});
