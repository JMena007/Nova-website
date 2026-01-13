
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

//boton flotante
 const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
});


window.addEventListener("beforeunload", confirmarSalida);
