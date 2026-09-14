const productosEjemplo = [
  // Ropa
  { id: "1", nombre: "Sweater Básico Blanco de Algodón", precio: 220.00, tipo: "ropa", imagen: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80" },
  { id: "2", nombre: "Camiseta Casual Estampada Minimal", precio: 135.00, tipo: "ropa", imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80" },
  { id: "3", nombre: "Pantalón Cargo Urbano Beige", precio: 295.00, tipo: "ropa", imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80" },
  { id: "4", nombre: "Sudadera Manga Larga Estilo Urbano", precio: 250.00, tipo: "ropa", imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80" },
  
  // Accesorios / Relojes
  { id: "5", nombre: "Reloj Minimalista Cronógrafo Acero", precio: 480.00, tipo: "reloj", imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" },
  { id: "6", nombre: "Reloj Deportivo Smartwatch Pro", precio: 699.00, tipo: "reloj", imagen: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80" },
  
  // Coleccionables y Pósters (Juguetes / Otaku)
  { id: "7", nombre: "Póster Coleccionable Anime Edición Especial", precio: 85.00, tipo: "coleccionable", imagen: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80" },
  { id: "8", nombre: "Auto de Colección Escala Clásico", precio: 150.00, tipo: "juguete", imagen: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80" }
];

let carrito = [];
let usuarioActual = null;
let modoRegistro = false;

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(productosEjemplo);
  initModals();
  initAuthSystem();
  initCheckout();
  revisarSesionActiva();
});

function renderProducts(array) {
  const container = document.getElementById('products-container');
  if (!container) return;
  container.innerHTML = '';

  array.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    
    let selectorHTML = '';
    if (p.tipo === 'ropa') {
      selectorHTML = `
        <div class="size-selector-wrapper">
          <label>Talla</label>
          <select class="product-size" id="size-${p.id}">
            <option value="S">S</option>
            <option value="M" selected>M</option>
            <option value="L">L</option>
          </select>
        </div>`;
    } else if (p.tipo === 'reloj') {
      selectorHTML = `
        <div class="size-selector-wrapper">
          <label>Acabado</label>
          <select class="product-size" id="size-${p.id}">
            <option value="Negro Mate">Negro Mate</option>
            <option value="Acero Plata">Acero Plata</option>
          </select>
        </div>`;
    } else {
      selectorHTML = `
        <div class="size-selector-wrapper">
          <label>Presentación</label>
          <select class="product-size" id="size-${p.id}">
            <option value="Edición Estándar">Edición Estándar</option>
            <option value="Edición Coleccionista">Edición Coleccionista</option>
          </select>
        </div>`;
    }

    card.innerHTML = `
      <div class="card-img-container">
        <img src="${p.imagen}" alt="${p.nombre}">
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${p.nombre}</h3>
          <p class="card-price">Q ${p.precio.toFixed(2)}</p>
          ${selectorHTML}
        </div>
        <button class="btn primary" onclick="addToCart('${p.id}')">Añadir al Carrito</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function initModals() {
  const loginModal = document.getElementById('login-modal');
  const cartModal = document.getElementById('cart-modal');

  document.getElementById('btn-login-modal').onclick = () => loginModal.style.display = 'flex';
  document.getElementById('close-login').onclick = () => loginModal.style.display = 'none';
  document.getElementById('btn-cart-toggle').onclick = () => cartModal.style.display = 'flex';
  document.getElementById('close-cart').onclick = () => cartModal.style.display = 'none';

  window.onclick = (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === cartModal) cartModal.style.display = 'none';
  };
}

function initAuthSystem() {
  const formAuth = document.getElementById('form-auth');
  const swModeText = document.getElementById('sw-mode-text');
  const modalTitleAuth = document.getElementById('modal-title-auth');
  const groupName = document.getElementById('group-name');
  const authSubmitBtn = document.getElementById('auth-submit-btn');
  const authError = document.getElementById('auth-error');

  swModeText.onclick = (e) => {
    e.preventDefault();
    modoRegistro = !modoRegistro;
    authError.style.display = 'none';
    formAuth.reset();

    if (modoRegistro) {
      modalTitleAuth.textContent = "Crear Cuenta Nueva";
      groupName.style.display = "block";
      authSubmitBtn.textContent = "Registrarse";
      swModeText.textContent = "¿Ya tienes cuenta? Inicia sesión aquí";
    } else {
      modalTitleAuth.textContent = "Iniciar Sesión";
      groupName.style.display = "none";
      authSubmitBtn.textContent = "Entrar";
      swModeText.textContent = "¿No tienes cuenta? Regístrate aquí";
    }
  };

  formAuth.onsubmit = (e) => {
    e.preventDefault();
    authError.style.display = 'none';
    const userVal = document.getElementById('auth-user').value.trim();
    const passVal = document.getElementById('auth-pass').value.trim();
    const nameVal = document.getElementById('auth-name').value.trim();

    let baseUsuarios = JSON.parse(localStorage.getItem('revelion_users')) || [];

    if (modoRegistro) {
      const existe = baseUsuarios.find(u => u.user === userVal);
      if (existe) {
        authError.textContent = "El nombre de usuario ya está registrado.";
        authError.style.display = "block";
        return;
      }
      baseUsuarios.push({ user: userVal, pass: passVal, name: nameVal });
      localStorage.setItem('revelion_users', JSON.stringify(baseUsuarios));
      alert("¡Cuenta creada con éxito! Ahora inicia sesión.");
      modoRegistro = false;
      swModeText.click();
    } else {
      const usuarioEncontrado = baseUsuarios.find(u => u.user === userVal && u.pass === passVal);
      if (!usuarioEncontrado) {
        authError.textContent = "Usuario o contraseña incorrectos, o cuenta no existente.";
        authError.style.display = "block";
        return;
      }

      usuarioActual = usuarioEncontrado.name || usuarioEncontrado.user;
      localStorage.setItem('revelion_active_user', usuarioActual);
      actualizarUIUsuario();
      document.getElementById('login-modal').style.display = 'none';
      formAuth.reset();
    }
  };

  document.getElementById('btn-logout').onclick = () => {
    usuarioActual = null;
    localStorage.removeItem('revelion_active_user');
    actualizarUIUsuario();
  };
}

function revisarSesionActiva() {
  const activo = localStorage.getItem('revelion_active_user');
  if (activo) {
    usuarioActual = activo;
    actualizarUIUsuario();
  }
}

function actualizarUIUsuario() {
  const userDisplay = document.getElementById('user-display');
  const btnLoginModal = document.getElementById('btn-login-modal');
  const btnLogout = document.getElementById('btn-logout');

  if (usuarioActual) {
    userDisplay.textContent = `Hola, ${usuarioActual}`;
    userDisplay.style.display = 'inline-block';
    btnLoginModal.style.display = 'none';
    btnLogout.style.display = 'inline-block';
  } else {
    userDisplay.style.display = 'none';
    btnLoginModal.style.display = 'inline-block';
    btnLogout.style.display = 'none';
  }
}

// CARRITO Y MENSAJE FLOTANTE (TOAST)
function addToCart(id) {
  const p = productosEjemplo.find(item => item.id === id);
  const sizeSelect = document.getElementById(`size-${id}`);
  const selectedOption = sizeSelect ? sizeSelect.value : 'Estándar';
  
  if (p) {
    carrito.push({ ...p, opcionSeleccionada: selectedOption });
    updateCartUI();
    mostrarToast(`¡Agregaste "${p.nombre}" al carrito!`);
  }
}

function mostrarToast(mensaje) {
  const toast = document.getElementById('toast-notification');
  toast.textContent = mensaje;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function updateCartUI() {
  document.getElementById('cart-count').textContent = carrito.length;
  const list = document.getElementById('cart-items-list');
  list.innerHTML = '';
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;
    list.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.nombre}</strong><br>
          <small style="color: var(--text-muted);">${item.opcionSeleccionada} - Q ${item.precio.toFixed(2)}</small>
        </div>
        <button class="btn danger" style="padding:4px 8px; font-size:0.75rem;" onclick="removeFromCart(${index})">X</button>
      </div>
    `;
  });
  document.getElementById('cart-total').textContent = `Q ${total.toFixed(2)}`;
}

function removeFromCart(index) {
  carrito.splice(index, 1);
  updateCartUI();
}

function initCheckout() {
  document.getElementById('btn-checkout').onclick = () => {
    if (!usuarioActual) {
      alert("Debes iniciar sesión para realizar una compra.");
      document.getElementById('cart-modal').style.display = 'none';
      document.getElementById('login-modal').style.display = 'flex';
      return;
    }
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    alert(`¡Compra realizada con éxito, ${usuarioActual}! Gracias por tu pedido en Revelion Shop.`);
    carrito = [];
    updateCartUI();
    document.getElementById('cart-modal').style.display = 'none';
  };
}
