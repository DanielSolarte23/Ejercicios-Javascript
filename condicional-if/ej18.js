document.getElementById("compararBtn").addEventListener("click", function () {
    let calificacion = document.getElementById("numeroInput").value;
    

    let resultado = document.getElementById("resultado");

    if (calificacion >= 9){
            resultado.innerText = "Su calificacion es 'A'";
        }else if (calificacion >= 7){
            resultado.innerText = "Su calificacion es 'B'";
        }else if (calificacion >= 5){
            resultado.innerText = "Su calificacion es 'C'";
        }else if (calificacion >= 3){
            resultado.innerText = "Su calificacion es 'D'";
        }else{
            resultado.innerText = "Su calificacion es 'F'";
        }
    }
);
