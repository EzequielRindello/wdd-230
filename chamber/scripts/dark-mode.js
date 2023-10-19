// obten el boton y añade un escuchador de eventos para cambiar los colores
const colorButton = document.getElementById("dark-mode");

colorButton.addEventListener("click", function () {
    document.body.classList.toggle("color-change");
    const isColorChanged =
        document.body.classList.contains("color-change");
    localStorage.setItem("colorChanged", isColorChanged);
});

// aplicar las preferencias guardadas al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const isColorChanged =
        localStorage.getItem("colorChanged") === "true";
    if (isColorChanged) {
        document.body.classList.add("color-change");
    }
});

// guardar las preferencias antes de que la pagina se cierre
window.addEventListener("beforeunload", function () {
    const isColorChanged =
        document.body.classList.contains("color-change");
    localStorage.setItem("colorChanged", isColorChanged);
});