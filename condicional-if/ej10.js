document.getElementById("compararBtn").addEventListener("click", function () {
    let animal = document.getElementById("numeroInput").value;
    

    let resultado = document.getElementById("resultado");

    if (["perro", "gato", "elefante", "oso", "caballo", "lobo"].includes(animal)){
            resultado.innerText = `El animal ${animal} es un mamifero.`;
        }else if (["aguila", "loro", "gallina", "golero"].includes(animal)){
            resultado.innerText = `El animal ${animal} es un ave.`;
        }else if (["cocodrilo", "serpiente", "lagarto", "tortuga"].includes(animal)){
            resultado.innerText = `El animal ${animal} es un reptil.`;
        }else if (["rana", "lagartija"].includes(animal)){
            resultado.innerText = `El animal ${animal} es un anfibio.`;
        }else if (["tiburon", "pez payaso", "delfin", ""].includes(animal)){
            resultado.innerText = `El animal ${animal} es un pez.`;
        }else{
            resultado.innerText = `El animal ${animal} es un invertebrado.`;
        }
    }
);
