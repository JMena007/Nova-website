const splash = document.getElementById("splash");
const contenido = document.getElementById("contenido");

// Scroll siempre arriba
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function forceTop() {
  window.scrollTo(0, 0);
}

window.addEventListener("load", () => {
  forceTop();
  setTimeout(forceTop, 50);
  setTimeout(forceTop, 200);

  const yaEntro = localStorage.getItem("yaEntro");

  if (!yaEntro) {
    splash.style.display = "flex";
    contenido.classList.add("hidden");

    setTimeout(() => {
      splash.style.display = "none";
      contenido.classList.remove("hidden");
      contenido.classList.add("show");
      localStorage.setItem("yaEntro", "true");
    }, 2000);
  } else {
    splash.style.display = "none";
    contenido.classList.remove("hidden");
    contenido.classList.add("show");
  }
});