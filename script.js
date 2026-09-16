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
    heroTag: "Nueva Colección Disponible", 
    heroTitle: "Encuentra tu estilo único con <span>Revelion Shop</span>", 
    heroDesc: "Explora nuestra selección exclusiva de ropa urbana, accesorios de vanguardia y coleccionables icónicos diseñados para destacar.", 
    exploreBtn: "Ver Catálogo", 
    catalogueTitle: "Catálogo Exclusivo", 
    catRopa: "Ropa y Textil", 
    catReloj: "Accesorios y Relojes", 
    catColeccionable: "Coleccionables y Juguetes", 
    addToCartBtn: "Añadir al Carrito", 
    sizeLabel: "Talla", 
    cartModalTitle: "Tu Carrito de Compras", 
    cartTotalLabel: "Total:", 
    checkoutBtn: "Realizar Compra", 
    loginModalTitle: "Iniciar Sesión", 
    registerModalTitle: "Crear Cuenta Nueva", 
    labelName: "Nombre Completo", 
    labelUser: "Nombre de Usuario", 
    labelPass: "Contraseña", 
    authSubmitLogin: "Entrar", 
    authSubmitRegister: "Registrarse", 
    switchRegister: "¿No tienes cuenta? Regístrate aquí", 
    switchLogin: "¿Ya tienes cuenta? Inicia sesión aquí", 
    toastAdded: "¡Producto añadido al carrito!", 
    toastCheckout: "¡Compra realizada con éxito, ", 
    emptyCartAlert: "Tu carrito está vacío.", 
    loginRequiredAlert: "Debes iniciar sesión para realizar una compra." 
  }, 
  en: { 
    loginBtn: "Sign In", 
    logoutBtn: "Sign Out", 
    cartBtn: "Cart", 
    heroTag: "New Collection Available", 
    heroTitle: "Find your unique style with <span>Revelion Shop</span>", 
    heroDesc: "Explore our exclusive selection of streetwear, cutting-edge accessories, and iconic collectibles designed to stand out.", 
    exploreBtn: "View Catalogue", 
    catalogueTitle: "Exclusive Catalogue", 
    catRopa: "Apparel & Textile", 
    catReloj: "Accessories & Watches", 
    catColeccionable: "Collectibles & Toys", 
    addToCartBtn: "Add to Cart", 
    sizeLabel: "Size", 
    cartModalTitle: "Your Shopping Cart", 
    cartTotalLabel: "Total:", 
    checkoutBtn: "Checkout", 
    loginModalTitle: "Sign In", 
    registerModalTitle: "Create New Account", 
    labelName: "Full Name", 
    labelUser: "Username", 
    labelPass: "Password", 
    authSubmitLogin: "Sign In", 
    authSubmitRegister: "Register", 
    switchRegister: "Don't have an account? Register here", 
    switchLogin: "Already have an account? Sign in here", 
    toastAdded: "Product added to cart!", 
    toastCheckout: "Purchase successful, ", 
    emptyCartAlert: "Your cart is empty.", 
    loginRequiredAlert: "You must sign in to make a purchase." 
  } 
}; 

