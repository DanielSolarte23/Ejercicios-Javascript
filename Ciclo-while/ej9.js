document.getElementById("compararBtn").addEventListener("click", function () {
    let letra = document.getElementById("numeroInput").value.toLowerCase();
    let resultado = document.getElementById("resultado");


    if (letra >= "g") {
        alert("letra incorrecta")
    } else {
        switch (letra) {
            case "a":
                resultado.innerText = "¡Agradecido por tu visita!";
                break;
            case "b":
                resultado.innerText = "¡Bienvenido a bordo!";
                break;
            case "c":
                resultado.innerText = "¡Comenzamos con buen pie!";
                break
            case "d":
                resultado.innerText = "¡Día excelente para saludarte!";
                break;
            case "f":
                resultado.innerText = "¡Firme saludo para ti!";
                break;
        }
    }
});

