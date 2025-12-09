function confirmarSalida(e) {
    e.preventDefault();
    e.returnValue = "";
}

window.addEventListener("beforeunload", confirmarSalida);
