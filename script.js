
//let num = parseInt(prompt("Ingrese un número"));
// Verifica que el número ingresado sea un entero positivo
if (isNaN(num) || num <= 0) {
    console.log("Ingrese un número entero positivo.");
} else {
    let fibonacci = [0, 1];
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    console.log("Secuencia de Fibonacci:");
    for (let i = 0; i < num; i++) {
        console.log(fibonacci[i]);
    }
}
