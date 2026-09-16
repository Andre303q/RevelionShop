// Base de datos completa de productos de Revelion Shop
const productos = [
  // --- Ropa y Textil ---
  {
    id: 1,
    categoria: "ropa",
    nombre: { es: "Suéter Básico Blanco de Algodón", en: "Basic White Cotton Sweater" },
    precio: 220.00,
    imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    categoria: "ropa",
    nombre: { es: "Camiseta Casual Estampada Mínima", en: "Casual Minimal Print T-Shirt" },
    precio: 180.00,
    imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
    tallas: ["S", "M", "L"]
  },
  {
    id: 3,
    categoria: "ropa",
    nombre: { es: "Pantalón Cargo Urbano Beige", en: "Urban Beige Cargo Pants" },
    precio: 295.00,
    imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    categoria: "ropa",
    nombre: { es: "Sudadera Manga Larga Estilo Urbano", en: "Urban Style Long Sleeve Sweatshirt" },
    precio: 260.00,
    imagen: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
    tallas: ["S", "M", "L"]
  },
  {
    id: 5,
    categoria: "ropa",
    nombre: { es: "Pantalón Denim Brocado Y2K", en: "Y2K Brocade Denim Pants" },
    precio: 285.00,
    imagen: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    tallas: ["S", "M", "L"]
  },
  {
    id: 6,
    categoria: "ropa",
    nombre: { es: "Pantalón Cargo Mujer Azul", en: "Blue Women Cargo Pants" },
    precio: 250.00,
    imagen: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    tallas: ["S", "M", "L"]
  },

  // --- Accesorios y Relojes ---
  {
    id: 7,
    categoria: "accesorios",
    nombre: { es: "Reloj Minimalista Cronógrafo Acero", en: "Minimalist Steel Chronograph Watch" },
    precio: 489.00,
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    categoria: "accesorios",
    nombre: { es: "Reloj Deportivo Smartwatch Pro", en: "Smartwatch Pro Sport Watch" },
    precio: 699.00,
    imagen: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    categoria: "accesorios",
    nombre: { es: "Cadena para Pantalón", en: "Pants Chain" },
    precio: 129.00,
    imagen: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    categoria: "accesorios",
    nombre: { es: "Pulsera estilo Y2K", en: "Y2K Style Bracelet" },
    precio: 129.00,
    imagen: "https://images.unsplash.com/photo-1611591475271-e6e66488a08d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    categoria: "accesorios",
    nombre: { es: "Muñequera Punk", en: "Punk Wristband" },
    precio: 219.00,
    imagen: "https://images.unsplash.com/photo-1598560917505-59a36683c49c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    categoria: "accesorios",
    nombre: { es: "Pendientes Fresa Infensa", en: "Infensa Strawberry Earrings" },
    precio: 110.00,
    imagen: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80"
  },

  // --- Coleccionables y Juguetes ---
  {
    id: 13,
    categoria: "coleccionables",
    nombre: { es: "Poster Estilo Anime", en: "Anime Style Poster" },
    precio: 120.00,
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    categoria: "coleccionables",
    nombre: { es: "Auto de Colección Escala Clásico", en: "Classic Scale Collector Car" },
    precio: 150.00,
    imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    categoria: "coleccionables",
    nombre: { es: "Coleccionable de Pokémon Dulcezar", en: "Dulcezar Pokémon Collectible" },
    precio: 299.00,
    imagen: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    categoria: "coleccionables",
    nombre: { es: "Poster Serie Stranger Things", en: "Stranger Things Series Poster" },
    precio: 129.00,
    imagen: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    categoria: "coleccionables",
    nombre: { es: "Poster Rocky The Movie", en: "Rocky The Movie Poster" },
    precio: 149.00,
    imagen: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    categoria: "coleccionables",
    nombre: { es: "Poster Starwars", en: "Star Wars Poster" },
    precio: 149.00,
    imagen: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80"
  }
];

