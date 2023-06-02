const prompt = require("prompt-sync")();

// EJERCICIO 1

// const celsiusFahrenheit = (grados) => {
//     let resultado = (grados * 9 / 5) + 32

//     return resultado
// }
// console.log(celsiusFahrenheit(10))

// EJERCICIO 2

// const funcionImpares = (num) => {
//     if(num % 2 === 0){
//         return false
//     } else {
//         return true
//     }
// }

// console.log(funcionImpares(28))

// EJERCICIO 3

// const esPrimo = (num) => {
//     for(let i = 2; i < num / 2; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(esPrimo(17))


// EJERCICIO 4

// const obtenerLetraDNI = (dni) => {
//   let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

//   let letra = letras[dni % 23];

//   return letra;
// };

// console.log(obtenerLetraDNI(13311408))

// EJERCICIO 5

// const calcularPrecioTotal = (precio, iva = 0.21) => {
//   let total = precio + (precio * iva);
//   return total;
// };

// console.log(calcularPrecioTotal(100))

// EJERCICIO 6

// const determinarVocal = (letra) => {
//     let arrayVocales = ['A', 'E', 'I', 'O', 'U']

//     if(arrayVocales.includes(letra)){
//         return "Es una vocal"
//     } else {
//         return "Es una consonante"
//     }
// }

// let letraPedida = prompt("Di una letra").toUpperCase()

// console.log(determinarVocal(letraPedida))

// EJERCICIO 7

// const leet = (frase) => {
//     let fraseArray = frase.split("")
//     let fraseModificada = []
//     fraseArray.map(letra => {
//         switch(letra.toLowerCase()){
//             case "a":
//                 fraseModificada.push(4)
//                 break;
//             case "e":
//                 fraseModificada.push(3)
//                 break;
//             case "i":
//                 fraseModificada.push(1)
//                 break;
//             case "o":
//                 fraseModificada.push(0)
//                 break;
//             default:
//                 fraseModificada.push(letra)
//         }

//     })

//     return fraseModificada.join("")
// }

// console.log(leet("Hola"))

// EJERCICIO 8

// const contarLetras = (frase, letraBuscada) => {
//   let fraseArray = frase.split("");
//   let cantidad = 0;
//   fraseArray.map((letra) => {
//     if (letra.toLowerCase() === letraBuscada.toLowerCase()) {
//       cantidad += 1;
//     }
//   });

//   return cantidad;
// };
// console.log(contarLetras("Hola qué tal aaa", "a"));

// EJERCICIO 9

// const comparar = (a, b) => {
//     return a - b
// }

// const mayorEnArray = (array) => {
    
//     let arrayOrdenado = array.sort(comparar)
//     console.log(arrayOrdenado)
//     // arrayOrdenado.reverse()
//     return arrayOrdenado[array.length-1]
// }

// console.log(mayorEnArray([1, 2, 3, 11, 85, 6, 7, 8]))

// EJERCICIO 10

// const sumaArray = (array) => {
//     return array.reduce((suma, numero) => suma += numero)
// }

// console.log(sumaArray([1, 2, 3, 4]))

// EJERCICIO 11

// const porcentaje = (num1, num2) => {
//     const porcentaje = num2 / 100
//     return num1*porcentaje
// }

// console.log(porcentaje(10, 20))