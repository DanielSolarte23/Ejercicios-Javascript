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

//EJERCICIO 1.1

// let numero = prompt("Ingrese un numero");

// if (numero < 0){
//     alert(`El numero ${numero} es negativo`);
// }else if (numero == 0){
//     alert ("El numero es 0");
// }else {
//     alert(`El numero ${numero} es positivo`);
// };

//EJERCICIO 1.2

// let numeros = [prompt("Ingrese el primer numero"), prompt("Ingrese el segundo numero"), prompt("Ingrese el tercer numero")];

// if (numeros[0] > numeros[1] && numeros[1] > numeros[2]) {
//     alert(`El numero ${numeros[0]} es mayor el ${numeros[1]} es el medio y ${numeros[2]} el menor`)
// } else if (numeros[0] > numeros[2] && numeros[2] > numeros[1]) {
//     alert(`El numero ${numeros[0]} es mayor el ${numeros[2]} es el medio y ${numeros[1]} el menor`)
// } else if (numeros[1] > numeros[0] && numeros[0] > numeros[2]) {
//     alert(`El numero ${numeros[1]} es mayor el ${numeros[0]} es el medio y ${numeros[2]} el menor`)
// } else if (numeros[1] > numeros[2] && numeros[2] > numeros[0]) {
//     alert(`El numero ${numeros[1]} es mayor el ${numeros[2]} es el medio y ${numeros[0]} el menor`)
// } else if (numeros[2] > numeros[0] && numeros[0] > numeros[1]) {
//     alert(`El numero ${numeros[2]} es mayor el ${numeros[0]} es el medio y ${numeros[1]} el menor`)
// } else if (numeros[2] > numeros[1] && numeros[1] > numeros[0]) {
//     alert(`El numero ${numeros[2]} es mayor el ${numeros[1]} es el medio y ${numeros[0]} el menor`)
// } 

//EJERCICIO 1.3

/* let diaSemana = prompt("Ingrese un dia de la semana").toLowerCase();

if (diaSemana == "domingo" || diaSemana == "sabado"){
    alert(`El dia ${diaSemana} NO es un dia laboral`)
}else {
    alert(`El dia ${diaSemana} es un dia laboral`)
} */

// EJERCICIO 1.4

// let mes = prompt("Ingrese un mes").toLowerCase();

// if (mes == "marzo" || mes == "abril" || mes == "mayo"){
//     alert(`El mes de ${mes} pertenece a la estacion "Primavera"`);
// }else if (mes == "junio" || mes == "julio" || mes == "agosto"){
//     alert(`El mes de ${mes} pertenece a la estacion "Verano"`);
// }else if (mes == "septiembre" || mes == "octubre" || mes == "noviembre"){
//     alert(`El mes de ${mes} pertenece a la estacion "Otoño"`);
// }else{
//     alert(`El mes de ${mes} pertenece a la estacion "Invierno"`);
// }

