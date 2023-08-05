/*function calculateAge(birthYear) {
    var age = 2020 - birthYear;
    return age;
}

var ageJohn = calculateAge(1995);

console.log(ageJohn);

function yearsUntilRetirement(year, name) {
    var age = calculatvar ageJohn = calculateAge(1995);eAge(year);
    var retirement = 65 - age;
    console.log(name + ' retires in ' + retirement + ' years.');
  }

  yearsUntilRetirement(1995, 'John Doe');
// John Doe retires in 40 years.

var whatDoYouDo = function(job, name) {
    switch (job) {
      case 'developer':
        return name + ' develops cool apps.';
      case 'designer':
        return name + ' designs awesome websites.';
      default:
        return name + ' does something else.'
    }
  }
  
  console.log(whatDoYouDo('developer', 'John Doe'));
  console.log(whatDoYouDo('designer', 'Jane Doe'));
  console.log(whatDoYouDo('retired', 'Mark Doe'));


  (function() {
    var name = "John Doe";
    console.log(name);
  })();

  (function(lastName) {
    var firstName = "John";
    console.log(firstName + ' ' + lastName);
  })('Doe');

  function power(base, exponent) {
    var exponent = Math.pow(base, exponent);
  }
  
  power(3,2);
  console.log(exponent);
  
  
  function power(base, exponent) {
  var result = 1;

  for(var i = 0; i < exponent; i++) {
    result *= base; // Same as: result = result * base;
  }

  return result;
}
var result = 1;
  function powering(base,exponent) {
    for(var i=0; i < exponent; i++){
        result *= base;
    }
  return result;
  }

  var result = powering(2,3);
  console.log(result)


function suma(num1, num2) {
    alert(num1+num2);
    const resultado = 0;
}

suma(5, 6)


function suma(num1, num2) {
    alert(num1+num2);
}

function resta(num1, num2) {
    alert(num1-num2);
}

function multiplicacion(num1, num2) {
    alert(num1*num2);
}

function division(num1, num2) {
    alert(num1/num2);
}

suma(2,6)
resta(2,6)
multiplicacion(2,6)
division(6,2)

function saludo(nombre = "usuario"){
        alert(`Buenos dias ${nombre}`)
}

saludo()

const saludoAnonimo = function(nombre = "usuario"){
    alert(`Buenos dias ${nombre}`)
}


const destinos = `
   1) CDMX
   2) Guadalajara
   3) Monterrey
   4) Yucatan
 `;

 let destino = "Merida";

 if (destino === "CDMX") {
   console.log("$300");
 } else if (destino === "Guadalajara") {
   console.log("$400");
 } else if (destino === "Monterrey") {
   console.log("$800");
 } else if (destino === "Yucatan") {
   console.log("$1200");
 } else {
   console.error("Destino no disponible");
 }



 switch (destino) {
    case "Guadalajara":
      console.log("Tengo un lagarto");
      break;
    case "perro":
      console.log("Tengo un perro");
      break;
    case "gato":
      console.log("Tengo un gato");
      break;
    case "serpiente":
      console.log("Tengo una serpiente");
      break;
    case "loro":
      console.log("Tengo un loro");
      break;
    default:
      console.log("No tengo mascota");
      break;
  }*/

  function destinos(){
    const ciudad = prompt(`Catalogo de destinos (selecciona el numero que corresponde al destino que te interesa):
    1) CDMX
    2) Chiapas
    3) Monterrey
    4) Sonora
    5) Guatemala`);
    var precio = 0
    var preciocdmx = 400
    var preciochiapas = 1500
    var preciomonterrey = 900
    var preciosonora = 980
    var precioguatemala = 2500
    if (ciudad === "1") {
        console.log(`
        1) Para CDMX el costo del viaje es $`+preciocdmx+` pesos`);
        precio = preciocdmx
    } else if (ciudad === "2") {
        console.log(`
        2) Para Chiapas el costo del viaje es $`+preciochiapas+` pesos`);
        precio = preciochiapas
    } else if (ciudad === "3") {
        console.log(`
        3) Para Monterrey el costo del viaje es $`+preciomonterrey+` pesos`);
        precio = preciomonterrey
    } else if (ciudad === "4") {
        console.log(`
        4) Para Sonora el costo del viaje es $`+preciosonora+` pesos`);
        precio = preciosonora
    } else if (ciudad === "5") {
        console.log(`
        5) Para Guatemala el costo del viaje es $`+precioguatemala+` pesos`);
        precio = precioguatemala
    } else {
        console.error("Lo sentimos, esa opcion no la comprendemos");
    }
   
    const desicion = prompt("Quieres revisar otro destino? Y/N: ");

    if (desicion == "N"){
        //Usuario esta satisfecho con el destino elegido
        const continuarPago = prompt("Quieres continuar con tu pago? Y/N: ");
   
        if (continuarPago == "N"){
            console.log("Gracias por usar nuestro servicio");
        } else {
            //usuario quiere seguir con el pago, entonces vemos descuentos
            descuentos(ciudad, precio)
        }
    } else {
        //usuario quiere revisar mas destinos e iniciar el flujo de nuevo
        destinos()
    }   
}//fin funcion destinos

