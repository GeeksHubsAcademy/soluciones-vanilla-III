// BUCLES

// EJERCICIO 1

// let numero = parseInt(prompt("Di un número"))
// let arrayNumeros = [];
// for(let i = 0; i <= numero; i++){
//     arrayNumeros.push(i)
// }
// console.log(arrayNumeros)
// console.log(arrayNumeros.join(", "))

// EJERCICIO 2

// let hasta = parseInt(prompt("Di hasta qué número quieres contar"))
// let num = parseInt(prompt("Di de cuánto en cuánto quieres contar"))
// let empezar = parseInt(prompt("Di desde qué número quiere contar"))

// for(let i = empezar; i <= hasta; i += num){
//     console.log(i)
// }

// EJERCICIO 3

// let num = parseInt(prompt("Di un número"))

// for(let i = 2; i <= num; i += 2){
//     console.log(i)
// }

// for(let i = 0; i <= num; i++){
//     if(i > 0 && i % 2 === 0){
//         console.log(i)
//     }
// }

// EJERCICIO 4

// let num = parseInt(prompt("Di un número"))

// for(let i = 1; i <= 10; i++){
//     console.log(num * i)
// }

// EJERCICIO 5

// let num = parseInt(prompt("Di un número"))
// let num = 7

// let string = ""
// for(let i = 1; i <= num; i++){
//     string += "*"
//     console.log(string)
// }

// EJERCICIO 6

// let num = parseInt(prompt("Di un número"))
// let num = 4
// let suma = 0
// for(let i = 1; i <= num; i++){
//     suma += i
// }
// console.log(suma)

// EJERCICIO 7

// let suma = 0
// for (let i = 0; i < 4; i++) {
//   let num = parseInt(prompt("Di un número"));
//     suma += num
// }

// let media = suma / 4

// console.log(media)


// EJERCICIO 8

// let num = parseInt(prompt("Di un número"));

// let primos = (numero) => {
//   for (let i = 2; i < numero / 2; i++) {
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

// EJERCICIO 9

// // let num1 = parseInt(prompt("Di un número"))
// // let num2 = parseInt(prompt("Di otro número"))

// // if(num1 > num2){
// // for(let i = num1; i >= num2; i--){
// //     console.log(i)
// // }} else {
// //     for(let i = num2; i >= num1; i--){
// //         console.log(i)
// //     }
// // }

// EJERCICIO 10

// let arrayNumeros = []
// for(let i = 0; i < 5; i++){
//     // let num = prompt("Di un número")
//     arrayNumeros.push(num)
// }

// arrayNumeros.map(num => console.log(num*3))
// let arrayNuevo = arrayNumeros.map(num => num*3)
// console.log(arrayNuevo)