// EJERCICIO 1.5

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad < 18){
//     alert("Eres menor de edad");
// }else if (edad >= 65){
//     alert("Eres jubilado")
// }else{
//     alert("Eres mayor de edad")
// }

//EJERCICIO 1.6

// let caracter = prompt("Ingrese un caracter");

// if(caracter.length > 1){
//     alert("ingresa un solo caracter")
// }else if (caracter >= "A" && caracter <= "Z"){
//     alert("Es una letra mayuscula");
// }else if (caracter >= "a" && caracter <= "z"){
//     alert("Es una letra minuscula");
// }else if (caracter >= 0 && caracter <= 9){
//     alert("es un numero");
// }else{
//     alert("es un simbolo");
// }

//EJERCICIO 1.7 

// let num1 = parseInt(prompt("Ingresa un numero"));
// let num2 = parseInt(prompt("Ingresa el segundo numero"));

// if (num1 % 2 == 0 && num2 % 2 == 0){
//     alert(`los numeros ${num1} y ${num2} son divisibles entre si.`);
// }else if (num1 % 2 == 0 && !(num2 % 2 == 0)) {
//     alert(`solo el numero ${num1} es divisible entre si`);
// }else if (!(num1 % 2 == 0) && num2 % 2 == 0){
//     alert(`Solo el numero ${num2} es divisible entre si`);
// }else{
//     alert("No son divisibles entre si.")
// };

// EJERCICIO 1.8

// let calificacion = prompt("Ingrese su calificacion");

// if(calificacion >= 9){
//     alert("Su calificacion es 'A'")
// }else if (calificacion >= 7){
//     alert("Su calificacion es 'B'")
// }else if (calificacion >= 5){
//     alert("Su calificacion es 'C'")
// }else if (calificacion >= 3){
//     alert("Su calificacion es 'D'")
// }else{
//     alert("Su calificacion es 'F'")
// }

//EJERCICIO 2.1

// let letra = prompt("Ingrese Una letra entre A,B,C,D,E,F").toLowerCase();

// if (letra >= "g") {
//     alert("letra incorrecta")
// } else {
//     switch (letra) {
//         case "a":
//             alert("¡Agradecido por tu visita!");
//             break;
//         case "b":
//             alert("¡Bienvenido a bordo!");
//             break;
//         case "c":
//             alert("¡Comenzamos con buen pie!");
//             break
//         case "d":
//             alert("¡Día excelente para saludarte!");
//             break;
//         case "f":
//             alert("¡Firme saludo para ti!");
//             break;
//     }
// }
 
//EJERCICIO 2.2

// let diaSemana = prompt("Ingrese un numero del 1 a 7");

// switch (diaSemana) {
//     case "1":
//         alert("Domingo");
//         break;
//     case "2":
//         alert("Lunes");
//         break;
//     case "3":
//         alert("Martes");
//         break
//     case "4":
//         alert("Miercoles");
//         break;
//     case "5":
//         alert("Jueves");
//         break;
//     case "6":
//         alert("Viernes");
//         break;
//     case "7":
//         alert("Sabado");
//         break;
//     default:
//         alert("Numero incorrecto");
//         break;
// }

//EJERCICIO 2.3

// let mes = prompt("Ingrese un numero del 1 al 12");

// switch (diaSemana) {
//     case "1":
//         alert("Enero");
//         break;
//     case "2":
//         alert("Febrero");
//         break;
//     case "3":
//         alert("Marzo");
//         break
//     case "4":
//         alert("Abril");
//         break;
//     case "5":
//         alert("Mayo");
//         break;
//     case "6":
//         alert("Junio");
//         break;
//     case "7":
//         alert("Julio");
//         break;
//     case "8":
//         alert("Agosto");
//         break
//     case "9":
//         alert("Septiembre");
//         break;
//     case "10":
//         alert("Octubre");
//         break;
//     case "11":
//         alert("Noviembre");
//         break;
//     case "12":
//         alert("Diciembre ");
//         break;
//     default:
//         alert("Numero incorrecto");
//         break;
// }

//EJERCICIO 2.4

/* let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa otro numero"));
let operador = prompt("Ingrese la operacion que desea realizar (+, -, *, /)");

switch (operador) {
    case "+" :
        alert("la suma de los numero es "+ ( num1 + num2));
        break;
    case "-" :
        alert("La resta de los numeros es " + ( num1 - num2));
        break;
    case "*" :
        alert("La multiplicacion de los numeros es "+ (num1 * num2));
        break;
    case "/" :
        alert("La division de los numeros es " + (num1 / num2));
        break;
    default:
        alert("Operador no valido");
        break;
} */

//EJERCICIO 2.5

// let palabra = prompt("Ingrese una palabra (casa, perro, gato, carro, motocicleta, futbol)").toLowerCase();

// switch (palabra) {
//     case "casa":
//         alert("House");
//         break;
//     case "perro":
//         alert("Dog");
//         break;
//     case "gato":
//         alert("Cat");
//         break;
//     case "carro":
//         alert("Car");
//         break;
//     case "motocicleta":
//         alert("Bike");
//         break;
//     case "futbol":
//         alert("Soccer");
//         break;
// }

//EJERCICIO 2.6

// const tarifaLibra = 500;
// const tarifa1 = 5.000;
// const tarifa2 = 8.000;
// const tarifa3 = 10.000;

// let peso = parseFloat(prompt("Ingrese el peso del paquete en libras:"));
// let destino = prompt("Ingrese el destino (A, B, o C):").toUpperCase();
// let tarifaEnvio = peso * tarifaLibra;


// switch (destino) {
//     case "A":
//         tarifaEnvio += tarifa1;
//         alert(`La tarifa de envío para un paquete de ${peso} libras con destino ${destino} es: $${tarifaEnvio}`);
//         break;
//     case "B":
//         tarifaEnvio += tarifa2;
//         alert(`La tarifa de envío para un paquete de ${peso} libras con destino ${destino} es: $${tarifaEnvio}`);
//         break;
//     case "C":
//         tarifaEnvio += tarifa3;
//         alert(`La tarifa de envío para un paquete de ${peso} libras con destino ${destino} es: $${tarifaEnvio}`);
//         break;
//     default:
//         alert("Destino no válido");
//         break;
// }

//EJERCICIO 2.7

/* const conv = prompt("operacion a realizar 1.Centimetros a pulgadas 2. libras a kilogramos")
const valor = prompt("Ingrese un valor");

switch (conv) {
    case "1":
        alert(`el valor ${valor} centimetros equilavale a ${(valor / 2.54)} pulgadas`);
        break;
    case "2":
        alert(`el valor ${valor} kilogramos equilavale a ${(valor * 2.20462)} libras`);
        break;
} */

// EJERCICIO 2.8

/* let valor = prompt("Ingrese un valor");

switch (true) {
    case !isNaN(valor):
        alert("Es un número");
        break;
    case valor === "true" || valor === "false":
        alert("Es un valor booleano");
        break;
    case valor.startsWith("{") && valor.endsWith("}"):
        alert("Es un objeto");
        break;
    default:
        alert("Es una cadena de texto");
} */

// EJERCICIO 2.9

/* 
let celebracion = prompt("¿Que estas celebrando?, Cumpleaños, boda, graduacion").toLowerCase();

switch (celebracion) {
    case "cumpleaños":
        alert("¡Feliz cumpleaños!");
        break;
    case "boda":
        alert("¡Felicidades en su boda!");
        break;
    case "graduacion":
        alert("¡Felicidades por tu graduacion!");
        break;
    default:
        alert("Celebracion no valida");
        break;
} */

// EJERCICIO 2.99

// function mostrarMenu() {
//     let opcion = prompt(`Seleccione una opción:
//     1. Mostrar mensaje
//     2. Sumar dos números
//     3. Salir`);

//     switch (opcion) {
//         case "1":
//             alert("¡Hola! Esto es un mensaje de prueba.");
//             mostrarMenu();
//             break;
//         case "2":
//             let num1 = parseFloat(prompt("Ingrese el primer número"));
//             let num2 = parseFloat(prompt("Ingrese el segundo número"));
//             alert(`La suma es: ${num1 + num2}`);
//             mostrarMenu();
//             break;
//         case "3":
//             alert("Saliendo del programa...");
//             break;
//         default:
//             alert("Opción no válida. Por favor, seleccione una opción válida.");
//             mostrarMenu();
//             break;
//     }
// }

// mostrarMenu();

// EJERCICIO 3.0

/* let numero = parseInt(prompt("Ingresa un numero"));
let i = 1;
let suma = 0;

while (i <= numero){
    suma += i;
    i++;
}
alert(`La suma de los números enteros positivos desde 1 hasta ${numero} es: ${suma}`); */

// EJERCICIO 3.1

// let numero = parseInt(prompt("Ingrese un número entero positivo:"));
// let suma = 0;
// let i = 1;

// while (i <= numero) {
//     suma += contador;
//     i++;
// }

// console.log(`La suma de los números enteros positivos desde 1 hasta ${numero} es: ${suma}`);

// EJERCICIO 3.2

/* let numero = parseInt(prompt("Ingrese un número entero positivo:"));
let i = numero;

while (i >= 1) {
    console.log(i);
    i--;
}

console.log(i);
 */

// EJERCICIO 3.3

// let numero = parseInt(prompt('Ingresa un numero entero positivo'));
// let factorial = 1;
// let i = 1;

// while (i <= numero) {
//     factorial *= i;
//     i++
// }

// EJERCICIO 3.4

// const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// let intentos = 0;
// let adivinado = false;

// // Juego
// while (!adivinado) {
//     let numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));

//     if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
//         alert("Por favor ingresa un número válido entre 1 y 100.");
//     } else {
//         intentos++;

//         if (numeroUsuario === numeroAleatorio) {
//             adivinado = true;
//             alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
//         } else if (numeroUsuario < numeroAleatorio) {
//             alert("El número es demasiado bajo. Inténtalo de nuevo.");
//         } else {
//             alert("El número es demasiado alto. Inténtalo de nuevo.");
//         }
//     }
// }

// EJERCICIO 3.5
/* 
function fibonacci(n) {
    let fib = [];
    let i = 0;

    while (i < n) {
        if (i <= 1) {
            fib.push(i);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        i++;
    }

    return fib;
}

let n = 10;
let resultado = fibonacci(n);
console.log(resultado); */

// EJERCICIO 3.6

// let numero = parseInt(prompt("Ingrese un número:"));

// let contador = 0;
// let divisor = 10;

// while (numero !== 0) {
//     numero = Math.floor(numero / 10);
//     contador++;
// }

// console.log(`El número ingresado tiene ${contador} dígitos.`);

// EJERCICIO 3.7

// let numero = parseInt(prompt("Ingresa un número:"));
// let i = 1;

// while (i <= 10) {
//     let resultado = numero * i;
//     console.log(`${numero} x ${i} = ${resultado}`);
//     i++;
// }

//EJERCICIO 3.8

// let opcion = 's';

// while (opcion.toLowerCase() === 's') {
//     let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
//     let fahrenheit = (celsius * 9/5) + 32;
//     console.log(`${celsius} grados Celsius son ${fahrenheit.toFixed(2)} grados Fahrenheit`);
// }

// EJERCICIO 3.9

// let numero = parseInt(prompt("Ingresa un número para verificar si es primo:"));
// let esPrimo = true;
// let divisor = 2;

// while (divisor < numero) {
//     if (numero % divisor === 0) {
//         esPrimo = false;
//         break;
//     }
//     divisor++;
// }

// if (esPrimo) {
//     console.log(`${numero} es un número primo.`);
// } else {
//     console.log(`${numero} no es un número primo.`);
// }

// EJERCICIO 3.10

// let montoMensual = parseFloat(prompt("Ingresa el monto a ahorrar mensualmente:"));
// let tasaInteres = parseFloat(prompt("Ingresa la tasa de interés anual (%):"));
// let meses = parseInt(prompt("Ingresa el número de meses a calcular:"));

// let saldoAcumulado = 0;
// let mes = 1;

// while (mes <= meses) {
//     saldoAcumulado += montoMensual;
//     let interesMensual = saldoAcumulado * (tasaInteres / 100 / 12);
//     saldoAcumulado += interesMensual;
//     mes++;
// }

// console.log(`Después de ${meses} meses, el saldo acumulado es de $${saldoAcumulado.toFixed(2)}`);

// EJERCICIO 4.0

// let numero = 1;
// let suma = 0;

// do {
//     suma += numero;
//     numero++;
// } while (numero <= 10);

// console.log("La suma de los números del 1 al 10 es: " + suma);

// EJERCICIO 4.1

// let numero;

// do {
//     numero = parseInt(prompt("Ingresa un número mayor que 100:"));
// } while (numero <= 100 || isNaN(numero));

// console.log("El número ingresado es: " + numero);

// EJERCICIO 4.2

// let numero;
// do {
//     numero = Math.floor(Math.random() * 10) + 1;
//     console.log("Número generado:", numero);
// } while (numero !== 7);
// console.log("Se ha obtenido un 7.");

// EJERCICIO 4.3

// let numero = 0;
// do {
//     if (numero % 2 === 0) {
//         console.log(numero);
//     }
//     numero++;
// } while (numero <= 20);

// EJERCICIO 4.4

// let numero;
// do {
//     numero = parseInt(prompt("Ingrese un número entre 1 y 5:"));
// } while (numero < 1 || numero > 5 || isNaN(numero));

// console.log("Número ingresado:", numero);

// EJERCICIO 4.5

// let n1 = 0, n2 = 1, nextTerm, count = 0;

// do {
//     if (count <= 1) {
//         nextTerm = count;
//     } else {
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
//     console.log(nextTerm);
//     count++;
// } while (count < 10);

// EJERCICIO 4.6

// let contraseña;
// do {
//     contraseña = prompt("Ingrese su contraseña:");
// } while (contraseña !== "contraseña123");

// console.log("Contraseña válida ingresada.");

// EJERCICIO 4.7

// let count = 0;
// let number = 2;

// do {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(number);
//         count++;
//     }
//     number++;
// } while (count < 5);


// EJERCICIO 4.8

// let numero;
// do {
//     numero = parseInt(prompt("Ingrese un número positivo:"));
//     if (numero <= 0 || isNaN(numero)) {
//         console.log("Error: Debe ingresar un número positivo.");
//     }
// } while (numero <= 0 || isNaN(nume

// EJERCICIO 4.9

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// EJERCICIO 5.0

// let numero = 5;
// let resultado = 1;

// for (let i = 1; i <= numero; i++) {
//   resultado *= i;
// }

// console.log(`El factorial de ${numero} es: ${resultado}`);

// 5.1

// let contador = 0;
// let numero = 2;

// while (contador < 5) {
//   let esPrimo = true;
//   for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//       esPrimo = false;
//       break;
//     }
//   }
//   if (esPrimo) {
//     console.log(numero);
//     contador++;
//   }
//   numero++;
// }

// 5.2

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// 5.3

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
//   }
  
// 5.4

// let a = 0, b = 1, temp;

// console.log(a);
// console.log(b);

// for (let i = 2; i < 10; i++) {
//   temp = a + b;
//   console.log(temp);
//   a = b;
//   b = temp;
// }
