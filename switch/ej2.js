document.getElementById("compararBtn").addEventListener("click", function () {
    let diaSemana = parseInt(document.getElementById("numeroInput").value);
    let resultado = document.getElementById("resultado");

    if (diaSemana > 7) {
        alert("Numero invalido")
    } else {
        switch (diaSemana) {
            case 1:
                resultado.innerText = "Domingo";
                break;
            case 2:
                resultado.innerText = "Lunes";
                break;
            case 3:
                resultado.innerText = "Martes";
                break
            case 4:
                resultado.innerText = "Miercoles";
                break;
            case 5:
                resultado.innerText = "Jueves";
                break;
            case 6:
                resultado.innerText = "Viernes";
                break;
            case 7:
                resultado.innerText = "Sabado";
                break;
        }
    }
});