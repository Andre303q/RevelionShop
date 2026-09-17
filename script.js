const productosEjemplo = [  
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
  },
    {   
    id: "19",   
    nombre: { es: "Collar Hongo Para Mujer", en: "Women's Mushroom Necklace" },   
    precio: 159.00,   
    tipo: "reloj",   
    imagen: "https://www.ostu.com/dw/image/v2/BHFM_PRD/on/demandware.static/-/Sites-storefront_catalog_ostu/default/dweff07e6e/images/hi-res/2026/07/sets-de-accesorios-para-mujer-40510042-73046_1.jpg?sw=480&sh=576"  
  },
    {   
    id: "20",   
    nombre: { es: "Llavero Estilo Y2K", en: "Y2K Keychain" },   
    precio: 129.00,   
    tipo: "reloj",   
    imagen: "https://blummishop.com/wp-content/uploads/2024/08/Llavero-Y2K-2.png"  
  }, 
    {   
    id: "21",   
    nombre: { es: "Sudadera Blanca Y2K", en: "White Hoodie Y2K" },   
    precio: 249.00,   
    tipo: "ropa",   
    imagen: "https://y2k-streetwear.com/cdn/shop/files/knit-sweater-y2k-3671766.jpg?v=1765360099"  
  },
  {   
    id: "22",   
    nombre: { es: "Sudadera Roja Estilo Y2K", en: "Red Hoodie Y2K" },   
    precio: 249.00,   
    tipo: "ropa",   
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ96EwDIHM80QcNKOg2mLM6W7hf63Zb4eNUPvOSV89tWmAVFYvSlT1CEru&s=10"  
  } 
]; 

const translations = { 
  es: { 
    loginBtn: "Iniciar Sesión", logoutBtn: "Salir", cartBtn: "Carrito", 
    heroTag: "✨ Nueva Colección 2026", 
    heroDesc: "Explora las últimas tendencias en moda y accesorios diseñados para destacar en cualquier lugar.", 
    heroExplore: "Explorar Catálogo", 
    catalogueTitle: "Catálogo de Productos", 
    catRopa: "Ropa y Textil", catReloj: "Accesorios y Relojes", catColeccionable: "Coleccionables y Juguetes", 
    addToCartBtn: "Añadir al Carrito", sizeLabel: "Talla", 
    cartTitle: "Tu Carrito", cartTotalLabel: "Total:", checkoutBtn: "Realizar Compra", 
    loginTitle: "Iniciar Sesión", registerTitle: "Crear Cuenta Nueva", 
    nameLabel: "Nombre Completo", emailLabel: "Correo Electrónico", passwordLabel: "Contraseña", 
    loginSubmit: "Ingresar", registerSubmit: "Registrarse", 
    switchToRegister: "¿No tienes cuenta? Regístrate aquí", switchToLogin: "¿Ya tienes cuenta? Inicia sesión aquí", 
    toastAdded: "¡Producto añadido al carrito!", emptyCartAlert: "Tu carrito está vacío.", loginRequiredAlert: "Debes iniciar sesión para realizar una compra.",
    receiptTitle: "Comprobante de Pago", receiptNumberLabel: "Nro de Recibo:", receiptDateLabel: "Fecha:", receiptClientLabel: "Cliente:",
    printReceiptBtn: "Imprimir / PDF", closeReceiptBtn: "Cerrar"
  }, 
  en: { 
    loginBtn: "Sign In", logoutBtn: "Sign Out", cartBtn: "Cart", 
    heroTag: "✨ New Collection 2026", 
    heroDesc: "Explore the latest trends in fashion and accessories designed to stand out anywhere.", 
    heroExplore: "Explore Catalogue", 
    catalogueTitle: "Product Catalogue", 
    catRopa: "Apparel & Textile", catReloj: "Accessories & Watches", catColeccionable: "Collectibles & Toys", 
    addToCartBtn: "Add to Cart", sizeLabel: "Size", 
    cartTitle: "Your Cart", cartTotalLabel: "Total:", checkoutBtn: "Checkout", 
    loginTitle: "Sign In", registerTitle: "Create New Account", 
    nameLabel: "Full Name", emailLabel: "Email Address", passwordLabel: "Password", 
    loginSubmit: "Sign In", registerSubmit: "Register", 
    switchToRegister: "Don't have an account? Register here", switchToLogin: "Already have an account? Sign in here", 
    toastAdded: "Product added to cart!", emptyCartAlert: "Your cart is empty.", loginRequiredAlert: "You must sign in to make a purchase.",
    receiptTitle: "Payment Receipt", receiptNumberLabel: "Receipt No:", receiptDateLabel: "Date:", receiptClientLabel: "Client:",
    printReceiptBtn: "Print / PDF", closeReceiptBtn: "Close"
  } 
}; 

let currentLang = localStorage.getItem('revelion_lang') || 'es'; 
let carrito = []; 
let usuarioActual = null; 
let modoRegistro = false; 
const TASA_CAMBIO_USD = 7.8; 

