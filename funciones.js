function messageFacebook () {
  alert("Confirma para dirigirte al perfil de JMenadev ...");
}

function alertllamar () {
  alert("Presiona aceptar para llamar");
}
function contactws () {
  alert("toca Aceptar para dirijirse al Whatsaap");
}

window.addEventListener("scroll", function() {
    const header = document.getElementById("header");

    if (window.scrollY > 150) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const btn = document.querySelector(".menu-btn");
const menu = document.querySelector("#lista");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
//Agragar boton para regresar al.incio o arriba
const returnBtn = document.querySelector(".return-btn");

returnBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

