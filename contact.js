/* Efecto fade-out al salir de la página de contacto */
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

    e.preventDefault(); // detenemos navegación normal.

    const contenido = document.getElementById("contenido");

    // Marcamos que venimos desde contacto
    sessionStorage.setItem("skipSplash", "true");

    if (contenido) {
      contenido.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    } else {
      window.location.href = href;
    }
  });
});