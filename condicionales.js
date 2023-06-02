const prompt = require("prompt-sync")();

// CONDICIONALES

// // EJERCICIO 1 - Pedir dos números y decir si son múltiplos o no.

// let num1 = parseInt(prompt("Di un número"))
// let num2 = parseInt(prompt("Di otro número"))

// if(num1 % num2 === 0 || num2 % num1 === 0 ){
//     console.log("Son múltiplos")
// } else {
//     console.log("No son múltiplos")
// }

// // EJERCICIO 2 - Pedir dos números y decir cual es el mayor.

// let num1 = parseInt(prompt("Di un número"))
// let num2 = parseInt(prompt("Di otro número"))

// if(num1 > num2){
//     console.log(num1, " es el mayor")
// } else if (num2 > num1) {
//     console.log(num2, " es el mayor")
// } else {
//     console.log("Son iguales")
// }

// // EJERCICIO 3 - Pedir un número y decir si es un número negativo, si es positivo o cero.

// let num = parseInt(prompt("Di un número"))

// if(num > 0){
//     console.log("Es positivo")
// } else if (num < 0) {
//     console.log("Es negativo")
// } else {
//     console.log("Es cero")
// }

// // EJERCICIO 4 - Pedir un string y determinar si tiene cinco caracteres o más.

// let str = prompt("Introduce una palabra")

// if(str.length >= 5){
//     console.log("Tiene cinco letras o más")
// } else {
//     console.log("Tiene menos de cinco letras")
// }

// // EJERCICIO 5 - Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y determinar si el promedio es mayor que cinco.

// let num1 = parseInt(prompt("Di un número"));
// while(num1 < 1 || num1 > 10){
//     num1 = parseInt(prompt("El número debe estar entre el 1 y el 10"))
// }
// let num2 = parseInt(prompt("Di otro número"));
// while(num2 < 1 || num2 > 10){
//     num2 = parseInt(prompt("El número debe estar entre el 1 y el 10"))
// }
// let num3 = parseInt(prompt("Di otro número"));
// while(num3 < 1 || num3 > 10){
//     num3 = parseInt(prompt("El número debe estar entre el 1 y el 10"))
// }

// let promedio = (num1 + num2 + num3) / 3;

// if (promedio > 5) {
//   console.log("El promedio es mayor que cinco: ", promedio.toFixed(2));
// } else if(promedio < 5) {
//   console.log("El promedio es menor que cinco: ", promedio.toFixed(2));
// } else {
//     console.log("El promedio es de 5")
// }

// // EJERCICIO 6 - Pedir una cadena de texto y comprobar que todas sus letras estén en minúsculas.

// let str = prompt("Escribe una palabra o frase")

// let lower = str.toLowerCase();

// if(str === lower){
//     console.log("Está en minúsculas")
// } else {
//     console.log("Hay alguna letra en mayúsculas")
// }

// // EJERCICIO 7 - Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además el número.

// // let random = Math.random()
// // console.log(random)
// // let hasta20 = random * 20
// // console.log(hasta20)
// // let numeroFinal = Math.ceil(hasta20)
// // console.log(numeroFinal)
// let num = Math.ceil(Math.random() * 20);
// // Math.floor -- siempre redondea hacia abajo
// // Math.round -- redondea normal

// if (num % 2 === 0){
//     console.log("El número es ", num, " y es par")
// } else {
//     console.log("El número es ", num, " y es impar")
// }

// // EJERCICIO 8 - Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha aprobado o no.

// let nota1 = parseInt(prompt("Introduce la primera nota"));
// let nota2 = parseInt(prompt("Introduce la segunda nota"));
// let nota3 = parseInt(prompt("Introduce la tercera nota"));

// let media = (nota1 + nota2 + nota3) / 3

// if(media >= 5){
//     console.log("Nota media: ", media.toFixed(2), "Ha aprobado")
// } else{
//     console.log("Nota media: ", media.toFixed(2), "Ha suspendido")
// }

// // EJERCICIO 9 - Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %. El usuario introduce marca y modelo y el programa saca el descuento correspondiente por pantalla.

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

// // EJERCICIO 10 -Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y elcódigo responda cuántos días tiene ese mes.

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

// // EJERCICIO 11

// // Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y realice las siguientes operaciones:
// // a) Si el diámetro es superior a 1.4 metros debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 metros pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
// // b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”

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

