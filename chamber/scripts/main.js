// footer currentDate and lastModifiedDate
const options = {
    month: "short",
    day: "numeric",
    year: "numeric"
};

const currentDate = document.querySelector('#date-placeholder');
const formattedDate = new Date().toLocaleDateString("en-US", options);
currentDate.textContent = formattedDate;

const lastModifiedDate = new Date(document.lastModified).toLocaleDateString("en-US", options);
document.getElementById("lastModified-placeholder").textContent = lastModifiedDate;

// menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

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

// efecto hover 
document.addEventListener('DOMContentLoaded', function () {

     // nuevo elemento para mostrar la descripcion
    const galeria = document.querySelector('.galeria');
    const imageText = document.querySelector('.image-text');
    const imageDescription = document.getElementById('imageDescription');

    galeria.addEventListener('mouseover', function (e) {
        if (e.target.tagName === 'IMG') {

            // obtener el texto personalizado
            const customText = e.target.getAttribute('data-text'); 

            imageText.style.display = 'block';

            // actualizar el texto con la descripción personalizada
            imageDescription.textContent = customText;
        }
    });

    galeria.addEventListener('mouseout', function (e) {
        if (e.target.tagName === 'IMG') {
            imageText.style.display = 'none';
            // restaurar el texto predeterminado al salir de la imagen
            imageDescription.textContent = 'Descripción';
        }
    });
});
