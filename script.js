// EJERCICIO 1

/* let num1 = prompt("Ingrese un numero");

if (num1 % 2 == 0 ){
    alert(`el numero ${num1} es par`);
}else{
    alert(`el numero ${num1} no es par`)
}; */

// EJERCICIO 2

/* let num1 = prompt('Ingrese un numero');
let num2 = prompt('Ingrese otro numero');

if (num1 > num2){
    alert(`el ${num1} es mayor que el ${num2}`);
}else {
    alert (`el ${num2} es mayor que el ${num1}`);
}; */

// EJERCICIO 3


/* let año = prompt("Ingresa un año:");

año = parseInt(año);

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    alert(`El año ${año} es bisiesto.`);
} else {
    alert(`El año ${año} no es bisiesto.`);
} */

// EJERCICIO 4

/* let letra = prompt("Ingrese una letra").toLocaleLowerCase();

if(["a","e","i","o","u"].includes(letra)){
    alert(`${letra} es una vocal`);
}else {
    alert(`${letra} es consonante`);
} */

// EJERCICIO 5

// let mes = prompt("Ingrese un mes").toLocaleLowerCase();

// if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
//     alert(`El mes ${mes} tiene 31 dias`)
// } else if (mes === "febrero") {
//     alert(`el mes ${mes} tiene 28 dias a exepcion de los años bisiestos que tiene 29 días.`);
// } else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "novimbre") {
//     alert(`el mes ${mes} tiene 30 dias`)
// } else { 
//     alert("Por favor ingrese un mes valido") 
// };

// EJERCICIO 6

// let calificacion = prompt('Ingrese su calificacion');

// if (calificacion >= 4.5){
//     alert('su calificacion es A');
// }else if(calificacion >= 3.5){
//     alert('su calificacion es B');
// }else if(calificacion >= 2.5){
//     alert('su calificacion es C');
// }else if (calificacion >= 1.5){
//     alert('su calificacion es D');
// }else{
//     alert('su calificacion es F')
// };

// EJERCICIO 7

// let temperatura = prompt('Ingrese una temperatura en grados Celsus');

// temperaturaF = temperatura * 1.8 + 32

// alert (`${temperatura} grados Celsius equivale a ${temperaturaF} grados Fahrenheit`);

// EJERCICIO 8

// function validarContraseña(){
//     let texto = document.getElementById("Contraseña").value;
//     let mensaje = document.getElementById("mensaje");

//     if(texto == "1234"){
//         mensaje.innerText = "la contraseña es correcta";
//     }else{
//         mensaje.innerHTML = "la contraseña es Incorrecta"
//     }
// }

// EJERCICIO 9

/*     let texto = prompt("Ingresa un color").toLowerCase();

    if (["rojo", "naranja", "amarillo", "verde", "azul", "indigo", "violeta"].includes(texto)) {
        alert(`El color ${texto} es un color del arcoiris`)
    } else {
        alert(`El color ${texto} NO es un color del arcoiris`)
    } */

// EJERCICIO 10

// let animal = prompt("Ingresa un animal").toLowerCase();

// if(["perro", "gato", "elefante", "oso", "caballo", "lobo"].includes(animal)){
//     alert (`El animal ${animal} es un mamifero`);
// }else if (["aguila", "loro", "gallina", "golero"].includes(animal)){
//     alert(`El animal ${animal} es un ave.`)
// }else if (["cocodrilo", "serpiente", "lagarto", "tortuga"].includes(animal)){
//     alert(`El animal ${animal} es un reptil.`)
// }else if (["rana", "lagartija"].includes(animal)){
//     alert(`El animal ${animal} es un anfibio.`)
// }else if (["tiburon", "pez payaso", "delfin", ""].includes(animal)){
//     alert(`El animal ${animal} es un pez.`)
// }else{
//     alert(`El animal ${animal} es un invertebrado.`)
// }