document.addEventListener('DOMContentLoaded', () => { 
  initLanguageSystem(); 
  renderCategorizedProducts(); 
  initModals(); 
  initAuthSystem(); 
  initCheckout(); 
  revisarSesionActiva(); 
  initNavigation(); 
}); 

function initNavigation() { 
  const logoHome = document.getElementById('logo-home');
  const btnExplore = document.getElementById('btn-explore');
  const btnBackHero = document.getElementById('btn-back-hero');
  const catalogo = document.getElementById('catalogo');

  if (logoHome) {
    logoHome.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (catalogo) {
        catalogo.classList.remove('catalogue-visible');
        catalogo.classList.add('catalogue-hidden');
      }
    };
  }

  if (btnExplore && catalogo) {
    btnExplore.onclick = () => {
      catalogo.classList.remove('catalogue-hidden');
      catalogo.classList.add('catalogue-visible');
      catalogo.scrollIntoView({ behavior: 'smooth' });
    };
  }

  if (btnBackHero && catalogo) {
    btnBackHero.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      catalogo.classList.remove('catalogue-visible');
      catalogo.classList.add('catalogue-hidden');
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

function formatearPrecio(precioGTQ) { 
  if (currentLang === 'en') { 
    return `$ ${(precioGTQ / TASA_CAMBIO_USD).toFixed(2)} USD`; 
  } 
  return `Q ${precioGTQ.toFixed(2)}`; 
} 

function renderCategorizedProducts() { 
  const container = document.getElementById('categories-container');
  if (!container) return;

  container.innerHTML = ''; 
  const t = translations[currentLang]; 

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
    catSection.innerHTML = `<h3 class="category-title">${catData.titulo}</h3>`;
    
    const grid = document.createElement('div');
    grid.className = 'products-grid';

    catData.items.forEach(p => {
      const card = document.createElement('div'); 
      card.className = 'card'; 
       
      let selectorHTML = ''; 
      if (p.tipo === 'ropa') { 
        selectorHTML = ` 
          <div class="size-selector-wrapper"> 
            <label>${t.sizeLabel}: </label> 
            <select class="product-size" id="size-${p.id}"> 
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
        <div class="card-img-container"> 
          <img src="${p.imagen}" alt="${nombreArticulo}"> 
        </div> 
        <div class="card-body"> 
          <div> 
            <h4 class="card-title">${nombreArticulo}</h4> 
            <p class="card-price">${precioFormateado}</p> 
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
  if (closeCart && cartModal) closeCart.onclick = () => cartModal.closest('.modal-overlay').style.display = 'none'; 
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
  setTimeout(() => toast.classList.remove('show'), 2500); 
} 

function updateCartUI() { 
  const cartCount = document.getElementById('cart-count');
  if (cartCount) cartCount.textContent = carrito.length; 
  
  const list = document.getElementById('cart-items-container'); 
  if (!list) return;

  list.innerHTML = ''; 
  let total = 0; 

  if (carrito.length === 0) {
    list.innerHTML = `<div style="text-align: center; padding: 2rem 0; color: var(--text-muted); font-size: 0.9rem;">${currentLang === 'es' ? 'Tu carrito está vacío' : 'Your cart is empty'}</div>`;
  }

  carrito.forEach((item, index) => { 
    total += item.precio; 
    const nombreArticulo = item.nombre[currentLang] || item.nombre.es; 
    
    let detalleExtra = '';
    if (item.tipo === 'ropa' && item.opcionSeleccionada) {
      const letraTalla = item.opcionSeleccionada.split(':').pop().trim();
      detalleExtra = `<span class="cart-item-size">T: ${letraTalla}</span>`;
    }
     
    list.innerHTML += ` 
      <div class="cart-item-card"> 
        <img src="${item.imagen}" alt="${nombreArticulo}" class="cart-item-img">
        <div class="cart-item-info"> 
          <span class="cart-item-title" title="${nombreArticulo}">${nombreArticulo}</span> 
          <div class="cart-item-details">
            <span class="cart-item-price">${formatearPrecio(item.precio)}</span>
            ${detalleExtra}
          </div>
        </div> 
        <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Eliminar">✕</button> 
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
      document.getElementById('cart-modal').style.display = 'none'; 
      document.getElementById('auth-modal').style.display = 'flex'; 
      return; 
    } 
    if (carrito.length === 0) { 
      alert(t.emptyCartAlert); 
      return; 
    } 

    document.getElementById('r-number').textContent = 'REV-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('r-date').textContent = new Date().toLocaleString();
    document.getElementById('r-client').textContent = usuarioActual;

    let totalRecibo = 0;
    const rItems = document.getElementById('r-items');
    rItems.innerHTML = '';
    
    carrito.forEach(item => {
      totalRecibo += item.precio;
      const nombreArticulo = item.nombre[currentLang] || item.nombre.es;
      rItems.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:5px; font-size: 0.85rem;"><span>${nombreArticulo}</span> <strong>${formatearPrecio(item.precio)}</strong></div>`;
    });

    document.getElementById('r-total').textContent = formatearPrecio(totalRecibo);

    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('receipt-modal').style.display = 'flex';

    carrito = []; 
    updateCartUI(); 
  }; 
}
