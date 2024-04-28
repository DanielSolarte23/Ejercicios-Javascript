document.getElementById("compararBtn").addEventListener("click", function () {
    let mes = document.getElementById("numeroInput").value.toLowerCase();
     

    let resultado = document.getElementById("resultado");

    if (mes == "marzo" || mes == "abril" || mes == "mayo"){
            resultado.innerText = `El mes de ${mes} pertenece a la estacion "Primavera"`;
        }else if (mes == "junio" || mes == "julio" || mes == "agosto"){
            resultado.innerText = `El mes de ${mes} pertenece a la estacion "Verano"`;
        }else if (mes == "septiembre" || mes == "octubre" || mes == "noviembre"){
            resultado.innerText = `El mes de ${mes} pertenece a la estacion "Otoño"`;
        }else{
            resultado.innerText = `El mes de ${mes} pertenece a la estacion "Invierno"`;
        }
    }
);

