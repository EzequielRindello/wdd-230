// obtener referencias a elementos del DOM
const list = document.querySelector('ul'); // obtiene la lista <ul>
const input = document.querySelector('input'); // obtiene el campo de entrada <input>
const button = document.querySelector('button'); // obtiene el botón <button>

// agregar un evento de clic al botón
button.addEventListener('click', () => {
    // obtener el valor del campo de entrada y eliminar espacios en blanco al principio y al final
    const myTask = input.value.trim();

    // verificar si el campo de entrada está vacío
    if (myTask === '') {
        return; // si está vacío, no hacemos nada
    }

    // limpiar el campo de entrada
    input.value = '';

    // crear elementos HTML para la nueva tarea
    const listItem = document.createElement('li'); // crear un elemento <li>
    const listText = document.createElement('span'); // crear un elemento <span> para el texto de la tarea
    const listBtn = document.createElement('button'); // crear un elemento <button> para eliminar la tarea

    // agregar elementos a la estructura de la lista
    listItem.appendChild(listText); // agregar el elemento de texto como hijo de <li>
    listText.textContent = myTask; // establecer el texto de la tarea
    listItem.appendChild(listBtn); // agregar el botón como hijo de <li>
    listBtn.textContent = 'Delete'; // establecer el texto del botón de eliminar

    // agregar la nueva tarea a la lista
    list.appendChild(listItem);

    // agregar un evento de clic al botón de eliminar
    listBtn.addEventListener('click', () => {
        list.removeChild(listItem); // eliminar la tarea al hacer clic en el botón de eliminar
    });

    // enfocar el campo de entrada nuevamente
    input.focus();
});
