// Datos de ejemplo para el catálogo (puedes adaptarlos o mantener los tuyos)
const productosEjemplo = [
  { id: "1", nombre: "Sweater Básico Blanco de Algodón", precio: 280.00, imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80" },
  { id: "2", nombre: "Camiseta Casual Estampada Minimal", precio: 180.00, imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80" },
  { id: "3", nombre: "Pantalón Cargo Urbano Beige", precio: 420.00, imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80" },
  { id: "4", nombre: "Sudadera Manga Larga Estilo Urbano", precio: 310.00, imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80" }
];

let carrito = [];
let usuarioActual = null;

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(productosEjemplo);
  initModals();
  initAuth();
});

// Renderizar Productos asegurando la estructura correcta
function renderProducts(productsArray) {
  const container = document.getElementById('products-container');
  if (!container) return;
  container.innerHTML = '';

  productsArray.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${product.imagen}" alt="${product.nombre}">
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${product.nombre}</h3>
          <p class="card-price">Q ${product.precio.toFixed(2)}</p>
          <div class="size-selector-wrapper">
            <label>Talla</label>
            <select class="product-size" id="size-${product.id}">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>
        </div>
        <button class="btn primary" onclick="addToCart('${product.id}')">Añadir al Carrito</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Control de Modales (Apertura y Cierre flotante)
function initModals() {
  const loginModal = document.getElementById('login-modal');
  const cartModal = document.getElementById('cart-modal');

  document.getElementById('btn-login-modal').addEventListener('click', () => {
    loginModal.style.display = 'flex';
  });

  document.getElementById('close-login').addEventListener('click', () => {
    loginModal.style.display = 'none';
  });

  document.getElementById('btn-cart-toggle').addEventListener('click', () => {
    cartModal.style.display = 'flex';
  });

  document.getElementById('close-cart').addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  // Cerrar haciendo clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === cartModal) cartModal.style.display = 'none';
  });
}

// Lógica de Autenticación e Inicio de Sesión Corregida
function initAuth() {
  const formLogin = document.getElementById('form-login');
  const userDisplay = document.getElementById('user-display');
  const btnLoginModal = document.getElementById('btn-login-modal');
  const btnLogout = document.getElementById('btn-logout');
  const loginModal = document.getElementById('login-modal');

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('login-user').value.trim();

    if (userInput) {
      usuarioActual = userInput;
      userDisplay.textContent = `Hola, ${usuarioActual}`;
      userDisplay.style.display = 'inline-block';
      btnLoginModal.style.display = 'none';
      btnLogout.style.display = 'inline-block';
      
      loginModal.style.display = 'none';
      formLogin.reset();
    }
  });

  btnLogout.addEventListener('click', () => {
    usuarioActual = null;
    userDisplay.style.display = 'none';
    btnLoginModal.style.display = 'inline-block';
    btnLogout.style.display = 'none';
  });
}

// Función del Carrito
function addToCart(productId) {
  const product = productosEjemplo.find(p => p.id === productId);
  const sizeSelect = document.getElementById(`size-${productId}`);
  const selectedSize = sizeSelect ? sizeSelect.value : 'M';

  if (product) {
    carrito.push({ ...product, talla: selectedSize });
    updateCartUI();
  }
}

function updateCartUI() {
  const countSpan = document.getElementById('cart-count');
  const listContainer = document.getElementById('cart-items-list');
  const totalSpan = document.getElementById('cart-total');

  countSpan.textContent = carrito.length;
  listContainer.innerHTML = '';

  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div>
        <strong>${item.nombre}</strong><br>
        <small>Talla: ${item.talla} - Q ${item.precio.toFixed(2)}</small>
      </div>
      <button class="btn danger" style="padding: 4px 8px; font-size: 0.75rem;" onclick="removeFromCart(${index})">X</button>
    `;
    listContainer.appendChild(div);
  });

  totalSpan.textContent = `Q ${total.toFixed(2)}`;
}

function removeFromCart(index) {
  carrito.splice(index, 1);
  updateCartUI();
}
