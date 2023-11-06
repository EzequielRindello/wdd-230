document.addEventListener("DOMContentLoaded", function () {
    // carga el archivo JSON
    fetch("data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // obtiene la lista de actividades de aprendizaje
            const learningActivities = data.course.learning_activities;

            // encuentra el elemento donde deseas mostrar la lista
            const activitiesList = document.getElementById("learning-activities");

            // recorre la lista de actividades y crea el HTML en una sola linea
            let html = "<ul>";
            learningActivities.forEach(function (week) {
                html += `<li>${week.week}: `;
                week.activities.forEach(function (activity, index) {
                    html += `<a href="${activity.url}" target="_blank">${activity.title}</a>`;
                    if (index < week.activities.length - 1) {
                        html += " | ";
                    }
                });
                html += "</li>";
            });
            html += "</ul>";

            // inserta el HTML en el elemento correspondiente
            activitiesList.innerHTML = html;
        })
        .catch(function (error) {
            console.error("Error loading JSON file: " + error);
        });
});

