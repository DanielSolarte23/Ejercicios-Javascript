document.getElementById("compararBtn").addEventListener("click", function () {
    let contraseña = document.getElementById("numeroInput").value;
    

    let resultado = document.getElementById("resultado");

    if (contraseña == "1234"){
            resultado.innerText = "la contraseña es correcta";
        }else{
            resultado.innerText = "la contraseña es Incorrecta";
        }
    }
);
