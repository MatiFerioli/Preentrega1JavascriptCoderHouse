// Menú
const menu = [
  ["Hamburguesa", 15000],
  ["Milanesa", 17000],
  ["Papas fritas", 10000],
  ["Lomito", 20000],
  ["Choripán", 12000],
  ["Pizza", 15000],
  ["Empanadas", 4000],
  ["Gaseosa", 4000],
  ["Agua", 3000],
  ["Cerveza", 4500],
];

// Función para mostrar el menú en consola
function mostrarMenu() {
  let mensaje = "Bienvenido al restaurante de comida rápida. ¿Qué desea pedir?\n\nMenú de Comidas Rápidas:\n";
  for (let i = 0; i < menu.length; i++) {
    mensaje += i + 1 + ". " + menu[i][0] + " - $" + menu[i][1] + "\n";
  }
  console.log(mensaje);
  alert(mensaje);
}

// Función para realizar la compra
function realizarPedido() {
  let seleccion = [];
  let total = 0;
  let opcion;

  do {
    let mensaje = "Ingrese el número del producto que desea comprar (o pulse 0 para finalizar el pedido):\n";
    for (let i = 0; i < menu.length; i++) {
      mensaje += i + 1 + ". " + menu[i][0] + " - $" + menu[i][1] + "\n";
    }
    opcion = prompt(mensaje);
    opcion = opcion && opcion.trim() !== "" ? Number(opcion) : NaN;

    if (opcion === 0) {
      break;
    }

    if (opcion > 0 && opcion <= menu.length) {
      let producto = menu[opcion - 1];
      seleccion.push(producto);
      total += producto[1];
      console.log("Agregado: " + producto[0] + " - $" + producto[1]);
      alert("Agregado: " + producto[0] + " - $" + producto[1] + "\nTotal actual: $" + total);
    } else {
      alert("Opción inválida. Intente nuevamente.");
    }
  } while (true);

  console.log("Total a pagar: $" + total);
  procesarPago(total);
}

// Función para procesar el pago y calcular el vuelto
function procesarPago(total) {
  let pago;
  do {
    pago = prompt("El total a pagar es $" + total + ". Ingrese el monto con el que va a pagar:");
    pago = pago ? Number(pago) : 0;

    if (pago <= 0) {
      alert("El valor ingresado es inválido. Intente nuevamente.");
    } else if (pago < total) {
      alert("Monto insuficiente. Intente nuevamente.");
    }
  } while (pago <= 0 || pago < total);

  let vuelto = pago - total;
  alert("Pago exitoso. Su vuelto es $" + vuelto);
  console.log("Pago realizado: $" + pago + ", Vuelto: $" + vuelto);

  alert("Muchas gracias por su compra, el pedido estará pronto.");
  console.log("Muchas gracias por su compra, el pedido estará pronto.");
}

// Inicio del simulador
mostrarMenu();
realizarPedido();
