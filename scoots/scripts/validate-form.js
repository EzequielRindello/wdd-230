//value response from form
function validateForm() {
    var vehicleType = document.getElementById("vehicle_type").value;
    var numberOfPeople = document.getElementById("number_of_people").value;

    // Define el número máximo de personas permitido para cada tipo de vehículo
    var maxPeople = {
        "Honda Metro Scooter": 1,
        "Honda Dio Scooter": 2,
        "Honda PCX150 Scooter": 2,
        "Honda Pioneer ATV": 4,
        "Jeep Wrangler - 4 door with a/c": 5,
        "Jeep Wrangler - 2 door": 4
    };

    // Verifica si el número de personas supera el máximo permitido
    if (numberOfPeople > maxPeople[vehicleType]) {
        alert("Número de personas excede el máximo permitido para este tipo de vehículo.");
        return false; // Evita que el formulario se envíe
    }

    // Si todo está bien, permite que el formulario se envíe
    return true;
}