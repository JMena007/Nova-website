/* Efecto fade-out al salir de la página de contacto */
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    // Solo intercepta links normales
    const href = this.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    e.preventDefault(); // Detiene el cambio inmediato

    const contenido = document.getElementById("contenido");
    if (contenido) {
      contenido.classList.add("fade-out");

      // Espera a que termine la animación y navega
      setTimeout(() => {
        window.location.href = href;
      }, 500); // mismo tiempo que el transition en CSS
    } else {
      // Si por alguna razón no existe, navega normal
      window.location.href = href;
    }
  });
});   */

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    e.preventDefault();

    const contenido = document.getElementById("contenido");

    if (contenido) {
      contenido.classList.add("fade-out");

      // 👉 Aqui: "vengo desde contacto, no muestres splash"
      localStorage.setItem("skipSplash", "true");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    } else {
      localStorage.setItem("skipSplash", "true");
      window.location.href = href;
    }
  });
});