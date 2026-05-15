const botones = document.querySelectorAll(".add-cart");
const carrito = document.querySelector(".carrito");

let contador = 0;

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    contador++;

    carrito.innerHTML = `
      <h2>Tu carrito 🛒</h2>
      <p>Tienes ${contador} producto(s) en el carrito</p>
    `;
  });
});
// =========================
// CARRITO ALMAROMA
// =========================

let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.nombre + " - $" + item.precio;
        lista.appendChild(li);
        suma += item.precio;
    });

    total.textContent = "Total: $" + suma;
}
