/* ==========================
   ALERTAS BÁSICAS
========================== */
function messageFacebook() {
  alert("Confirma para dirigirte al perfil de JMenadev...");
}

function alertllamar() {
  alert("Presiona aceptar para llamar");
}

/* ==========================
   HEADER DINÁMICO AL SCROLL
========================== */
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (!header) return;

  if (window.scrollY > 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ==========================
   MENÚ HAMBURGUESA
========================== */
const btnMenu = document.querySelector(".menu-btn");
const menu = document.getElementById("lista");

if (btnMenu && menu) {
  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

/* ==========================
   BOTÓN VOLVER ARRIBA
========================== */
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (!btnTop) return;

  btnTop.classList.toggle("show", window.scrollY > 300);
});

btnTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==========================
   TEXTAREA DINÁMICO
========================== */
const textarea = document.querySelector("textarea");

textarea?.addEventListener("input", () => {
  textarea.style.fontSize =
    textarea.value.length > 200 ? "14px" : "16px";
});