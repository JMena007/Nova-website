window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const contenido = document.getElementById("contenido");

  if (!splash || !contenido) return;

  const skipSplash = sessionStorage.getItem("skipSplash");

  if (skipSplash) {
    splash.style.display = "none";
    contenido.classList.add("show");
    sessionStorage.removeItem("skipSplash");
    return;
  }

  // Espera 1.8s antes de iniciar fade
  setTimeout(() => {

    splash.classList.add("fade-out");
    contenido.classList.add("show");

    // ocultar splash después del fade
    setTimeout(() => {

      splash.style.display = "none";
      sessionStorage.setItem("skipSplash", "true");

    }, 800);

  }, 1800);
});
// Aqui sombreamos o iluminamos la section seleccionada:

const menuLinks = document.querySelectorAll("#lista a");
let activeSection = null;

menuLinks.forEach(link => {

  link.addEventListener("click", function(){

    const targetID = this.getAttribute("href");

    if(!targetID.startsWith("#")) return;

    const section = document.querySelector(targetID);

    if(!section) return;

    // quitar resaltado anterior
    if(activeSection){
      activeSection.classList.remove("section-highlight");
    }

    // agregar al nuevo
    section.classList.add("section-highlight");
    activeSection = section;

  });

});


//Activador del svg en retorno
const links = document.querySelectorAll("a");

links.forEach(link => {

  link.addEventListener("click", () => {

    sessionStorage.removeItem("skipSplash");

  });

});