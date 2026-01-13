function confirmarSalida(e) {
    e.preventDefault();
    e.returnValue = "";
}
//bienvenida
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const contenido = document.getElementById("contenido");

  if (!splash || !contenido) return;

  // aseguramos que el splash se renderice primero
  requestAnimationFrame(() => {
    setTimeout(() => {
      splash.classList.add("fade-out");

      setTimeout(() => {
        splash.style.display = "none";
        contenido.classList.remove("hidden");
      }, 1000);
    }, 1800);
  });
});

window.addEventListener("beforeunload", confirmarSalida);
