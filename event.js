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
    splash.classList.add("fade-out");  // splash comienza fade
    contenido.classList.add("show");   // contenido aparece simultáneamente

    // Después de que termine la transición, ocultar splash
    setTimeout(() => {
      splash.style.display = "none";
    }, 800); // igual al tiempo de transición en CSS
  }, 1800);
});

// Aqui sombreamos o iluminamos la section seleccionada:

const menuLinks = document.querySelectorAll("#lista a");

menuLinks.forEach(link => {

 link.addEventListener("click", function(){

  const targetID = this.getAttribute("href");

  // si no es enlace interno (#algo) no hace nada
  if(!targetID.startsWith("#")) return;

  const section = document.querySelector(targetID);

  if(section){

    section.classList.add("section-highlight");

    setTimeout(()=>{
      section.classList.remove("section-highlight");
    },2000);

  }

 });

});