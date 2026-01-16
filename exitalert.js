function confirmarSalida(e) {
    e.preventDefault();
    e.returnValue = "";
}
 window.addEventListener("scroll", () => {
      console.log("scrollY:", window.scrollY);
    });
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

// boton enviar comentario por whatsaap
document.getElementById("btn-comentario").addEventListener("click", function () {
  const comentario = document.getElementById("comentario").value;

  if (comentario.trim() === "") {
    alert("Escribe un comentario antes de enviar");
    return;
  }

  const telefono = "50586953946";
  const mensaje = encodeURIComponent(
    "Comentario desde el sitio:\n" + comentario
  );

  const url = `https://wa.me/${+50586953946}?text=${mensaje}`;
  window.open(url, "_blank");
});


window.addEventListener("beforeunload", confirmarSalida);
