window.addEventListener("load", () => {

  const splash = document.getElementById("splash");
  const contenido = document.getElementById("contenido");
  const mensaje = document.getElementById("mensaje-bienvenida");

  if (!splash || !contenido) return;

  const returning = sessionStorage.getItem("returning");

  // Si el usuario está regresando
  if (returning) {

    if (mensaje) mensaje.style.display = "none";

    setTimeout(() => {

      splash.classList.add("fade-out");
      contenido.classList.add("show");

      setTimeout(() => {
        splash.style.display = "none";
      }, 500);

    }, 800);

    sessionStorage.removeItem("returning");
    return;
  }

  // Primera visita (muestra Bienvenido)
  setTimeout(() => {

    splash.classList.add("fade-out");
    contenido.classList.add("show");

    setTimeout(() => {
      splash.style.display = "none";
    }, 800);

  }, 1800);

});


// ==============================
// Highlight de secciones
// ==============================

const menuLinks = document.querySelectorAll("#lista a");
let activeSection = null;

menuLinks.forEach(link => {

  link.addEventListener("click", function(){

    const targetID = this.getAttribute("href");

    if (!targetID.startsWith("#")) return;

    const section = document.querySelector(targetID);

    if (!section) return;

    if (activeSection){
      activeSection.classList.remove("section-highlight");
    }

    section.classList.add("section-highlight");
    activeSection = section;

  });

});


// ==============================
// Activador del retorno splash
// ==============================

const links = document.querySelectorAll("a[href]");

links.forEach(link => {

  link.addEventListener("click", () => {

    sessionStorage.setItem("returning", "true");

  });

});