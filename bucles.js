const prompt = require("prompt-sync")();

// BUCLES

// // EJERCICIO 1 -Escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.

// let numero = parseInt(prompt("Di un número"))
// let arrayNumeros = [];
// for(let i = 1; i <= numero; i++){
//     arrayNumeros.push(i)
// }
// // console.log(arrayNumeros)
// console.log(arrayNumeros.join(", "))

// // EJERCICIO 2 - Hacer un programa que cuente de N en N hasta un número M proporcionado por el usuario. El usuario también ha de proporcionar N.

// let empezar = parseInt(prompt("Di desde qué número quiere contar"))
// let hasta = parseInt(prompt("Di hasta qué número quieres contar"))
// let num = parseInt(prompt("Di de cuánto en cuánto quieres contar"))

// for(let i = empezar; i <= hasta; i += num){
//     console.log(i)
// }

// // EJERCICIO 3 - Genera una lista con todos los números pares positivos por debajo del número tecleado por el usuario.

// let num = parseInt(prompt("Di un número"))

// // MANERA 1

// for(let i = 2; i <= num; i += 2){
//     console.log(i)
// }

// // MANERA 2

// for(let i = 2; i <= num; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// // EJERCICIO 4 - Escribe la tabla de multiplicar de un número introducido por el usuario.

// let num = parseInt(prompt("Di un número"))

// for(let i = 1; i <= 10; i++){
//     console.log(num * i)
// }

// // EJERCICIO 5 Formar un triángulo de este estilo
// // *
// // **
// // ***
// // ****
// // Con la cantidad de líneas que indique el usuario.

// let num = parseInt(prompt("Di un número"))

// let string = ""
// for(let i = 1; i <= num; i++){
//     string += "*"
//     console.log(string)
// }

// // EJERCICIO 6 - Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario.

// let num = parseInt(prompt("Di un número"))
// let suma = 0
// for(let i = 1; i <= num; i++){
//     suma += i
// }
// console.log(suma)

// // EJERCICIO 7 - Pide al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética (la suma de todos ellos dividido por la cantidad de números).

// let suma = 0
// for (let i = 0; i < 4; i++) {
//   let num = parseInt(prompt("Di un número"));
//     suma += num
// }

// let media = suma / 4

// console.log(media)


// // EJERCICIO 8 - Saca por consola los números primos del 0 al número que introduzca un usuario por prompt.

// let num = parseInt(prompt("Di un número"));

// const primos = (numero) => {
//   for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//       return false;
//     }
//   }
//   return numero;
// };

// for (i = 2; i <= num; i++) {

//   if(primos(i)){
//       console.log(i)
//   }
// }

// EJERCICIO 9 - Dado un número entero, muestra una cuenta atrás desde el número tecleado hasta el 0. 
// Modifica el programa para que el usuario introduzca dos números y se efectúe una cuenta atrás desde el primer número hasta el segundo. 
// Modifícalo de nuevo para que el programa determine qué número es el mayor y cuente desde el mayor hasta el menor.

// let num1 = parseInt(prompt("Di un número"))

// // for(let i = num1; i >= 0; i--){
// //     console.log(i)
// // }


// let num2 = parseInt(prompt("Di otro número"))

// if(num1 > num2){
// for(let i = num1; i >= num2; i--){
//     console.log(i)
// }
// } else {
//     for(let i = num2; i >= num1; i--){
//         console.log(i)
//     }
// }

// EJERCICIO 10 - Pide al usuario cinco números, almacénalos en un array y muestra por consola el resultado de cada uno de ellos multiplicado por 3. Muestra también un array que contenga todos los resultados.

let arrayNumeros = []

for(let i = 0; i < 5; i++){
    let num = prompt("Di un número - ")
    arrayNumeros.push(num)
    // console.log(num*3)
}

let arrayMultiplicados = []

for(let i = 0; i < arrayNumeros.length; i++){
    arrayMultiplicados.push(arrayNumeros[i] * 3)
}

console.log(arrayNumeros.join(", "))
console.log(arrayMultiplicados.join(","))

// arrayNumeros.map(num => console.log(num*3))
// let arrayNuevo = arrayNumeros.map(num => num*3)
// console.log(arrayNuevo)