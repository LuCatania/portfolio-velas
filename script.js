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