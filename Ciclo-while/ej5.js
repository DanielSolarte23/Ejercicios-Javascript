document.getElementById("compararBtn").addEventListener("click", function () {
    let n = document.getElementById("numeroInput").value;
    let resultado = document.getElementById("resultado");

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
    /* let n = 10;*/

    let resultadoo = fibonacci(n);
    resultado.innerText =  resultado;
});

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