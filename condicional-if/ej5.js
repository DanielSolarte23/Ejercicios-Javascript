document.getElementById("compararBtn").addEventListener("click", function () {
    let mes = document.getElementById("numeroInput").value.toLocaleLowerCase();
    
    

    let resultado = document.getElementById("resultado");

    if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre"){
            resultado.innerText = `El mes ${mes} tiene 31 dias`;
        }else if (mes === "febrero"){
            resultado.innerText = `el mes ${mes} tiene 28 dias a exepcion de los años bisiestos que tiene 29 días.`;
        }else if(mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "novimbre"){
            resultado.innerText = `el mes ${mes} tiene 30 dias`;
        }else {
            resultado.innerText = "Por favor ingrese un mes valido";
        }
    }
);
