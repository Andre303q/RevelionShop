const productosEjemplo = [  
  // Ropa  
  {   
    id: "1",   
    nombre: { es: "Sweater Básico Blanco de Algodón", en: "Basic White Cotton Sweater" },   
    precio: 220.00,   
    tipo: "ropa",   
    imagen: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80"   
  }, 
  {   
    id: "2",   
    nombre: { es: "Camiseta Casual Estampada Minimal", en: "Minimal Printed Casual T-Shirt" },   
    precio: 135.00,   
    tipo: "ropa",   
    imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80"   
  }, 
  {   
    id: "3",   
    nombre: { es: "Pantalón Cargo Urbano Beige", en: "Beige Urban Cargo Pants" },   
    precio: 295.00,   
    tipo: "ropa",   
    imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80"   
  }, 
  {   
    id: "4",   
    nombre: { es: "Sudadera Manga Larga Estilo Urbano", en: "Urban Style Long Sleeve Hoodie" },   
    precio: 250.00,   
    tipo: "ropa",   
    imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80"   
  }, 
  {   
    id: "5",   
    nombre: { es: "Pantalón Gris Estilo Y2K", en: "Y2K Style Grey Pants" },   
    precio: 265.00,   
    tipo: "ropa",   
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64HzNIcTADawH1w6YY0B3Qt6ax8fI-AbwoWd0pCCCqg&s=10"   
  }, 
  {   
    id: "6",   
    nombre: { es: "Pantalón Cargo Mujer Azul", en: "Women's Blue Cargo Pants" },   
    precio: 250.00,   
    tipo: "ropa",   
    imagen: "https://m.media-amazon.com/images/I/812w-hkANhL._AC_SY1000_.jpg"   
  }, 
   
  // Accesorios  
  {   
    id: "7",   
    nombre: { es: "Reloj Minimalista Cronógrafo Acero", en: "Minimalist Steel Chronograph Watch" },   
    precio: 480.00,   
    tipo: "reloj",   
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"   
  }, 
  {   
    id: "8",   
    nombre: { es: "Reloj Deportivo Smartwatch Pro", en: "Smartwatch Pro Sport Watch" },   
    precio: 699.00,   
    tipo: "reloj",   
    imagen: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80"   
  }, 
  {   
    id: "9",   
    nombre: { es: "Cadena para Pantalón", en: "Pants Chain Accessory" },   
    precio: 129.00,   
    tipo: "reloj",   
    imagen: "https://preview.redd.it/where-to-find-clothing-accessories-that-fit-grunge-y2k-easy-v0-532xvpj1x2cf1.jpg?width=640&crop=smart&auto=webp&s=59263934be3db1987893582837e12e9734468937"  
  }, 
  {   
    id: "10",   
    nombre: { es: "Pulsera estilo Y2K", en: "Y2K Style Bracelet" },   
    precio: 129.00,   
    tipo: "reloj",   
    imagen: "https://i.etsystatic.com/45963821/r/il/884f55/6146331475/il_fullxfull.6146331475_iv9b.jpg"   
  }, 
  {   
    id: "11",   
    nombre: { es: "Muñequera Punk", en: "Punk Leather Wristband" },   
    precio: 219.00,   
    tipo: "reloj",   
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZ9XXOQa9jGzpeF5VdUxm7kQMai7ao_auOu9FcglCJJe2-vCPGGGhZBo&s=10"  
  }, 
  {   
    id: "12",   
    nombre: { es: "Pendientes Estilo Fresa", en: "Strawberry Style Earrings" },   
    precio: 110.00,   
    tipo: "reloj",   
    imagen: "https://www.chocolatecomplementos.com/wp-content/uploads/2026/02/fresa-arito-300x300.jpg"   
  }, 
  
  // Coleccionables  
  {   
    id: "13",   
    nombre: { es: "Posters estilo Anime", en: "Anime Style Posters" },   
    precio: 320.00,   
    tipo: "coleccionable",   
    imagen: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80"   
  }, 
  {   
    id: "14",   
    nombre: { es: "Auto de Colección Escala Clásico", en: "Classic Scale Collectible Car" },   
    precio: 150.00,   
    tipo: "coleccionable",   
    imagen: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80"   
  }, 
  {   
    id: "15",   
    nombre: { es: "Coleccionable de Pokémon Bulbasaur", en: "Bulbasaur Pokémon Collectible" },   
    precio: 299.00,   
    tipo: "coleccionable",   
    imagen: "https://media.vulcanita.com.ar/uploads/2024/11/Foto1_Pokemon_PKW2297_Pack-.webp"   
  }, 
  {   
    id: "16",   
    nombre: { es: "Poster Serie Stranger Things", en: "Stranger Things TV Series Poster" },   
    precio: 129.00,   
    tipo: "coleccionable",   
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJrOB93U48zYkrjwNa78MV_hjW0V8_ieOuozrxGUfLW51YU2itbjptTI&s=10"  
  }, 
  {   
    id: "17",   
    nombre: { es: "Poster Rocky The Movie", en: "Rocky The Movie Poster" },   
    precio: 149.00,   
    tipo: "coleccionable",   
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXoPXyPxVf8rQ3n2ZBSBvALvEoC67ebI79uvW9KcETA&s=10"   
  }, 
  {   
    id: "18",   
    nombre: { es: "Poster Star Wars", en: "Star Wars Poster" },   
    precio: 149.00,   
    tipo: "coleccionable",   
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQHjwyS0oHXHk2SqGFuBCJ6CGAMuAg4fdBUvJO_sXIdTHfcT0xihO_RQ&s=10"  
  } 
]; 

