document.getElementById("compararBtn").addEventListener("click", function () {
    let diaSemana = document.getElementById("numeroInput").value.toLowerCase();
    

    let resultado = document.getElementById("resultado");

    if (diaSemana == "domingo"){
            resultado.innerText = `El dia ${diaSemana} NO es un dia laboral`;
        }else if (diaSemana == "sabado"){
            resultado.innerText = `El dia ${diaSemana} NO es un dia laboral`;
        }else{
            resultado.innerText = `El dia ${diaSemana} es un dia laboral`;
        }
    }
);
