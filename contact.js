/* ==========================
   Efecto fade-out al salir de la página de contacto
========================== */
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Ignorar links especiales o externos
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:")
    ) {
      return;
    }

    e.preventDefault(); // Detiene el cambio inmediato

    const contenido = document.getElementById("contenido");

    // Marcamos que venimos desde Contacto
    sessionStorage.setItem("skipSplash", "true");

    if (contenido) {
      // Forzamos repaint para evitar glitches
      contenido.getBoundingClientRect();

      // Aplicamos fade-out
      contenido.classList.add("fade-out");

      // Esperamos que termine la transición CSS antes de navegar
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Debe coincidir con CSS
    } else {
      // Si no existe contenido, navegar normalmente
      window.location.href = href;
    }
  });
});