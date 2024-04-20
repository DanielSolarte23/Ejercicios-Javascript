document.getElementById("compararBtn").addEventListener("click", function () {
    let año = parseInt(document.getElementById("numeroInput").value);
    

    let resultado = document.getElementById("resultado");

    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
            resultado.innerText = `El año ${año} es bisiesto.`;
        }else{
            resultado.innerText = `El año ${año} no es bisiesto.`;
        }
    }
);
