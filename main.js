// Estructuras de control
// me permiten controlar el flujo de la información
// a traves de mi aplicación

// Condicionales

// Me permiten elegir que se va a ejecutar a partir
// de una expresión booleana

// if
// sintaxis: if(expresion booleana) {}

// ejemplo
// validar si una palabra tiene más de 5 letras

// let palabra = "comunidad";

// if( palabra.length > 5 ) {
//   console.log("Cumple");
// }


// if else
// sintaxis: if(expresion booleana) {} else {}

// let palabra = "árbol";

// if( palabra.length > 5 ) {
//   console.log("Cumple");
// } else {
//   console.log("No cumple");
// }

// if else if 
// sintaxis: if(expresion booleana) {} else if() {}

// let palabra = "árbol";

// if( palabra.length > 5 ) {
//   console.log("Cumple");
// } else if(palabra.length === 5) {
//   console.log("Tiene exactamente 5 letras");
// } else {
//   console.log("No cumple");
// }


// let edad = 67

// if (edad < 16) {
//   console.error("No puedes participar");
// } else if (edad > 16 && edad < 18) {
//   console.warn("Necesitas permiso para participar");
// } else {
//   // 18 años o más
//   console.log("Puedes participar");
//   if (edad < 35) {
//     console.log("Fila A");
//   } else if (edad >= 35 && edad < 50) {
//     console.log("Fila B");
//   } else {
//     console.info("Fila C");
//   }
// }

// switch

// sintaxis

/**
 * switch(variable) {
 *  case valor:
 *    break;
 *  case valor:
 *    break;
 *  case valor:
 *    break;
 *  case valor:
 *    break;
 *  default:
 * 
 * }
 */

// Somos una agencia de viajes, tenemos un aplicativo que le permite al usuari
// conocer nuestros destinos y saber el costo del  viaje por destino

// const destinos = `
//   1) CDMX
//   2) Guadalajara
//   3) Monterrey
//   4) Yucatan
// `;

// let destino = "Merida";

// if (destino === "CDMX") {
//   console.log("$300");
// } else if (destino === "Guadalajara") {
//   console.log("$400");
// } else if (destino === "Monterrey") {
//   console.log("$800");
// } else if (destino === "Yucatan") {
//   console.log("$1200");
// } else {
//   console.error("Destino no disponible");
// }

// switch(destino) {
//   case "CDMX":
//     console.log("$300");
//     break;
//   case "Guadalajara":
//     console.log("$400");
//     break;
//   case "Monterrey":
//     console.log("$800");
//     break;
//   case "Yucatan":
//     console.log("$1200");
//     break;
//   default:
//     console.error("Destino no disponible");
// }

// prompt
// los valores que obtiene son siempre de tipo string

// const respuesta = prompt("Cuantos años tienes: ");

// const destino = prompt(`
// 1) CDMX
// 2) Guadalajara
// 3) Monterrey
// 4) Yucatan

// A donde desea viajar:
// `);

// const descuento = prompt("cupon de descuento: ");

// switch(destino) {
//   case "CDMX":
//     if (descuento !== '') {
//       switch(descuento) {
//         case "A":
//           console.log("precio original: $300");
//           console.log(`precio con descuento: ${300 - (300 * .30)}`);
//           break;
//         case "B":
//           console.log("precio original: $300");
//           console.log(`precio con descuento: ${300 - (300 * .25)}`);
//           break;
//         case "C":
//           console.log("precio original: $300");
//           console.log(`precio con descuento: ${300 - (300 * .10)}`);
//           break;
//         default:
//           console.log("$300");
//         }
//     } else {
//       console.log("$300");
//     }
//     break;
//   case "Guadalajara":
//     if (descuento !== '') {
//       switch(descuento) {
//         case "A":
//           console.log("precio original: $400");
//           console.log(`precio con descuento: ${400 - (400 * .30)}`);
//           break;
//         case "B":
//           console.log("precio original: $400");
//           console.log(`precio con descuento: ${400 - (400 * .25)}`);
//           break;
//         case "C":
//           console.log("precio original: $400");
//           console.log(`precio con descuento: ${400 - (400 * .10)}`);
//           break;
//         default:
//           console.log("$400");
//       }
//     } else {
//       console.log("$400");
//     }
//     break;
//   case "Monterrey":
//     if (descuento !== '') {
//       switch(descuento) {
//         case "A":
//           console.log("precio original: $800");
//           console.log(`precio con descuento: ${800 - (800 * .30)}`);
//           break;
//         case "B":
//           console.log("precio original: $800");
//           console.log(`precio con descuento: ${800 - (800 * .25)}`);
//           break;
//         case "C":
//           console.log("precio original: $800");
//           console.log(`precio con descuento: ${800 - (800 * .10)}`);
//           break;
//         default:
//           console.log("$800");
//       }
//     } else {
//       console.log("$800");
//     }
//     break;
//   case "Yucatan":
//     if (descuento !== '') {
//       switch(descuento) {
//         case "A":
//           console.log("precio original: $1200");
//           console.log(`precio con descuento: ${1200 - (1200 * .30)}`);
//           break;
//         case "B":
//           console.log("precio original: $1200");
//           console.log(`precio con descuento: ${1200 - (1200 * .25)}`);
//           break;
//         case "C":
//           console.log("precio original: $1200");
//           console.log(`precio con descuento: ${1200 - (1200 * .10)}`);
//           break;
//         default:
//           console.log("$1200");
//       }
//     } else {
//       console.log("$1200");
//     }
//     break;
//   default:
//     console.error("Destino no disponible");
// }


// Iterables
// for
// sintaxis: for (inicializador; terminacion; iteracion) {}

// ejemplo

// imprimir la serie de numeros del 1 al 10

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// const numero = Number(prompt("Dame un numero: "));

// for (let i = numero; i >= 0; i--) {
//   console.log(i);
// }

// while
// sintaxis: while(expresion boolena) {}
// mientras la expresion boolean es verdadera ejecuta el bloque de código

// ejemplo
// regresar el doble del numero que nos entregue el usuario, 
// pero si el número es mayor de 20
// termina el ciclo

// let numero = prompt("numero: ");

// while(Number(numero) <= 20) {
//   console.log("El doble es: " + Number(numero) * 2);
//   numero = prompt("numero: ");
// }

// console.error("El numero es mayor de 20");

// do while
// haz una primera ejecucion, y valida si la expresion es verdadera
// do {} while(expresion booelana)

let numero = null
do {
  numero = prompt("numero: ");
  console.log("El doble es: " + Number(numero) * 2);
} while(Number(numero) <= 20)

console.error("El numero es mayor de 20");
