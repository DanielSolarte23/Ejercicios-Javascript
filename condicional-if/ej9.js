document.getElementById("compararBtn").addEventListener("click", function () {
    let color = document.getElementById("numeroInput").value;
    

    let resultado = document.getElementById("resultado");

    if (["rojo", "naranja", "amarillo", "verde", "azul", "indigo", "violeta"].includes(color)){
            resultado.innerText = `El color ${color} es un color del arcoiris`;
        }else{
            resultado.innerText = `El color ${color} NO es un color del arcoiris`;
        }
    }
);