function descuentos(ciudad, precio){
    const descuento = prompt("Si tienes un cupon de descuento. Ingresalo por favor (O escribe N de lo contrario): ");
    console.log(ciudad)
    console.log(descuento)
    var opcion = 1
    if (descuento == "N") {
        //si no hay cupon entonces vamos a pagar
        opcion = precio
        pagos(opcion)
    } else if (ciudad == "1" && descuento == "A") {
        opcion = 400 - (400*.45)
        console.log(`
        1) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "1" && descuento == "B") {
        opcion = 400 - (400*.35)
        console.log(`
        1) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "1" && descuento == "C") {
        var opcion = 400 - (400*.25)
        console.log(`
        1) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "1" && descuento == "D") {
        var opcion = 400 - (400*.10)
        console.log(`
        2) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "2" && descuento == "A") {
        var opcion = 1500 - (1500*.45)
        console.log(`
        2) Para Chiapas el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "2" && descuento == "B") {
        var opcion = 1500 - (1500*.35)
        console.log(`
        2) Para Chiapas el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "2" && descuento == "C") {
        var opcion = 1500 - (1500*.25)
        console.log(`
        2) Para Chiapas el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "2" && descuento == "D") {
        var opcion = 1500 - (1500*.10)
        console.log(`
        2) Para Chiapas el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "3" && descuento == "A") {
        var opcion = 900 - (900*.45)
        console.log(`
        3) Para Monterrey el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "3" && descuento == "B") {
        var opcion = 900 - (900*.35)
        console.log(`
        3) Para Monterrey el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "3" && descuento == "C") {
        var opcion = 900 - (900*.25)
        console.log(`
        3) Para Monterrey el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "3" && descuento == "D") {
        var opcion = 900 - (900*.10)
        console.log(`
        3) Para Monterrey el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "4" && descuento == "A") {
        var opcion = 980 - (980*.45)
        console.log(`
        4) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "4" && descuento == "B") {
        var opcion = 980 - (980*.35)
        console.log(`
        4) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "4" && descuento == "C") {
        var opcion = 980 - (980*.25)
        console.log(`
        4) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "4" && descuento == "D") {
        var opcion = 980 - (980*.10)
        console.log(`
        4) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    }  else if (ciudad == "5" && descuento == "A") {
        var opcion = 2500 - (2500*.45)
        console.log(`
        5) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "5" && descuento == "B") {
        var opcion = 2500 - (2500*.35)
        console.log(`
        5) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "5" && descuento == "C") {
        var opcion = 2500 - (2500*.25)
        console.log(`
        5) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else if (ciudad == "5" && descuento == "D") {
        var opcion = 2500 - (2500*.10)
        console.log(`
        5) Para CDMX el costo del viaje es de: `+opcion);
        pagos(opcion)
    } else {
        console.log("Ese cupon no existe");
        destinos()
    }
}//fin funcion descuentos

function pagos(opcion){
    const paguito = prompt("Con cuanto deseas pagar? ");

    if (paguito == opcion) {
          console.log("Muchas gracias por su compra, su boleto lo recibira en ventanilla");
      } else {
        console.log("No logramos procesar su pago, intente mas tarde");
      }
}

destinos()