// Diccionario de traducciones
const translations = {
  es: {
    loginBtn: "Iniciar Sesión",
    logoutBtn: "Cerrar Sesión",
    cartBtn: "Carrito",
    heroTag: "Nueva Colección 2026",
    heroTitle: "Estilo urbano y <span>vanguardia</span>",
    heroDesc: "Explora las últimas tendencias en moda y accesorios diseñados para destacar en cualquier lugar.",
    heroExplore: "Explorar Catálogo",
    catalogueTitle: "Catálogo Exclusivo",
    catRopa: "Ropa y Textil",
    catAccesorios: "Accesorios y Relojes",
    catColeccionables: "Coleccionables y Juguetes",
    sizeLabel: "Talla:",
    addToCart: "Añadir al Carrito",
    loginTitle: "Iniciar Sesión",
    registerTitle: "Crear Cuenta",
    emailLabel: "Correo Electrónico",
    passwordLabel: "Contraseña",
    loginSubmit: "Ingresar",
    registerSubmit: "Registrarse",
    switchToRegister: "¿No tienes cuenta? Regístrate aquí",
    switchToLogin: "¿Ya tienes cuenta? Inicia sesión",
    cartTitle: "Tu Carrito",
    cartTotalLabel: "Total:",
    checkoutBtn: "Realizar Compra",
    loginRequiredAlert: "Debes iniciar sesión para realizar una compra.",
    emptyCartAlert: "Tu carrito está vacío.",
    toastAdded: "¡Producto añadido al carrito!",
    receiptTitle: "Comprobante de Pago",
    receiptNumberLabel: "Nro de Recibo:",
    receiptDateLabel: "Fecha:",
    receiptClientLabel: "Cliente:",
    printReceiptBtn: "Imprimir / PDF",
    closeReceiptBtn: "Cerrar"
  },
  en: {
    loginBtn: "Sign In",
    logoutBtn: "Sign Out",
    cartBtn: "Cart",
    heroTag: "New Collection 2026",
    heroTitle: "Urban style and <span>vanguard</span>",
    heroDesc: "Explore the latest trends in fashion and accessories designed to stand out anywhere.",
    heroExplore: "Explore Catalogue",
    catalogueTitle: "Exclusive Catalogue",
    catRopa: "Apparel & Textile",
    catAccesorios: "Accessories & Watches",
    catColeccionables: "Collectibles & Toys",
    sizeLabel: "Size:",
    addToCart: "Add to Cart",
    loginTitle: "Sign In",
    registerTitle: "Create Account",
    emailLabel: "Email Address",
    passwordLabel: "Password",
    loginSubmit: "Sign In",
    registerSubmit: "Register",
    switchToRegister: "Don't have an account? Register here",
    switchToLogin: "Already have an account? Sign in",
    cartTitle: "Your Cart",
    cartTotalLabel: "Total:",
    checkoutBtn: "Checkout",
    loginRequiredAlert: "You must be logged in to complete a purchase.",
    emptyCartAlert: "Your cart is empty.",
    toastAdded: "Product added to cart!",
    receiptTitle: "Payment Receipt",
    receiptNumberLabel: "Receipt No:",
    receiptDateLabel: "Date:",
    receiptClientLabel: "Customer:",
    printReceiptBtn: "Print / PDF",
    closeReceiptBtn: "Close"
  }
};

// Estado global de la aplicación
let currentLang = localStorage.getItem('revelion_lang') || 'es';
let currentTheme = localStorage.getItem('revelion_theme') || 'light';
let usuarioActual = localStorage.getItem('revelion_user') || null;
let carrito = JSON.parse(localStorage.getItem('revelion_cart')) || [];
let isRegisterMode = false;

// Inicialización general al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderCatalogue();
  updateAuthUI();
  updateCartUI();
  initModals();
  initAuth();
  initCheckout();
});

// GESTIÓN DE TEMA (CLARO / OSCURO)
function initTheme() {
  const htmlEl = document.documentElement;
  htmlEl.setAttribute('data-theme', currentTheme);
  
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  themeToggleBtn.onclick = () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', currentTheme);
    localStorage.setItem('revelion_theme', currentTheme);
  };
}

// GESTIÓN DE IDIOMA
function initLanguage() {
  const langSelector = document.getElementById('lang-selector');
  langSelector.value = currentLang;
  applyTranslations();

  langSelector.onchange = (e) => {
    currentLang = e.target.value;
    localStorage.setItem('revelion_lang', currentLang);
    applyTranslations();
    renderCatalogue();
  };
}

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
  updateAuthUI();
}

