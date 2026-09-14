// ==========================================
// 1. PRODUCTOS DE LA TIENDA (Estilo Y2K / Streetwear)
// ==========================================
const productos = [
  {
    id: 1,
    nombre: "Camiseta Cyber Y2K Star Graphic",
    precio: 199.00,
    imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    nombre: "Hoodie Oversized Techwear Dark",
    precio: 350.00,
    imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60",
    tallas: ["M", "L", "XL"]
  },
  {
    id: 3,
    nombre: "Gorra Trucker Y2K Star",
    precio: 120.00,
    imagen: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60",
    tallas: ["Única"]
  },
  {
    id: 4,
    nombre: "Cargo Pants Parachute Tactical",
    precio: 320.00,
    imagen: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=500&auto=format&fit=crop&q=60",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    nombre: "Chaqueta Cortavientos Retro Cyber",
    precio: 390.00,
    imagen: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=60",
    tallas: ["M", "L", "XL"]
  },
  {
    id: 6,
    nombre: "Jogger Baggy Streetwear Acid Wash",
    precio: 280.00,
    imagen: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&auto=format&fit=crop&q=60",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    nombre: "Beanie Oversize Underground Black",
    precio: 95.00,
    imagen: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&auto=format&fit=crop&q=60",
    tallas: ["Única"]
  },
  {
    id: 8,
    nombre: "Hoodie Cremallera Skull Y2K",
    precio: 370.00,
    imagen: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=60",
    tallas: ["S", "M", "L", "XL"]
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
// 2. RENDERIZAR CATÁLOGO
// ==========================================
function cargarCatalogo() {
  if (!productsContainer) return;
  productsContainer.innerHTML = "";

  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
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
// 3. GESTIÓN DEL CARRITO
// ==========================================
function agregarAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  const selectTalla = document.getElementById(`talla-${idProducto}`);
  const tallaSeleccionada = selectTalla ? selectTalla.value : "Única";

  carrito.push({ ...producto, tallaSeleccionada });
  actualizarCarritoUI();
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
  alert(`¡Gracias por tu compra, ${usuarioActivo}! Tu pedido streetwear ha sido procesado con éxito.`);
  carrito = [];
  actualizarCarritoUI();
  cartModal.style.display = "none";
});

// ==========================================
// 4. AUTENTICACIÓN LOCAL (localStorage)
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
    
    alert(`¡Cuenta creada con éxito! Bienvenido, ${username}`);
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
      alert(`¡Bienvenido de nuevo, ${usuarioEncontrado}!`);
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
  alert("Sesión cerrada correctamente.");
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
