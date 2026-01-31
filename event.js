// ==========================
// EVENT.JS - SPLASH + SCROLL + FADE-IN
// ==========================

const splash = document.getElementById("splash");
const contenido = document.getElementById("contenido");

// Forzar scroll arriba
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function forceTop() {
  window.scrollTo(0, 0);
}

// Ejecutar varias veces por si acaso
window.addEventListener("load", () => {
  forceTop();
  setTimeout(forceTop, 50);
  setTimeout(forceTop, 200);

  const yaEntro = localStorage.getItem("yaEntro");
  const skipSplash = sessionStorage.getItem("skipSplash");

  // Si venimos desde contacto, saltamos splash
  if (skipSplash) {
    if (splash) splash.style.display = "none";
    if (contenido) contenido.classList.remove("hidden");
    if (contenido) contenido.classList.add("show");
    sessionStorage.removeItem("skipSplash");
    return;
  }

  // Primera vez
  if (!yaEntro) {
    if (splash) splash.style.display = "flex";
    if (contenido) contenido.classList.add("hidden");

    // Mantener splash visible 1.8s, luego fade-out
    setTimeout(() => {
      if (splash) splash.classList.add("fade-out");

      // Espera transición CSS (0.6s) antes de mostrar contenido
      setTimeout(() => {
        if (splash) splash.style.display = "none";
        if (contenido) contenido.classList.remove("hidden");
        if (contenido) contenido.classList.add("show");
        localStorage.setItem("yaEntro", "true");
      }, 800); // coincide con transition: opacity 0.6s;
    }, 1800);
  } else {
    // Ya entró antes, mostrar contenido directo
    if (splash) splash.style.display = "none";
    if (contenido) contenido.classList.remove("hidden");
    if (contenido) contenido.classList.add("show");
  }
});