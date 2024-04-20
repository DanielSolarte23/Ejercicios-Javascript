document.getElementById("compararBtn").addEventListener("click", function () {
    let letra = document.getElementById("numeroInput").value;
    

    let resultado = document.getElementById("resultado");

    if (["a","e","i","o","u"].includes(letra)){
            resultado.innerText = `${letra} es una vocal`;
        }else{
            resultado.innerText = `${letra} es consonante`;
        }
    }
);