// DICCIONARIO DE IDIOMAS 
const translations = { 
  es: { 
    loginBtn: "Iniciar Sesión", 
    logoutBtn: "Salir", 
    cartBtn: "Carrito", 
    heroTag: "Nueva Colección 2026", 
    heroTitle: "Estilo urbano y <span>vanguardia</span>", 
    heroDesc: "Explora las últimas tendencias en moda y accesorios diseñados para destacar en cualquier lugar.", 
    heroExplore: "Explorar Catálogo", 
    catalogueTitle: "Catálogo de Productos", 
    catRopa: "Ropa y Textil", 
    catReloj: "Accesorios y Relojes", 
    catColeccionable: "Coleccionables y Juguetes", 
    addToCartBtn: "Añadir al Carrito", 
    sizeLabel: "Talla", 
    cartTitle: "Tu Carrito", 
    cartTotalLabel: "Total:", 
    checkoutBtn: "Realizar Compra", 
    loginTitle: "Iniciar Sesión", 
    registerTitle: "Crear Cuenta Nueva", 
    nameLabel: "Nombre Completo", 
    emailLabel: "Correo Electrónico", 
    passwordLabel: "Contraseña", 
    loginSubmit: "Ingresar", 
    registerSubmit: "Registrarse", 
    switchToRegister: "¿No tienes cuenta? Regístrate aquí", 
    switchToLogin: "¿Ya tienes cuenta? Inicia sesión aquí", 
    toastAdded: "¡Producto añadido al carrito!", 
    toastCheckout: "¡Compra realizada con éxito, ", 
    emptyCartAlert: "Tu carrito está vacío.", 
    loginRequiredAlert: "Debes iniciar sesión para realizar una compra.",
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
    heroTitle: "Urban style and <span>avant-garde</span>", 
    heroDesc: "Explore the latest trends in fashion and accessories designed to stand out anywhere.", 
    heroExplore: "Explore Catalogue", 
    catalogueTitle: "Product Catalogue", 
    catRopa: "Apparel & Textile", 
    catReloj: "Accessories & Watches", 
    catColeccionable: "Collectibles & Toys", 
    addToCartBtn: "Add to Cart", 
    sizeLabel: "Size", 
    cartTitle: "Your Cart", 
    cartTotalLabel: "Total:", 
    checkoutBtn: "Checkout", 
    loginTitle: "Sign In", 
    registerTitle: "Create New Account", 
    nameLabel: "Full Name", 
    emailLabel: "Email Address", 
    passwordLabel: "Password", 
    loginSubmit: "Sign In", 
    registerSubmit: "Register", 
    switchToRegister: "Don't have an account? Register here", 
    switchToLogin: "Already have an account? Sign in here", 
    toastAdded: "Product added to cart!", 
    toastCheckout: "Purchase successful, ", 
    emptyCartAlert: "Your cart is empty.", 
    loginRequiredAlert: "You must sign in to make a purchase.",
    receiptTitle: "Payment Receipt",
    receiptNumberLabel: "Receipt No:",
    receiptDateLabel: "Date:",
    receiptClientLabel: "Client:",
    printReceiptBtn: "Print / PDF",
    closeReceiptBtn: "Close"
  } 
}; 

