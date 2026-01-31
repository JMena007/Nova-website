/* ==========================
   SPLASH / BIENVENIDA
========================== */
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const contenido = document.getElementById("contenido");

  if (!splash || !contenido) return;

  // Si venimos desde contacto, NO mostrar splash
  const skipSplash = sessionStorage.getItem("skipSplash");

  if (skipSplash) {
    // Mostrar contenido directo
    splash.style.display = "none";
    contenido.classList.add("show");

    // Limpiamos la bandera
    sessionStorage.removeItem("skipSplash");
    return;
  }

  // Splash normal (primera vez o recarga directa)
  setTimeout(() => {
    splash.classList.add("fade-out");

    setTimeout(() => {
      splash.style.display = "none";
      contenido.classList.add("show");
    }, 600);
  }, 1800);
});

// Desactiva restauración automática del scroll
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Fuerza ir arriba varias veces (hack necesario en GitHub Pages)
function forceTop() {
  window.scrollTo(0, 0);
}

window.addEventListener("load", () => {
  forceTop();
  setTimeout(forceTop, 50);
  setTimeout(forceTop, 200);
});

/* ==========================
   ENVÍO A WHATSAPP
========================== */
document.getElementById("btn-comentario")?.addEventListener("click", () => {
  const comentario = document.getElementById("comentario").value.trim();

  if (!comentario) {
    alert("Escribe un comentario antes de enviar");
    return;
  }

  const telefono = "50586953946";
  const mensaje = encodeURIComponent(
    "Comentario desde el sitio:\n" + comentario
  );

  window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
});

