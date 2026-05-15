let carrito = []
let total = 0

function agregarAlCarrito(nombre, precio) {

  carrito.push({ nombre, precio })
  total += precio

  actualizarCarrito()
}

function actualizarCarrito() {

  const contenedor = document.getElementById("lista-carrito")
  const totalTexto = document.getElementById("total")

  contenedor.innerHTML = ""

  carrito.forEach(producto => {
    const item = document.createElement("p")
    item.textContent = producto.nombre + " - $" + producto.precio
    contenedor.appendChild(item)
  })

  totalTexto.textContent = "Total: $" + total
}

function finalizarCompra() {
  alert("Gracias por tu compra 💖")
}
