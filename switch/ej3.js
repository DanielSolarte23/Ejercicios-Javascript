document.getElementById("compararBtn").addEventListener("click", function () {
    let mes = parseInt(document.getElementById("numeroInput").value);
    let resultado = document.getElementById("resultado");

    if (mes > 12) {
        alert("Numero invalido")
    } else {
        switch (mes) {
            case 1:
                resultado.innerText = "Enero";
                break;
            case 2:
                resultado.innerText = "Febrero";
                break;
            case 3:
                resultado.innerText = "Marzo";
                break
            case 4:
                resultado.innerText = "Abril";
                break;
            case 5:
                resultado.innerText = "Mayo";
                break;
            case 6:
                resultado.innerText = "Junio";
                break;
            case 7:
                resultado.innerText = "Julio";
                break;
            case 8:
                resultado.innerText = "Agosto";
                break;
            case 9:
                resultado.innerText = "Septiembre";
                break;
            case 10:
                resultado.innerText = "Octubre";
                break;
            case 11:
                resultado.innerText = "Noviembre";
                break;
            case 12:
                resultado.innerText = "Diciembre";
                break;
        }
    }
});

