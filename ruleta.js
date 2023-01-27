//Bienvenida

saludo();
let nombre = prompt("Ingrese su nombre");
// Corroborar si es mayor de edad

for (let i = 0; i < 50; i++) {
  let nacimiento = parseInt(prompt(`Ingrese el año de su nacimiento `));
  while (isNaN(nacimiento)) {
    nacimiento = parseInt(
      prompt(
        "Solo se permiten numeros, Vuelva a ingresar el año de su nacimiento"
      )
    );
  }
  if (nacimiento <= 2004) {
    alert(`Eres mayor de edad.\nBienvenido al Simulador de Ruleta,  ${nombre}!`);
    break;
  } else if (nacimiento >= 2023) {
    alert("Que raro, todavia no has nacido!")
  } else {
    nacimiento = alert(
      `Lo siento ${nombre}, eres menor.\nVuelve mas tarde con un adulto responsable`
    );
  }
}
// Reglas

reglas();

// valor de la ficha que desa jugar

let valorFicha = parseInt(
  prompt(
    "Ingrese el valor de las fichas con las que desea apostar: \n 50\n 100\n 250\n 500\n  "
  )
);

while (isNaN(valorFicha)) {
  valorFicha = parseInt(
    prompt(
      "Ingrese los valores disponibles: \n 50\n 100\n 250\n 500\n "
    )
  );
}
 


let apuestaPleno = Number(prompt("¿Cuantos plenos apostó o quiere apostar?"));
let apuestaSemipleno = Number(prompt("¿Cuantos Semi Plenos apostó o quiere apostar?"));
let apuestaCalle = Number(prompt("¿Cuantas Calles apostó o quiere apostar?"));
let apuestaCuadro = Number(prompt("¿Cuantos Cuadros apostó o quiere apostar?"));
let apuestaLinea = Number(prompt("¿Cuantas Lineas apostó o quiere apostar?"));

sumarPostura();

function sumarPostura() {
  let postura =
    apuestaPleno * 35 +
    apuestaSemipleno * 17 +
    apuestaCalle * 11 +
    apuestaCuadro * 8 +
    apuestaLinea * 5;
  let pago = postura * valorFicha;
  alert("No va maasss...")
  alert("Felicitaciones!! Usted ha ganado " + postura + " fichas");
  alert("Tiene ahora Ud. un total de " + pago + " pesos");
  alert("Se aconseja dejar propina al dealer :)");
  let propina = parseInt(
    prompt("¿Cuantas fichas desea dejarle de propina al Croupier? Ud Tiene " + postura + " fichas")
  );
  while (isNaN(propina)) {
    propina = parseInt(prompt("Ingrese con numeros la cantidad de fichas que desea dejar de propina"));
  }
  if  (propina <= (postura * 1) / 100)  {
    alert(`Te quedaste cortina, Ratatouille!`);
  } else {
    alert("Empleadosss, Gracias!!");
  }
  let saldoFichas = postura - propina;
  let saldoDinero = pago - propina * valorFicha;
  pago -
    alert(
      "Cuenta ahora con " +
        saldoFichas +
        " fichas para jugar y dispone de " +
        saldoDinero +
        " pesos. "
    );
}

function saludo() {
  alert("Bienvenido al Simulador Virtual de Ruleta");
}

function reglas() {
  alert(
    "En este simulador podrás chequear que el Croupier te haya pagado correctamente tu apuesta en la ruleta.\n  "
  );
}
