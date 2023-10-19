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