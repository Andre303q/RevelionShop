// ==========================================
// 1. PRODUCTOS DE LA TIENDA (Sin el primer artículo)
// ==========================================
const productos = [
  {
    id: 2,
    nombre: "Sweater Básico Blanco de Algodón",
    precio: 280.00,
    imagen: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    nombre: "Camiseta Casual Estampada Minimal",
    precio: 180.00,
    imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    nombre: "Pantalón Cargo Urbano Beige",
    precio: 420.00,
    imagen: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=500&auto=format&fit=crop&q=60",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    nombre: "Sudadera Manga Larga Estilo Urbano",
    precio: 310.00,
    imagen: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&auto=format&fit=crop&q=60",
    tallas: ["M", "L", "XL"]
  },
  {
    id: 6,
    nombre: "Chaqueta Cortavientos Deportiva / Casual",
    precio: 490.00,
    imagen: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=60",
    tallas: ["M", "L", "XL"]
  },
  {
    id: 7,
    nombre: "Conjunto Jogger y Playera Minimalista",
    precio: 450.00,
    imagen: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&auto=format&fit=crop&q=60",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    nombre: "Gorra Trucker Clásica Ajustable",
    precio: 120.00,
    imagen: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60",
    tallas: ["Única"]
  }
];

let carrito = [];
let modoRegistro = false;

// Elementos del DOM
const productsContainer = document.getElementById("products-container");
const authModal = document.getElementById("auth-modal");
const cartModal = document.getElementById("cart-modal");
const btnLoginModal = document.getElementById("btn-login-modal");
const btnLogout = document.getElementById("btn-logout");
const btnCartToggle = document.getElementById("btn-cart-toggle");
const closeAuth = document.getElementById("close-auth");
const closeCart = document.getElementById("close-cart");
const authForm = document.getElementById("auth-form");
const authTitle = document.getElementById("auth-title");
const authSubmitBtn = document.getElementById("auth-submit-btn");
const toggleMode = document.getElementById("toggle-mode");
const usernameFieldContainer = document.getElementById("username-field-container");
const authUsername = document.getElementById("auth-username");
const authUserInput = document.getElementById("auth-user-input");
const authPassword = document.getElementById("auth-password");
const userDisplay = document.getElementById("user-display");
const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");
const btnCheckout = document.getElementById("btn-checkout");

// ==========================================
// 2. SISTEMA DE NOTIFICACIONES TOAST (Dinámico)
// ==========================================
function mostrarNotificacion(mensaje) {
  // Crear el elemento toast si no existe
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      z-index: 9999;
      font-weight: 600;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease-in-out;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = mensaje;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  // Ocultar después de 3 segundos
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 3000);
}

// ==========================================
// 3. RENDERIZAR CATÁLOGO CON ESTILO DINÁMICO
// ==========================================
function cargarCatalogo() {
  if (!productsContainer) return;
  productsContainer.innerHTML = "";

  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("card");
    // Transición suave para las tarjetas
    card.style.cssText = "transition: transform 0.3s ease, box-shadow 0.3s ease;";
    card.onmouseover = () => {
      card.style.transform = "translateY(-6px)";
      card.style.boxShadow = "0 10px 20px rgba(59, 130, 246, 0.2)";
    };
    card.onmouseout = () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
    };

    card.innerHTML = `
      <div style="overflow: hidden; border-top-left-radius: 8px; border-top-right-radius: 8px;">
        <img src="${producto.imagen}" alt="${producto.nombre}" style="transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
      </div>
      <div class="card-body">
        <h3 class="card-title">${producto.nombre}</h3>
        <p class="card-price">Q ${producto.precio.toFixed(2)}</p>
        <div style="margin: 0.75rem 0;">
          <label style="font-size: 0.85rem; color: var(--text-muted);">Talla: </label>
          <select id="talla-${producto.id}" style="padding: 0.3rem; border-radius: 4px; background: var(--bg-dark); color: var(--text-main); border: 1px solid rgba(255,255,255,0.1);">
            ${producto.tallas.map(t => `<option value="${t}">${t}</option>`).join("")}
          </select>
        </div>
      </div>
      <div style="padding: 0 1rem 1rem 1rem;">
        <button class="btn primary btn-add-cart" data-id="${producto.id}">Añadir al Carrito</button>
      </div>
    `;

    productsContainer.appendChild(card);
  });

  document.querySelectorAll(".btn-add-cart").forEach(button => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      agregarAlCarrito(id);
    });
  });
}

// ==========================================
// 4. GESTIÓN DEL CARRITO
// ==========================================
function agregarAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  const selectTalla = document.getElementById(`talla-${idProducto}`);
  const tallaSeleccionada = selectTalla ? selectTalla.value : "Única";

  carrito.push({ ...producto, tallaSeleccionada });
  actualizarCarritoUI();

  // Lanzar mensaje flotante dinámico
  mostrarNotificacion(`✨ ¡${producto.nombre} agregado al carrito!`);
}