let currentLang = localStorage.getItem('revelion_lang') || 'es'; 
let carrito = []; 
let usuarioActual = null; 
let modoRegistro = false; 
const TASA_CAMBIO_USD = 7.8; // 1 USD aprox 7.8 Quetzales 

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
  const btnExplorar = document.getElementById('btn-explorar'); 
  const logoHomeLink = document.getElementById('logo-home-link'); 
  const viewInicio = document.getElementById('view-inicio'); 
  const viewCatalogo = document.getElementById('view-catalogo'); 

  if (btnExplorar && viewInicio && viewCatalogo) {
    btnExplorar.onclick = () => { 
      viewInicio.classList.remove('active'); 
      viewCatalogo.classList.add('active'); 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }; 
  }

  if (logoHomeLink && viewInicio && viewCatalogo) {
    logoHomeLink.onclick = () => { 
      viewCatalogo.classList.remove('active'); 
      viewInicio.classList.add('active'); 
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
  document.querySelectorAll('[data-i18n-html]').forEach(el => { 
    const key = el.getAttribute('data-i18n-html'); 
    if (t[key]) el.innerHTML = t[key]; 
  }); 
} 

function initThemeSystem() { 
  const btnThemeToggle = document.getElementById('btn-theme-toggle'); 
  const themeSvgIcon = document.getElementById('theme-svg-icon'); 
  if (!btnThemeToggle || !themeSvgIcon) return;
   
  const savedTheme = localStorage.getItem('revelion_theme') || 'light'; 
  if (savedTheme === 'dark') { 
    document.documentElement.setAttribute('data-theme', 'dark'); 
    setSunIcon(themeSvgIcon); 
  } else { 
    document.documentElement.removeAttribute('data-theme'); 
    setMoonIcon(themeSvgIcon); 
  } 

  btnThemeToggle.onclick = () => { 
    const currentTheme = document.documentElement.getAttribute('data-theme'); 
    if (currentTheme === 'dark') { 
      document.documentElement.removeAttribute('data-theme'); 
      localStorage.setItem('revelion_theme', 'light'); 
      setMoonIcon(themeSvgIcon); 
    } else { 
      document.documentElement.setAttribute('data-theme', 'dark'); 
      localStorage.setItem('revelion_theme', 'dark'); 
      setSunIcon(themeSvgIcon); 
    } 
  }; 
} 

function setMoonIcon(svg) { 
  svg.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'; 
} 

function setSunIcon(svg) { 
  svg.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>'; 
} 

function formatearPrecio(precioGTQ) { 
  if (currentLang === 'en') { 
    const precioUSD = precioGTQ / TASA_CAMBIO_USD; 
    return `$ ${precioUSD.toFixed(2)} USD`; 
  } 
  return `Q ${precioGTQ.toFixed(2)}`; 
} 

function renderCategorizedProducts() { 
  const gridRopa = document.getElementById('grid-ropa'); 
  const gridReloj = document.getElementById('grid-reloj'); 
  const gridColeccionable = document.getElementById('grid-coleccionable'); 

  if (gridRopa) gridRopa.innerHTML = ''; 
  if (gridReloj) gridReloj.innerHTML = ''; 
  if (gridColeccionable) gridColeccionable.innerHTML = ''; 

  const t = translations[currentLang]; 

  productosEjemplo.forEach(p => { 
    const card = document.createElement('div'); 
    card.className = 'card'; 
     
    let selectorHTML = ''; 
    if (p.tipo === 'ropa') { 
      selectorHTML = ` 
        <div class="size-selector-wrapper"> 
          <label>${t.sizeLabel}</label> 
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
          <h3 class="card-title">${nombreArticulo}</h3> 
          <p class="card-price">${precioFormateado}</p> 
          ${selectorHTML} 
        </div> 
        <button class="btn primary" onclick="addToCart('${p.id}')">${t.addToCartBtn}</button> 
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

  const btnLoginModal = document.getElementById('btn-login-modal');
  const closeLogin = document.getElementById('close-login');
  const btnCartToggle = document.getElementById('btn-cart-toggle');
  const closeCart = document.getElementById('close-cart');

  if (btnLoginModal && loginModal) btnLoginModal.onclick = () => loginModal.style.display = 'flex'; 
  if (closeLogin && loginModal) closeLogin.onclick = () => loginModal.style.display = 'none'; 
  if (btnCartToggle && cartModal) btnCartToggle.onclick = () => cartModal.style.display = 'flex'; 
  if (closeCart && cartModal) closeCart.onclick = () => cartModal.style.display = 'none'; 

  window.onclick = (e) => { 
    if (loginModal && e.target === loginModal) loginModal.style.display = 'none'; 
    if (cartModal && e.target === cartModal) cartModal.style.display = 'none'; 
  }; 
} 

function initAuthSystem() { 
  const formAuth = document.getElementById('form-auth'); 
  const swModeText = document.getElementById('sw-mode-text'); 
  const modalTitleAuth = document.getElementById('modal-title-auth'); 
  const groupName = document.getElementById('group-name'); 
  const authSubmitBtn = document.getElementById('auth-submit-btn'); 
  const authError = document.getElementById('auth-error'); 
  const btnLogout = document.getElementById('btn-logout');

  if (swModeText && formAuth) {
    swModeText.onclick = (e) => { 
      e.preventDefault(); 
      modoRegistro = !modoRegistro; 
      if (authError) authError.style.display = 'none'; 
      formAuth.reset(); 
      const t = translations[currentLang]; 

      if (modoRegistro) { 
        if (modalTitleAuth) modalTitleAuth.textContent = t.registerModalTitle; 
        if (groupName) groupName.style.display = "block"; 
        if (authSubmitBtn) authSubmitBtn.textContent = t.authSubmitRegister; 
        swModeText.textContent = t.switchLogin; 
      } else { 
        if (modalTitleAuth) modalTitleAuth.textContent = t.loginModalTitle; 
        if (groupName) groupName.style.display = "none"; 
        if (authSubmitBtn) authSubmitBtn.textContent = t.authSubmitLogin; 
        swModeText.textContent = t.switchRegister; 
      } 
    }; 

    formAuth.onsubmit = (e) => { 
      e.preventDefault(); 
      if (authError) authError.style.display = 'none'; 
      const userVal = document.getElementById('auth-user').value.trim(); 
      const passVal = document.getElementById('auth-pass').value.trim(); 
      const nameInput = document.getElementById('auth-name');
      const nameVal = nameInput ? nameInput.value.trim() : ''; 

      let baseUsuarios = JSON.parse(localStorage.getItem('revelion_users')) || []; 

      if (modoRegistro) { 
        const existe = baseUsuarios.find(u => u.user === userVal); 
        if (existe) { 
          if (authError) {
            authError.textContent = currentLang === 'es' ? "El nombre de usuario ya está registrado." : "Username already taken."; 
            authError.style.display = "block"; 
          }
          return; 
        } 
        baseUsuarios.push({ user: userVal, pass: passVal, name: nameVal }); 
        localStorage.setItem('revelion_users', JSON.stringify(baseUsuarios)); 

        alert(currentLang === 'es' ? "¡Cuenta creada con éxito! Ahora inicia sesión." : "Account created successfully! Please sign in."); 
        modoRegistro = false; 
        swModeText.click(); 
      } else { 
        const usuarioEncontrado = baseUsuarios.find(u => u.user === userVal && u.pass === passVal); 
        if (!usuarioEncontrado) { 
          if (authError) {
            authError.textContent = currentLang === 'es' ? "Usuario o contraseña incorrectos." : "Invalid username or password."; 
            authError.style.display = "block"; 
          }
          return; 
        } 

        usuarioActual = usuarioEncontrado.name || usuarioEncontrado.user; 
        localStorage.setItem('revelion_active_user', usuarioActual); 
        actualizarUIUsuario(); 
        const loginModal = document.getElementById('login-modal');
        if (loginModal) loginModal.style.display = 'none'; 
        formAuth.reset(); 
      } 
    }; 
  }

  if (btnLogout) {
    btnLogout.onclick = () => { 
      usuarioActual = null; 
      localStorage.removeItem('revelion_active_user'); 
      actualizarUIUsuario(); 
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
  const btnLoginModal = document.getElementById('btn-login-modal'); 
  const btnLogout = document.getElementById('btn-logout'); 

  if (!userDisplay || !btnLoginModal || !btnLogout) return;

  if (usuarioActual) { 
    userDisplay.textContent = `${currentLang === 'es' ? 'Hola' : 'Hello'}, ${usuarioActual}`; 
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
  const selectedOption = sizeSelect ? `${translations[currentLang].sizeLabel}: ${sizeSelect.value}` : ''; 
   
  if (p) { 
    carrito.push({ ...p, opcionSeleccionada: selectedOption }); 
    updateCartUI(); 
    mostrarToast(translations[currentLang].toastAdded); 
  } 
} 

function mostrarToast(mensaje) { 
  const toast = document.getElementById('toast-notification'); 
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
  
  const list = document.getElementById('cart-items-list'); 
  if (!list) return;

  list.innerHTML = ''; 
  let total = 0; 

  carrito.forEach((item, index) => { 
    total += item.precio; 
    const nombreArticulo = item.nombre[currentLang] || item.nombre.es; 

    let detalleExtra = item.tipo === 'ropa' ? `<br><small style="color: var(--accent); font-weight: 700;">${item.opcionSeleccionada}</small>` : ''; 
     
    list.innerHTML += ` 
      <div class="cart-item"> 
        <div> 
          <strong>${nombreArticulo}</strong> 
          ${detalleExtra}<br> 
          <small style="color: var(--text-muted);">${formatearPrecio(item.precio)}</small> 
        </div> 
        <button class="btn danger" style="padding:4px 8px; font-size:0.75rem;" onclick="removeFromCart(${index})">X</button> 
      </div> 
    `; 
  }); 
  
  const cartTotal = document.getElementById('cart-total');
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
      const loginModal = document.getElementById('login-modal');
      if (cartModal) cartModal.style.display = 'none'; 
      if (loginModal) loginModal.style.display = 'flex'; 
      return; 
    } 
    if (carrito.length === 0) { 
      alert(t.emptyCartAlert); 
      return; 
    } 

    alert(`${t.toastCheckout}${usuarioActual}!`); 
    carrito = []; 
    updateCartUI(); 
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) cartModal.style.display = 'none'; 
  }; 
}
