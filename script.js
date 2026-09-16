const productosEjemplo = [
  // Ropa (Mantiene selector de talla)
  { id: "1", nombre: "Sweater Básico Blanco de Algodón", precio: 220.00, tipo: "ropa", imagen: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80" },
  { id: "2", nombre: "Camiseta Casual Estampada Minimal", precio: 135.00, tipo: "ropa", imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80" },
  { id: "3", nombre: "Pantalón Cargo Urbano Beige", precio: 295.00, tipo: "ropa", imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80" },
  { id: "4", nombre: "Sudadera Manga Larga Estilo Urbano", precio: 250.00, tipo: "ropa", imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80" },
  { id: "5", nombre: "Pantalon Gris Estilo y2k", precio: 265.00, tipo: "ropa", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64HzNIcTADawH1w6YY0B3Qt6ax8fI-AbwoWd0pCCCqg&s=10" },
  { id: "6", nombre: "Pantalon Cargo Mujer Azul", precio: 250.00, tipo: "ropa", imagen: "https://m.media-amazon.com/images/I/812w-hkANhL._AC_SY1000_.jpg" },
  
  // Accesorios / Relojes (Individuales sin selector)
  { id: "7", nombre: "Reloj Minimalista Cronógrafo Acero", precio: 480.00, tipo: "reloj", imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" },
  { id: "8", nombre: "Reloj Deportivo Smartwatch Pro", precio: 699.00, tipo: "reloj", imagen: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80" },
  { id: "9", nombre: "Cadena para Pantalon", precio: 129.00, tipo: "reloj", imagen: "https://preview.redd.it/where-to-find-clothing-accessories-that-fit-grunge-y2k-easy-v0-532xvpj1x2cf1.jpg?width=640&crop=smart&auto=webp&s=59263934be3db1987893582837e12e9734468937" },
  { id: "10", nombre: "Pulsera estilo y2k", precio: 129.00, tipo: "reloj", imagen: "https://i.etsystatic.com/45963821/r/il/884f55/6146331475/il_fullxfull.6146331475_iv9b.jpg" },
  { id: "11", nombre: "Muñequera punk", precio: 219.00, tipo: "reloj", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZ9XXOQa9jGzpeF5VdUxm7kQMai7ao_auOu9FcglCJJe2-vCPGGGhZBo&s=10" },
  { id: "12", nombre: "Pendientes Estilo Fresa", precio: 110.00, tipo: "reloj", imagen: "https://www.chocolatecomplementos.com/wp-content/uploads/2026/02/fresa-arito-300x300.jpg" },
 
  // Coleccionables / Juguetes / Posters / etc (Individuales sin selector)
  { id: "13", nombre: "Posters estilo Anime", precio: 320.00, tipo: "coleccionable", imagen: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80" },
  { id: "14", nombre: "Auto de Colección Escala Clásico", precio: 150.00, tipo: "coleccionable", imagen: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80" },
  { id: "15", nombre: "Coleccionable de Pokemon Bulbasur", precio: 299.00, tipo: "coleccionable", imagen: "https://media.vulcanita.com.ar/uploads/2024/11/Foto1_Pokemon_PKW2297_Pack-.webp" },
  { id: "16", nombre: "Poster Serie Stranger Things", precio: 129.00, tipo: "coleccionable", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJrOB93U48zYkrjwNa78MV_hjW0V8_ieOuozrxGUfLW51YU2itbjptTI&s=10" },
  { id: "17", nombre: "Poster Rocky The Movie", precio: 149.00, tipo: "coleccionable", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXoPXyPxVf8rQ3n2ZBSBvALvEoC67ebI79uvW9KcETA&s=10" },
  { id: "18", nombre: "Poster Star Wars", precio: 149.00, tipo: "coleccionable", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQHjwyS0oHXHk2SqGFuBCJ6CGAMuAg4fdBUvJO_sXIdTHfcT0xihO_RQ&s=10" }
];

let carrito = [];
let usuarioActual = null;
let modoRegistro = false;

document.addEventListener('DOMContentLoaded', () => {
  renderCategorizedProducts();
  initModals();
  initAuthSystem();
  initCheckout();
  revisarSesionActiva();
  initHeroScroll();
});

function initHeroScroll() {
  const btnExplorar = document.getElementById('btn-explorar');
  if (btnExplorar) {
    btnExplorar.onclick = () => {
      document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    };
  }
}

function renderCategorizedProducts() {
  const gridRopa = document.getElementById('grid-ropa');
  const gridReloj = document.getElementById('grid-reloj');
  const gridColeccionable = document.getElementById('grid-coleccionable');

  if (gridRopa) gridRopa.innerHTML = '';
  if (gridReloj) gridReloj.innerHTML = '';
  if (gridColeccionable) gridColeccionable.innerHTML = '';

  productosEjemplo.forEach(p => {
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
            <option value="XL">XL</option>
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

    if (p.tipo === 'ropa' && gridRopa) {
      gridRopa.appendChild(card);
    } else if (p.tipo === 'reloj' && gridReloj) {
      gridReloj.appendChild(card);
    } else if (p.tipo === 'coleccionable' && gridColeccionable) {
      gridColeccionable.appendChild(card);
    }
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
        authError.textContent = "Usuario o contraseña incorrectos.";
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

function addToCart(id) {
  const p = productosEjemplo.find(item => item.id === id);
  const sizeSelect = document.getElementById(`size-${id}`);
  const selectedOption = sizeSelect ? `Talla: ${sizeSelect.value}` : 'Único';
  
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
    let detalleExtra = item.tipo === 'ropa' ? `<br><small style="color: var(--accent); font-weight: 700;">${item.opcionSeleccionada}</small>` : '';
    
    list.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.nombre}</strong>
          ${detalleExtra}<br>
          <small style="color: var(--text-muted);">Q ${item.precio.toFixed(2)}</small>
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