// RENDERIZADO DEL CATÁLOGO COMPLETO
function renderCatalogue() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';

  const categorias = {
    ropa: translations[currentLang].catRopa,
    accesorios: translations[currentLang].catAccesorios,
    coleccionables: translations[currentLang].catColeccionables
  };

  for (const [key, labelName] of Object.entries(categorias)) {
    const productosCat = productos.filter(p => p.categoria === key);
    if (productosCat.length === 0) continue;

    let sectionHTML = `
      <div class="category-section">
        <h3 class="category-title">${labelName}</h3>
        <div class="products-grid">
    `;

    productosCat.forEach(prod => {
      const nombreProd = prod.nombre[currentLang] || prod.nombre.es;
      let sizeSelectorHTML = '';

      if (prod.tallas) {
        let optionsHTML = prod.tallas.map(t => `<option value="${t}">${t}</option>`).join('');
        sizeSelectorHTML = `
          <div class="size-selector-wrapper">
            <label>${translations[currentLang].sizeLabel}</label>
            <select id="size-${prod.id}">${optionsHTML}</select>
          </div>
        `;
      }

      sectionHTML += `
        <div class="card">
          <div class="card-img-container">
            <img src="${prod.imagen}" alt="${nombreProd}" loading="lazy">
          </div>
          <div class="card-body">
            <div>
              <h4 class="card-title">${nombreProd}</h4>
              <div class="card-price">${formatearPrecio(prod.precio)}</div>
            </div>
            <div>
              ${sizeSelectorHTML}
              <button class="btn primary" style="width: 100%;" onclick="agregarAlCarrito(${prod.id})">
                ${translations[currentLang].addToCart}
              </button>
            </div>
          </div>
        </div>
      `;
    });

    sectionHTML += `</div></div>`;
    container.innerHTML += sectionHTML;
  }
}

function formatearPrecio(monto) {
  return `Q ${monto.toFixed(2)}`;
}

// GESTIÓN DEL CARRITO
function agregarAlCarrito(idProducto) {
  const productoBase = productos.find(p => p.id === idProducto);
  if (!productoBase) return;

  let opcionSeleccionada = null;
  if (productoBase.tallas) {
    const selectTalla = document.getElementById(`size-${idProducto}`);
    opcionSeleccionada = selectTalla ? selectTalla.value : productoBase.tallas[0];
  }

  const itemCarrito = {
    ...productoBase,
    opcionSeleccionada,
    cartItemId: Date.now() + Math.random()
  };

  carrito.push(itemCarrito);
  localStorage.setItem('revelion_cart', JSON.stringify(carrito));
  updateCartUI();
  showToast();
}