function actualizarCarritoUI() {
  cartCount.textContent = carrito.length;
  cartItemsContainer.innerHTML = "";
  
  let total = 0;

  if (carrito.length === 0) {
    cartItemsContainer.innerHTML = "<p style='color: var(--text-muted); text-align: center; padding: 1rem;'>Tu carrito está vacío.</p>";
  } else {
    carrito.forEach((item, index) => {
      total += item.precio;
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <div>
          <strong>${item.nombre}</strong><br>
          <small style="color: var(--text-muted);">Talla: ${item.tallaSeleccionada}</small>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span>Q ${item.precio.toFixed(2)}</span>
          <button class="btn secondary" style="padding: 0.2rem 0.5rem; color: var(--danger); border-color: var(--danger);" onclick="window.eliminarDelCarrito(${index})">✕</button>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });
  }

  cartTotalPrice.textContent = total.toFixed(2);
}

window.eliminarDelCarrito = function(index) {
  carrito.splice(index, 1);
  actualizarCarritoUI();
  mostrarNotificacion("🗑️ Producto eliminado del carrito");
};

btnCheckout.addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  const usuarioActivo = localStorage.getItem("usuarioActivo");
  if (!usuarioActivo) {
    alert("Por favor, inicia sesión para finalizar tu compra.");
    cartModal.style.display = "none";
    authModal.style.display = "flex";
    return;
  }
  alert(`¡Gracias por tu compra, ${usuarioActivo}! Tu pedido ha sido procesado con éxito.`);
  carrito = [];
  actualizarCarritoUI();
  cartModal.style.display = "none";
});

// ==========================================
// 5. AUTENTICACIÓN LOCAL
// ==========================================
btnLoginModal.addEventListener("click", () => authModal.style.display = "flex");
closeAuth.addEventListener("click", () => authModal.style.display = "none");

btnCartToggle.addEventListener("click", () => cartModal.style.display = "flex");
closeCart.addEventListener("click", () => cartModal.style.display = "none");

toggleMode.addEventListener("click", (e) => {
  e.preventDefault();
  modoRegistro = !modoRegistro;
  if (modoRegistro) {
    authTitle.textContent = "Crear Cuenta";
    authSubmitBtn.textContent = "Registrarse";
    toggleMode.textContent = "¿Ya tienes cuenta? Inicia sesión";
    usernameFieldContainer.style.display = "block";
    authUserInput.placeholder = "Correo electrónico";
  } else {
    authTitle.textContent = "Iniciar Sesión";
    authSubmitBtn.textContent = "Entrar";
    toggleMode.textContent = "¿No tienes cuenta? Regístrate aquí";
    usernameFieldContainer.style.display = "none";
    authUserInput.placeholder = "Correo o Nombre de usuario";
  }
});

authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = authUserInput.value.trim();
  const password = authPassword.value;
  
  let usuarios = JSON.parse(localStorage.getItem("revelion_usuarios")) || {};

  if (modoRegistro) {
    const username = authUsername.value.trim();
    if (!username) {
      alert("Por favor ingresa un nombre de usuario.");
      return;
    }
    if (usuarios[inputVal]) {
      alert("Este correo ya está registrado.");
      return;
    }

    usuarios[inputVal] = { username, password };
    localStorage.setItem("revelion_usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuarioActivo", username);
    
    mostrarNotificacion(`🎉 ¡Bienvenido a Revelion, ${username}!`);
  } else {
    let usuarioEncontrado = null;
    
    if (usuarios[inputVal] && usuarios[inputVal].password === password) {
      usuarioEncontrado = usuarios[inputVal].username;
    } else {
      for (let email in usuarios) {
        if (usuarios[email].username === inputVal && usuarios[email].password === password) {
          usuarioEncontrado = usuarios[email].username;
          break;
        }
      }
    }

    if (usuarioEncontrado) {
      localStorage.setItem("usuarioActivo", usuarioEncontrado);
      mostrarNotificacion(`👋 ¡Hola de nuevo, ${usuarioEncontrado}!`);
    } else {
      alert("Credenciales incorrectas. Verifica tus datos.");
      return;
    }
  }

  authModal.style.display = "none";
  authForm.reset();
  verificarSesion();
});

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("usuarioActivo");
  mostrarNotificacion("🔒 Sesión cerrada");
  verificarSesion();
});

function verificarSesion() {
  const usuarioActivo = localStorage.getItem("usuarioActivo");
  if (usuarioActivo) {
    userDisplay.textContent = `Hola, ${usuarioActivo}`;
    userDisplay.style.display = "inline";
    btnLoginModal.style.display = "none";
    btnLogout.style.display = "inline-block";
  } else {
    userDisplay.style.display = "none";
    btnLoginModal.style.display = "inline-block";
    btnLogout.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarCatalogo();
  verificarSesion();
});
