document.getElementById("compararBtn").addEventListener("click", function () {
    let calificacion = document.getElementById("numeroInput").value;
    

    let resultado = document.getElementById("resultado");

    if (calificacion >= 4.5){
            resultado.innerText = 'su calificacion es A';
        }else if (calificacion >= 3.5){
            resultado.innerText = 'su calificacion es B';
        }else if (calificacion >= 2.5){
            resultado.innerText = 'su calificacion es C';
        }else if (calificacion >= 1.5){
            resultado.innerText = 'su calificacion es D';
        }else{
            resultado.innerText = 'su calificacion es F';
        }
    }
);