function actualizarContenidoCarritoModal() {
  const container = document.getElementById('cart-items-container');
  const totalAmountEl = document.getElementById('cart-total-amount');
  container.innerHTML = '';

  if (carrito.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 1.5rem 0;">${translations[currentLang].emptyCartAlert}</p>`;
    totalAmountEl.textContent = formatearPrecio(0);
    return;
  }

  let total = 0;
  carrito.forEach(item => {
    const nombreProd = item.nombre[currentLang] || item.nombre.es;
    const detalleExtra = item.opcionSeleccionada ? `<br><small style="color: var(--accent); font-weight: 700;">${translations[currentLang].sizeLabel} ${item.opcionSeleccionada}</small>` : '';
    total += item.precio;

    container.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${nombreProd}</strong>
          ${detalleExtra}
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-weight: 700;">${formatearPrecio(item.precio)}</span>
          <button class="btn danger" style="padding: 4px 8px; font-size: 0.75rem;" onclick="eliminarDelCarrito(${item.cartItemId})">X</button>
        </div>
      </div>
    `;
  });

  totalAmountEl.textContent = formatearPrecio(total);
}

function eliminarDelCarrito(cartItemId) {
  carrito = carrito.filter(item => item.cartItemId !== cartItemId);
  localStorage.setItem('revelion_cart', JSON.stringify(carrito));
  updateCartUI();
  actualizarContenidoCarritoModal();
}

function updateCartUI() {
  const countEl = document.getElementById('cart-count');
  countEl.textContent = carrito.length;
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.textContent = translations[currentLang].toastAdded;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// MODALES Y AUTENTICACIÓN
function initModals() {
  const cartModal = document.getElementById('cart-modal');
  const authModal = document.getElementById('auth-modal');

  document.getElementById('btn-cart').onclick = () => {
    actualizarContenidoCarritoModal();
    cartModal.style.display = 'flex';
  };
  document.getElementById('close-cart').onclick = () => cartModal.style.display = 'none';

  window.onclick = (e) => {
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === authModal) authModal.style.display = 'none';
  };

  document.getElementById('logo-home').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

function updateAuthUI() {
  const userDisplay = document.getElementById('user-display');
  const btnAuth = document.getElementById('btn-auth');
  const t = translations[currentLang];

  if (usuarioActual) {
    userDisplay.textContent = usuarioActual;
    userDisplay.style.display = 'inline-block';
    btnAuth.textContent = t.logoutBtn;
    btnAuth.className = 'btn danger';
  } else {
    userDisplay.style.display = 'none';
    btnAuth.textContent = t.loginBtn;
    btnAuth.className = 'btn secondary';
  }
}

function initAuth() {
  const authModal = document.getElementById('auth-modal');
  const btnAuth = document.getElementById('btn-auth');
  const closeAuth = document.getElementById('close-auth');
  const authForm = document.getElementById('auth-form');
  const authSwitch = document.getElementById('auth-switch-mode');
  const authError = document.getElementById('auth-error');

  btnAuth.onclick = () => {
    if (usuarioActual) {
      usuarioActual = null;
      localStorage.removeItem('revelion_user');
      updateAuthUI();
      return;
    }
    isRegisterMode = false;
    renderAuthMode();
    authError.style.display = 'none';
    authModal.style.display = 'flex';
  };

  closeAuth.onclick = () => authModal.style.display = 'none';

  authSwitch.onclick = (e) => {
    e.preventDefault();
    isRegisterMode = !isRegisterMode;
    renderAuthMode();
    authError.style.display = 'none';
  };

  authForm.onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('auth-email').value.trim();
    const pass = document.getElementById('auth-password').value.trim();

    if (isRegisterMode) {
      localStorage.setItem(`user_${email}`, pass);
      usuarioActual = email;
      localStorage.setItem('revelion_user', usuarioActual);
      authModal.style.display = 'none';
      updateAuthUI();
    } else {
      const storedPass = localStorage.getItem(`user_${email}`);
      if (storedPass && storedPass === pass) {
        usuarioActual = email;
        localStorage.setItem('revelion_user', usuarioActual);
        authModal.style.display = 'none';
        updateAuthUI();
      } else {
        authError.textContent = currentLang === 'es' ? "Credenciales inválidas o cuenta no existente." : "Invalid credentials or non-existent account.";
        authError.style.display = 'block';
      }
    }
    authForm.reset();
  };
}

function renderAuthMode() {
  const t = translations[currentLang];
  document.getElementById('auth-modal-title').textContent = isRegisterMode ? t.registerTitle : t.loginTitle;
  document.getElementById('auth-submit-btn').textContent = isRegisterMode ? t.registerSubmit : t.loginSubmit;
  document.getElementById('auth-switch-mode').textContent = isRegisterMode ? t.switchToLogin : t.switchToRegister;
}

// PROCESAMIENTO DE COMPRA Y RECIBO NATIVO
function initCheckout() {
  const receiptModal = document.getElementById('receipt-modal');
  const closeReceiptBtn = document.getElementById('close-receipt');
  const btnCerrarRecibo = document.getElementById('btn-cerrar-recibo');

  closeReceiptBtn.onclick = () => receiptModal.style.display = 'none';
  btnCerrarRecibo.onclick = () => receiptModal.style.display = 'none';

  window.addEventListener('click', (e) => {
    if (e.target === receiptModal) {
      receiptModal.style.display = 'none';
    }
  });

  document.getElementById('btn-checkout').onclick = () => {
    const t = translations[currentLang];
    if (!usuarioActual) {
      alert(t.loginRequiredAlert);
      document.getElementById('cart-modal').style.display = 'none';
      const authModal = document.getElementById('auth-modal');
      isRegisterMode = false;
      renderAuthMode();
      authModal.style.display = 'flex';
      return;
    }
    if (carrito.length === 0) {
      alert(t.emptyCartAlert);
      return;
    }

    let totalCompra = carrito.reduce((acc, item) => acc + item.precio, 0);

    const datosRecibo = {
      receiptNumber: `REC-${Date.now()}`,
      date: new Date().toISOString(),
      cliente: usuarioActual,
      items: [...carrito],
      totalAmount: totalCompra
    };

    document.getElementById('r-number').textContent = datosRecibo.receiptNumber;
    document.getElementById('r-date').textContent = new Date(datosRecibo.date).toLocaleString();
    document.getElementById('r-client').textContent = datosRecibo.cliente;
    document.getElementById('r-total').textContent = formatearPrecio(datosRecibo.totalAmount);

    const contenedorItemsRecibo = document.getElementById('r-items');
    contenedorItemsRecibo.innerHTML = '';

    datosRecibo.items.forEach(item => {
      const nombreArticulo = item.nombre[currentLang] || item.nombre.es;
      const detalleExtra = item.opcionSeleccionada ? `<br><small style="color: var(--accent); font-weight: 700;">${translations[currentLang].sizeLabel} ${item.opcionSeleccionada}</small>` : '';
      
      contenedorItemsRecibo.innerHTML += `
        <div class="cart-item">
          <div>
            <strong>${nombreArticulo}</strong>
            ${detalleExtra}
          </div>
          <div style="font-weight: 700;">${formatearPrecio(item.precio)}</div>
        </div>
      `;
    });

    carrito = [];
    localStorage.removeItem('revelion_cart');
    updateCartUI();
    document.getElementById('cart-modal').style.display = 'none';

    receiptModal.style.display = 'flex';
  };
}
