document.getElementById("compararBtn").addEventListener("click", function () {
    let edad = document.getElementById("numeroInput").value;
    

    let resultado = document.getElementById("resultado");

    if (edad < 18){
            resultado.innerText = "Eres menor de edad";
        }else if (edad >= 65){
            resultado.innerText = "Eres jubilado";
        }else{
            resultado.innerText = "Eres mayor de edad";
        }
    }
);
