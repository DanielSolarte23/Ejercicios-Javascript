document.getElementById("compararBtn").addEventListener("click", function () {
    let peso = parseFloat(document.getElementById("numeroInput").value);
    let destino = document.getElementById("destinoInput").value;
    let resultado = document.getElementById("resultado");

    const tarifaLibra = 500;
    const tarifa1 = 5000;
    const tarifa2 = 8000;
    const tarifa3 = 10000;
    let tarifaEnvio = peso * tarifaLibra;

    switch (destino.toUpperCase()) {
        case "A":
            tarifaEnvio += tarifa1;
            resultado.innerText = `La tarifa de envío para un paquete de ${peso} libras con destino ${destino} es: $${tarifaEnvio}`;
            break;
        case "B":
            tarifaEnvio += tarifa2;
            resultado.innerText = `La tarifa de envío para un paquete de ${peso} libras con destino ${destino} es: $${tarifaEnvio}`;
            break;
        case "C":
            tarifaEnvio += tarifa3;
            resultado.innerText = `La tarifa de envío para un paquete de ${peso} libras con destino ${destino} es: $${tarifaEnvio}`;
            break;
        default:
            resultado.innerText = `Destino no válido`;
    }
});
