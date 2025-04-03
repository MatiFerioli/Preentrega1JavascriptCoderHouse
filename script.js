// Menú
const menu = [
  { id: 1, nombre: "Hamburguesa", precio: 12000 },
  { id: 2, nombre: "Milanesa", precio: 14000 },
  { id: 3, nombre: "Papas fritas", precio: 8000 },
  { id: 4, nombre: "Lomito", precio: 15000 },
  { id: 5, nombre: "Choripan", precio: 10000 },
  { id: 6, nombre: "Pizza", precio: 11000 },
  { id: 7, nombre: "Empanadas", precio: 4000 },
  { id: 8, nombre: "Gaseosa", precio: 3500 },
  { id: 9, nombre: "Agua", precio: 3000 },
  { id: 10, nombre: "Cerveza", precio: 4500 },
];

// Función para mostrar el menú en consola
function mostrarMenu() {
  let mensaje =
    "Bienvenido al restaurante de comida rápida. ¿Qué desea pedir?\n\nMenú de Comidas Rápidas:\n";
  for (let i = 0; i < menu.length; i++) {
    mensaje +=
      menu[i].id + ". " + menu[i].nombre + " - $" + menu[i].precio + "\n";
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
    let mensaje = "Ingrese el número del producto que desea comprar (o pulse 0 para finalizar):\n";
    for (let i = 0; i < menu.length; i++) {
      mensaje += menu[i].id + ". " + menu[i].nombre + " - $" + menu[i].precio + "\n";
    }
    opcion = parseInt(prompt(mensaje));

    if (opcion === 0) {
        break;
    }
    let producto = null;
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].id === opcion) {
        producto = menu[i];
        break;
      }
    }

    if (producto !== null) {
      seleccion.push(producto);
      total += producto.precio;
      console.log("Agregado: " + producto.nombre + " - $" + producto.precio);
      alert("Agregado: " + producto.nombre + " - $" + producto.precio + "\nTotal actual: $" + total);
    } else if (opcion !== 0) {
      alert("Opción inválida. Intente nuevamente.");
    }
  } while (opcion !== 0);

  console.log("Total a pagar: $" + total);
  procesarPago(total);
}

// Función para procesar el pago y calcular el vuelto
function procesarPago(total) {
  let pago;
  do {
    pago = parseFloat(
      prompt("El total a pagar es $" + total + ". Ingrese el monto a pagar:"));

    if (!(pago > 0)) {
      alert("El valor ingresado es inválido. Intente nuevamente.");
    } else if (pago < total) {
      alert("Monto insuficiente. Intente nuevamente.");
    }
  } while (!(pago > 0) || pago < total);

  let vuelto = pago - total;
  alert("Pago exitoso. Su vuelto es $" + vuelto);
  console.log("Pago realizado: $" + pago + ", Vuelto: $" + vuelto);

  alert("Muchas gracias por su compra, el pedido estará pronto.");
  console.log("Muchas gracias por su compra, el pedido estará pronto.");
}

// Llamada a las funciones 
mostrarMenu();
realizarPedido();