let currentLang = localStorage.getItem('revelion_lang') || 'es'; 
let carrito = []; 
let usuarioActual = null; 
let modoRegistro = false; 
const TASA_CAMBIO_USD = 7.8; 

document.addEventListener('DOMContentLoaded', () => { 
  initLanguageSystem(); 
  initThemeSystem(); 
  renderCategorizedProducts(); 
  initModals(); 
  initAuthSystem(); 
  initCheckout(); 
  revisarSesionActiva(); 
  initNavigation(); 
}); 

function initNavigation() { 
  const logoHome = document.getElementById('logo-home');
  if (logoHome) {
    logoHome.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
} 

function initLanguageSystem() { 
  const langSelector = document.getElementById('lang-selector'); 
  if (!langSelector) return;
  
  langSelector.value = currentLang; 
  applyTranslations(); 

  langSelector.onchange = (e) => { 
    currentLang = e.target.value; 
    localStorage.setItem('revelion_lang', currentLang); 
    applyTranslations(); 
    renderCategorizedProducts(); 
    updateCartUI(); 
  }; 
} 

function applyTranslations() { 
  const t = translations[currentLang]; 
  document.querySelectorAll('[data-i18n]').forEach(el => { 
    const key = el.getAttribute('data-i18n'); 
    if (t[key]) el.textContent = t[key]; 
  }); 
} 

function initThemeSystem() { 
  const btnThemeToggle = document.getElementById('btn-theme-toggle'); 
  const themeIcon = document.getElementById('theme-icon'); 
  if (!btnThemeToggle || !themeIcon) return;
   
  const savedTheme = localStorage.getItem('revelion_theme') || 'light'; 
  if (savedTheme === 'dark') { 
    document.documentElement.setAttribute('data-theme', 'dark'); 
    setSunIcon(themeIcon); 
  } else { 
    document.documentElement.removeAttribute('data-theme'); 
    setMoonIcon(themeIcon); 
  } 

  btnThemeToggle.onclick = () => { 
    const currentTheme = document.documentElement.getAttribute('data-theme'); 
    if (currentTheme === 'dark') { 
      document.documentElement.removeAttribute('data-theme'); 
      localStorage.setItem('revelion_theme', 'light'); 
      setMoonIcon(themeIcon); 
    } else { 
      document.documentElement.setAttribute('data-theme', 'dark'); 
      localStorage.setItem('revelion_theme', 'dark'); 
      setSunIcon(themeIcon); 
    } 
  }; 
} 

function setMoonIcon(svg) { 
  svg.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>'; 
} 

function setSunIcon(svg) { 
  svg.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'; 
} 

function formatearPrecio(precioGTQ) { 
  if (currentLang === 'en') { 
    const precioUSD = precioGTQ / TASA_CAMBIO_USD; 
    return `$ ${precioUSD.toFixed(2)} USD`; 
  } 
  return `Q ${precioGTQ.toFixed(2)}`; 
} 

function renderCategorizedProducts() { 
  const container = document.getElementById('categories-container');
  if (!container) return;

  container.innerHTML = ''; 
  const t = translations[currentLang]; 

  // Agrupar por categorías lógicas
  const categorias = {
    ropa: { titulo: t.catRopa, items: productosEjemplo.filter(p => p.tipo === 'ropa') },
    reloj: { titulo: t.catReloj, items: productosEjemplo.filter(p => p.tipo === 'reloj') },
    coleccionable: { titulo: t.catColeccionable, items: productosEjemplo.filter(p => p.tipo === 'coleccionable') }
  };

  for (const catKey in categorias) {
    const catData = categorias[catKey];
    if (catData.items.length === 0) continue;

    const catSection = document.createElement('div');
    catSection.className = 'category-section';
    catSection.innerHTML = `<h3 class="category-title" style="margin: 2rem 0 1rem 0; font-size: 1.5rem;">${catData.titulo}</h3>`;
    
    const grid = document.createElement('div');
    grid.className = 'products-grid';
    grid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;';

    catData.items.forEach(p => {
      const card = document.createElement('div'); 
      card.className = 'card'; 
      card.style.cssText = 'background: var(--card-bg, #fff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; padding: 1rem;';
       
      let selectorHTML = ''; 
      if (p.tipo === 'ropa') { 
        selectorHTML = ` 
          <div class="size-selector-wrapper" style="margin: 0.5rem 0;"> 
            <label style="font-size: 0.85rem;">${t.sizeLabel}: </label> 
            <select class="product-size" id="size-${p.id}" style="padding: 4px; border-radius: 4px;"> 
              <option value="S">S</option> 
              <option value="M" selected>M</option> 
              <option value="L">L</option> 
              <option value="XL">XL</option> 
            </select> 
          </div>`; 
      } 

      const nombreArticulo = p.nombre[currentLang] || p.nombre.es; 
      const precioFormateado = formatearPrecio(p.precio); 

      card.innerHTML = ` 
        <div class="card-img-container" style="width: 100%; height: 200px; overflow: hidden; border-radius: 8px;"> 
          <img src="${p.imagen}" alt="${nombreArticulo}" style="width: 100%; height: 100%; object-fit: cover;"> 
        </div> 
        <div class="card-body" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between; margin-top: 1rem;"> 
          <div> 
            <h4 class="card-title" style="font-size: 1rem; margin-bottom: 0.5rem;">${nombreArticulo}</h4> 
            <p class="card-price" style="font-weight: bold; color: var(--accent, #6366f1);">${precioFormateado}</p> 
            ${selectorHTML} 
          </div> 
          <button class="btn primary" style="width: 100%; margin-top: 0.5rem;" onclick="addToCart('${p.id}')">${t.addToCartBtn}</button> 
        </div> 
      `; 
      grid.appendChild(card);
    });

    catSection.appendChild(grid);
    container.appendChild(catSection);
  }
} 

function initModals() { 
  const authModal = document.getElementById('auth-modal'); 
  const cartModal = document.getElementById('cart-modal'); 
  const receiptModal = document.getElementById('receipt-modal');

  const btnAuth = document.getElementById('btn-auth');
  const closeAuth = document.getElementById('close-auth');
  const btnCart = document.getElementById('btn-cart');
  const closeCart = document.getElementById('close-cart');
  const closeReceipt = document.getElementById('close-receipt');
  const btnCerrarRecibo = document.getElementById('btn-cerrar-recibo');

  if (btnAuth && authModal) btnAuth.onclick = () => authModal.style.display = 'flex'; 
  if (closeAuth && authModal) closeAuth.onclick = () => authModal.style.display = 'none'; 
  if (btnCart && cartModal) btnCart.onclick = () => cartModal.style.display = 'flex'; 
  if (closeCart && cartModal) closeCart.onclick = () => cartModal.style.display = 'none'; 
  if (closeReceipt && receiptModal) closeReceipt.onclick = () => receiptModal.style.display = 'none';
  if (btnCerrarRecibo && receiptModal) btnCerrarRecibo.onclick = () => receiptModal.style.display = 'none';

  window.onclick = (e) => { 
    if (authModal && e.target === authModal) authModal.style.display = 'none'; 
    if (cartModal && e.target === cartModal) cartModal.style.display = 'none'; 
    if (receiptModal && e.target === receiptModal) receiptModal.style.display = 'none';
  }; 
} 

function initAuthSystem() { 
  const formAuth = document.getElementById('auth-form'); 
  const authSwitchMode = document.getElementById('auth-switch-mode'); 
  const authModalTitle = document.getElementById('auth-modal-title'); 
  const groupName = document.getElementById('group-name'); 
  const authSubmitBtn = document.getElementById('auth-submit-btn'); 
  const authError = document.getElementById('auth-error'); 

  if (authSwitchMode && formAuth) {
    authSwitchMode.onclick = (e) => { 
      e.preventDefault(); 
      modoRegistro = !modoRegistro; 
      if (authError) authError.style.display = 'none'; 
      formAuth.reset(); 
      const t = translations[currentLang]; 

      if (modoRegistro) { 
        if (authModalTitle) authModalTitle.textContent = t.registerTitle; 
        if (groupName) groupName.style.display = "block"; 
        if (authSubmitBtn) authSubmitBtn.textContent = t.registerSubmit; 
        authSwitchMode.textContent = t.switchToLogin; 
      } else { 
        if (authModalTitle) authModalTitle.textContent = t.loginTitle; 
        if (groupName) groupName.style.display = "none"; 
        if (authSubmitBtn) authSubmitBtn.textContent = t.loginSubmit; 
        authSwitchMode.textContent = t.switchToRegister; 
      } 
    }; 

    formAuth.onsubmit = (e) => { 
      e.preventDefault(); 
      if (authError) authError.style.display = 'none'; 
      const emailVal = document.getElementById('auth-email').value.trim(); 
      const passVal = document.getElementById('auth-password').value.trim(); 
      const nameInput = document.getElementById('auth-name');
      const nameVal = nameInput ? nameInput.value.trim() : ''; 

      let baseUsuarios = JSON.parse(localStorage.getItem('revelion_users')) || []; 

      if (modoRegistro) { 
        const existe = baseUsuarios.find(u => u.email === emailVal); 
        if (existe) { 
          if (authError) {
            authError.textContent = currentLang === 'es' ? "El correo ya está registrado." : "Email already registered."; 
            authError.style.display = "block"; 
          }
          return; 
        } 
        baseUsuarios.push({ email: emailVal, pass: passVal, name: nameVal }); 
        localStorage.setItem('revelion_users', JSON.stringify(baseUsuarios)); 

        alert(currentLang === 'es' ? "¡Cuenta creada con éxito! Ahora inicia sesión." : "Account created successfully! Please sign in."); 
        modoRegistro = false; 
        authSwitchMode.click(); 
      } else { 
        const usuarioEncontrado = baseUsuarios.find(u => u.email === emailVal && u.pass === passVal); 
        if (!usuarioEncontrado) { 
          if (authError) {
            authError.textContent = currentLang === 'es' ? "Correo o contraseña incorrectos." : "Invalid email or password."; 
            authError.style.display = "block"; 
          }
          return; 
        } 

        usuarioActual = usuarioEncontrado.name || usuarioEncontrado.email; 
        localStorage.setItem('revelion_active_user', usuarioActual); 
        actualizarUIUsuario(); 
        const authModal = document.getElementById('auth-modal');
        if (authModal) authModal.style.display = 'none'; 
        formAuth.reset(); 
      } 
    }; 
  }
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
  const btnAuth = document.getElementById('btn-auth'); 

  if (!userDisplay || !btnAuth) return;

  const t = translations[currentLang];
  if (usuarioActual) { 
    userDisplay.textContent = `${currentLang === 'es' ? 'Hola' : 'Hello'}, ${usuarioActual}`; 
    userDisplay.style.display = 'inline-block'; 
    btnAuth.textContent = t.logoutBtn;
    btnAuth.onclick = () => {
      usuarioActual = null;
      localStorage.removeItem('revelion_active_user');
      actualizarUIUsuario();
    };
  } else { 
    userDisplay.style.display = 'none'; 
    btnAuth.textContent = t.loginBtn;
    btnAuth.onclick = () => {
      const authModal = document.getElementById('auth-modal');
      if (authModal) authModal.style.display = 'flex';
    };
  } 
} 

function addToCart(id) { 
  const p = productosEjemplo.find(item => item.id === id); 
  const sizeSelect = document.getElementById(`size-${id}`); 
  const selectedOption = sizeSelect ? `${translations[currentLang].sizeLabel}: ${sizeSelect.value}` : ''; 
   
  if (p) { 
    carrito.push({ ...p, opcionSeleccionada: selectedOption }); 
    updateCartUI(); 
    mostrarToast(translations[currentLang].toastAdded); 
  } 
} 

function mostrarToast(mensaje) { 
  const toast = document.getElementById('toast'); 
  if (!toast) return;
  
  toast.textContent = mensaje; 
  toast.classList.add('show'); 
   
  setTimeout(() => { 
    toast.classList.remove('show'); 
  }, 2500); 
} 

function updateCartUI() { 
  const cartCount = document.getElementById('cart-count');
  if (cartCount) cartCount.textContent = carrito.length; 
  
  const list = document.getElementById('cart-items-container'); 
  if (!list) return;

  list.innerHTML = ''; 
  let total = 0; 

  carrito.forEach((item, index) => { 
    total += item.precio; 
    const nombreArticulo = item.nombre[currentLang] || item.nombre.es; 
    let detalleExtra = item.tipo === 'ropa' ? `<br><small style="color: var(--accent, #6366f1); font-weight: 700;">${item.opcionSeleccionada}</small>` : ''; 
     
    list.innerHTML += ` 
      <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid var(--border-color, #eee); padding-bottom: 8px;"> 
        <div> 
          <strong>${nombreArticulo}</strong> 
          ${detalleExtra}<br> 
          <small style="color: var(--text-muted);">${formatearPrecio(item.precio)}</small> 
        </div> 
        <button class="btn danger" style="padding:4px 8px; font-size:0.75rem; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer;" onclick="removeFromCart(${index})">X</button> 
      </div> 
    `; 
  }); 
  
  const cartTotal = document.getElementById('cart-total-amount');
  if (cartTotal) cartTotal.textContent = formatearPrecio(total); 
} 

function removeFromCart(index) { 
  carrito.splice(index, 1); 
  updateCartUI(); 
} 

function initCheckout() { 
  const btnCheckout = document.getElementById('btn-checkout');
  if (!btnCheckout) return;

  btnCheckout.onclick = () => { 
    const t = translations[currentLang]; 
    if (!usuarioActual) { 
      alert(t.loginRequiredAlert); 
      const cartModal = document.getElementById('cart-modal');
      const authModal = document.getElementById('auth-modal');
      if (cartModal) cartModal.style.display = 'none'; 
      if (authModal) authModal.style.display = 'flex'; 
      return; 
    } 
    if (carrito.length === 0) { 
      alert(t.emptyCartAlert); 
      return; 
    } 

    // Generar recibo nativo
    const rNumber = document.getElementById('r-number');
    const rDate = document.getElementById('r-date');
    const rClient = document.getElementById('r-client');
    const rItems = document.getElementById('r-items');
    const rTotal = document.getElementById('r-total');

    if (rNumber) rNumber.textContent = 'REV-' + Math.floor(100000 + Math.random() * 900000);
    if (rDate) rDate.textContent = new Date().toLocaleString();
    if (rClient) rClient.textContent = usuarioActual;

    let totalRecibo = 0;
    if (rItems) {
      rItems.innerHTML = '';
      carrito.forEach(item => {
        totalRecibo += item.precio;
        const nombreArticulo = item.nombre[currentLang] || item.nombre.es;
        rItems.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:5px;"><span>${nombreArticulo}</span> <span>${formatearPrecio(item.precio)}</span></div>`;
      });
    }

    if (rTotal) rTotal.textContent = formatearPrecio(totalRecibo);

    // Ocultar carrito y mostrar modal de recibo
    const cartModal = document.getElementById('cart-modal');
    const receiptModal = document.getElementById('receipt-modal');
    if (cartModal) cartModal.style.display = 'none';
    if (receiptModal) receiptModal.style.display = 'flex';

    // Vaciar carrito
    carrito = []; 
    updateCartUI(); 
  }; 
}
