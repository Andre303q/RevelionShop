// Base de datos de productos de Revelion Shop
const productos = [
  {
    id: 1,
    categoria: "ropa",
    nombre: { es: "Hoodie Oversize Minimal", en: "Minimal Oversize Hoodie" },
    precio: 350.00,
    imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    categoria: "ropa",
    nombre: { es: "Camiseta Aesthetic Black", en: "Aesthetic Black T-Shirt" },
    precio: 180.00,
    imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
    tallas: ["XS", "S", "M", "L"]
  },
  {
    id: 3,
    categoria: "accesorios",
    nombre: { es: "Gafas de Sol Cyberpunk", en: "Cyberpunk Sunglasses" },
    precio: 220.00,
    imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    categoria: "accesorios",
    nombre: { es: "Mochila Urbana Waterproof", en: "Urban Waterproof Backpack" },
    precio: 450.00,
    imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
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
    catalogueTitle: "Catálogo de Productos",
    catRopa: "Ropa y Prendas",
    catAccesorios: "Accesorios",
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
    catalogueTitle: "Product Catalogue",
    catRopa: "Apparel & Clothing",
    catAccesorios: "Accessories",
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

// RENDERIZADO DEL CATÁLOGO
function renderCatalogue() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';

  const categorias = {
    ropa: translations[currentLang].catRopa,
    accesorios: translations[currentLang].catAccesorios
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
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 1.5rem 0;" data-i18n="emptyCartAlert">${translations[currentLang].emptyCartAlert}</p>`;
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
    const t = translations[currentLang];

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
      document.getElementById('login-modal').style.display = 'flex'; // Abre auth si no está logueado
      // O abrir el modal de auth correspondiente:
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

    // Calcular el total actual
    let totalCompra = carrito.reduce((acc, item) => acc + item.precio, 0);

    // Generar datos del recibo con folio único
    const datosRecibo = {
      receiptNumber: `REC-${Date.now()}`,
      date: new Date().toISOString(),
      cliente: usuarioActual,
      items: [...carrito],
      totalAmount: totalCompra
    };

    // Pintar los datos en el modal de recibo
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

    // Vaciar carrito y cerrar modal del carrito
    carrito = [];
    localStorage.removeItem('revelion_cart');
    updateCartUI();
    document.getElementById('cart-modal').style.display = 'none';

    // Mostrar el recibo formal en pantalla
    receiptModal.style.display = 'flex';
  };
}
