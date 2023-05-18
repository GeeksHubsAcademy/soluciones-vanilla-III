// CONDICIONALES

// EJERCICIO 1

// let num1 = parseInt(prompt("Di un número"))
// let num2 = parseInt(prompt("Di otro número"))

// if(num1 % num2 === 0 || num2 % num1 === 0 ){
//     console.log("Son múltiplos")
// } else {
//     console.log("No son múltiplos")
// }

// EJERCICIO 2

// let num1 = parseInt(prompt("Di un número"))
// let num2 = parseInt(prompt("Di otro número"))

// if(num1 > num2){
//     console.log(num1, " es el mayor")
// } else if (num2 > num1) {
//     console.log(num2, " es el mayor")
// } else {
//     console.log("Son iguales")
// }

// EJERCICIO 3

// let num = parseInt(prompt("Di un número"))

// if(num > 0){
//     console.log("Es positivo")
// } else if (num < 0) {
//     console.log("Es negativo")
// } else {
//     console.log("Es cero")
// }

// EJERCICIO 4

// let str = prompt("Introduce una palabra")

// if(str.length >= 5){
//     console.log("Tiene cinco letras o más")
// } else {
//     console.log("Tiene menos de cinco letras")
// }

// EJERCICIO 5

// let num1 = parseInt(prompt("Di un número"));
// let num2 = parseInt(prompt("Di otro número"));
// let num3 = parseInt(prompt("Di otro número"));

// let promedio = (num1 + num2 + num3) / 3;

// if (promedio > 5) {
//   console.log("El promedio es mayor que cinco: ", promedio);
// } else {
//   console.log("El promedio es menor que cinco: ", promedio);
// }

// EJERCICIO 6

// let str = prompt("Escribe una palabra o frase")

// let lower = str.toLowerCase();

// if(str === lower){
//     console.log("Está en minúsculas")
// } else {
//     console.log("Hay alguna letra en mayúsculas")
// }

// EJERCICIO 7

// let num = Math.ceil(Math.random() * 20);

// if (num % 2 === 0){
//     console.log("El número es ", num, " y es par")
// } else {
//     console.log("El número es ", num, " y es impar")
// }

// EJERCICIO 8

// let nota1 = parseInt(prompt("Introduce la primera nota"));
// let nota2 = parseInt(prompt("Introduce la segunda nota"));
// let nota3 = parseInt(prompt("Introduce la tercera nota"));

// let media = (nota1 + nota2 + nota3) / 3

// if(media >= 5){
//     console.log("Nota media: ", media, "Ha aprobado")
// } else{
//     console.log("Nota media: ", media, "Ha suspendido")
// }

// EJERCICIO 9

// let marca = prompt("¿De qué marca es el coche?")
// let modelo = prompt("¿De qué modelo es el coche?")
// let descuento;

// if(marca.toLowerCase() === "ford"){
//     if(modelo.toLowerCase() === "fiesta"){
//         descuento = "5 %"
//         console.log("El descuento es del ", descuento)
//     } else if (modelo.toLowerCase() === "focus"){
//         descuento = "10 %"
//         console.log("El descuento es del ", descuento)
//     } else {
//         console.log("Ese modelo no está disponible")
//     }
// } else {
//     console.log("Esto es un concesionario Ford")
// }

// EJERCICIO 10

// let mes = parseInt(prompt("¿Qué mes?"));

// switch (mes) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Tiene 31 días");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Tiene 30 días");
//     break;
//   case 2:
//     console.log("Tiene 28 días");
//     break;
//   default:
//     console.log("El año solo tiene 12 meses");
//     break;
// }

// EJERCICIO 11

// let diametro = parseFloat(prompt("Diámetro"))
// let grosor = parseFloat(prompt("Grosor"))

// if(diametro>1.4){
//     console.log("La rueda es para un vehículo grande")
//     if(grosor<0.4){
//         console.log("El grosor para esta rueda es inferior al recomendado")
//     }
// } else if (diametro <= 1.4 && diametro > 0.8) {
//     console.log("La rueda es para un vehículo mediano")
//     if(grosor<0.25){
//         console.log("El grosor para esta rueda es inferior al recomendado")
//     }
// } else {
//     console.log("La rueda es para un vehículo pequeño")
// }

