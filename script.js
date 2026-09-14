import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("¡Firebase conectado exitosamente en Revelion Shop!");

// Importaciones de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ==========================================
// LISTA DE PRODUCTOS (Quetzales / Q)
// ==========================================
const productos = [
  {
    id: 1,
    nombre: "Camiseta Revelion Oversize",
    precio: 199.00,
    imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60",
    tallas: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    nombre: "Hoodie Revelion Black",
    precio: 350.00,
    imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60",
    tallas: ["M", "L", "XL"]
  },
  {
    id: 3,
    nombre: "Gorra Revelion Classic",
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
const authEmail = document.getElementById("auth-email");
const authPassword = document.getElementById("auth-password");
const userEmailSpan = document.getElementById("user-email");
const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");

// ==========================================
// 1. RENDERIZAR CATÁLOGO
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
      <button class="btn primary btn-add-cart" data-id="${producto.id}">Añadir al Carrito</button>
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
// 2. GESTIÓN DEL CARRITO
// ==========================================
function agregarAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  const selectTalla = document.getElementById(`talla-${idProducto}`);
  const tallaSeleccionada = selectTalla ? selectTalla.value : "Única";

  carrito.push({ ...producto, tallaSeleccionada });
  actualizarCarritoUI();
  alert(`¡${producto.nombre} (Talla: ${tallaSeleccionada}) añadido al carrito!`);
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

// ==========================================
// 3. CONTROL DE MODALES Y AUTENTICACIÓN
// ==========================================

// Abrir / Cerrar Modal de Autenticación
btnLoginModal.addEventListener("click", () => authModal.style.display = "flex");
closeAuth.addEventListener("click", () => authModal.style.display = "none");

// Abrir / Cerrar Modal de Carrito
btnCartToggle.addEventListener("click", () => cartModal.style.display = "flex");
closeCart.addEventListener("click", () => cartModal.style.display = "none");

// Cambiar entre Iniciar Sesión y Registrarse
toggleMode.addEventListener("click", (e) => {
  e.preventDefault();
  modoRegistro = !modoRegistro;
  if (modoRegistro) {
    authTitle.textContent = "Crear Cuenta";
    authSubmitBtn.textContent = "Registrarse";
    toggleMode.textContent = "¿Ya tienes cuenta? Inicia sesión";
    usernameFieldContainer.style.display = "block";
    authUsername.setAttribute("required", "true");
  } else {
    authTitle.textContent = "Iniciar Sesión";
    authSubmitBtn.textContent = "Entrar";
    toggleMode.textContent = "¿No tienes cuenta? Regístrate aquí";
    usernameFieldContainer.style.display = "none";
    authUsername.removeAttribute("required");
  }
});

// Enviar formulario de Autenticación (Login o Registro)
authForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = authEmail.value;
  const password = authPassword.value;
  const username = authUsername.value;

  try {
    if (modoRegistro) {
      // Registrar usuario con Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Guardar el nombre de usuario en el perfil de Firebase
      await updateProfile(userCredential.user, {
        displayName: username
      });
      alert(`¡Cuenta creada con éxito! Bienvenido, ${username}`);
    } else {
      // Iniciar sesión
      await signInWithEmailAndPassword(auth, email, password);
      alert("¡Sesión iniciada con éxito!");
    }
    authModal.style.display = "none";
    authForm.reset();
  } catch (error) {
    alert("Error de autenticación: " + error.message);
  }
});

// Cerrar Sesión
btnLogout.addEventListener("click", async () => {
  await signOut(auth);
  alert("Sesión cerrada correctamente.");
});

// Observador de estado de autenticación (Cambia la interfaz según el usuario logueado)
onAuthStateChanged(auth, (user) => {
  if (user) {
    const displayName = user.displayName || user.email;
    userEmailSpan.textContent = `Hola, ${displayName}`;
    userEmailSpan.style.display = "inline";
    btnLoginModal.style.display = "none";
    btnLogout.style.display = "inline-block";
  } else {
    userEmailSpan.style.display = "none";
    btnLoginModal.style.display = "inline-block";
    btnLogout.style.display = "none";
  }
});

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  cargarCatalogo();
});