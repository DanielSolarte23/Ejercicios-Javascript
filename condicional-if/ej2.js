document.getElementById("compararBtn").addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numeroInput").value);
    let numero2 = parseInt(document.getElementById("numeroInput2").value);

    let resultado = document.getElementById("resultado");

    if (numero > numero2) {
            resultado.innerText = `el numero ${numero} es mayor que el numero ${numero2}`;
        } else if (numero == numero2){
            resultado.innerText = `el numero ${numero2} y el numero ${numero} son iguales`;
        }else{
            resultado.innerText = `el numero ${numero2} es mayor que el numero ${numero}`;
        }
    }
);