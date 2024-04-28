document.getElementById("compararBtn").addEventListener("click", function () {
    let num1 = document.getElementById("numeroInput").value;
    let num2 = document.getElementById("numeroInput2").value;
    

    let resultado = document.getElementById("resultado");

    if (num1 % 2 == 0 && num2 % 2 == 0){
            resultado.innerText = `los numeros ${num1} y ${num2} son divisibles entre si.`;
        }else if (num1 % 2 == 0 && !(num2 % 2 == 0)) {
            resultado.innerText = `solo el numero ${num1} es divisible entre si.`;
        }else if (!(num1 % 2 == 0) && num2 % 2 == 0){
            resultado.innerText = `Solo el numero ${num2} es divisible entre si.`;
        }else{
            resultado.innerText = "No son divisibles entre si.";
        }
    }
);
