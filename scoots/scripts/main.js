// footer current date 
const options = {
    year: "numeric"
};

const currentDate = document.querySelector('#date-placeholder');
const formattedDate = new Date().toLocaleDateString("en-US", options);
currentDate.textContent = formattedDate;


// movile menu de hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        // cada vez que pasa un addEventListener() cambia el i
        menuIcon.querySelector("i").classList.toggle("bi-list");
        menuIcon.querySelector("i").classList.toggle("bi-x");
    });
});

// funcion para eliminar errores de wave report
function redirectTo(url) {
    window.location.href = url;
}

// weather forecast and info
const apiKey = "942cb3e734cbba69ea8a179cac8e553d";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Mexico&appid=${apiKey}`;

const city = document.querySelector(".city");
const currentTemp = document.querySelector(".temp");
const weatherDescription = document.getElementById("weather-description");
const oneDayForecast = document.querySelector(".forecast");

async function apiFetch() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            // Extract relevant information
            const cityName = data.city.name;
            const currentTemperature = data.list[0].main.temp;
            const weatherDesc = data.list[0].weather[0].description;

            // Display information
            city.textContent = `Today: ${cityName}`;
            currentTemp.textContent = `${currentTemperature} °C`;
            weatherDescription.textContent = `- ${weatherDesc}`;

            // Display forecast for the next two days
            displayForecast(data.list.slice(0, 16), oneDayForecast);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayForecast(forecastData, element) {
    // Clear previous content
    element.innerHTML = "";

    // Loop through the forecast data, grouping by day
    const groupedByDay = {};
    forecastData.forEach(item => {
        const date = new Date(item.dt * 1000); // Convert timestamp to Date object
        const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get day name

        // Group by day
        if (!groupedByDay[day]) {
            groupedByDay[day] = [];
        }

        groupedByDay[day].push(item);
    });

    // Display the average temperature and weather description for each day
    Object.keys(groupedByDay).forEach(day => {
        const dayForecast = groupedByDay[day];

        // Calculate average temperature
        const averageTemp = dayForecast.reduce((sum, item) => sum + item.main.temp, 0) / dayForecast.length;

        // Get the weather description from the first item of the day
        const weatherDesc = dayForecast[0].weather[0].description;

        // Display the information
        const dayElement = document.createElement("div");
        dayElement.textContent = `${day}: Average Temperature: ${averageTemp.toFixed(2)} °C, Weather: ${weatherDesc}`;
        element.appendChild(dayElement);
    });
}


apiFetch();

// JSON table
const url = 'data/data.json';
const tableContainer = document.getElementById('json-table');

async function generateRentalTable() {
    const displayRentalOptions = (options) => {
        // Create table, tbody, and header rows
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let headerRows = [
            '<tr><td colspan="6"><strong>Max Rental Pricing</strong></td></tr>',
            '<tr><td colspan="2"></td><td colspan="2"><strong>Reservation</strong></td><td colspan="2"><strong>Walk-In</strong></td></tr>',
            '<tr><td><strong>Rental Type</strong></td><td><strong>Max. Persons</strong></td><td><strong>Half Day<br>(3 hrs)</strong></td><td><strong>Full Day</strong></td><td><strong>Half Day<br>(3 hrs)</strong></td><td><strong>Full Day</strong></td></tr>'
        ];

        headerRows.forEach((row) => {
            tbody.innerHTML += row;
        });

        // Add the data rows
        options.forEach((option) => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${option.nombre}</td>
                <td>${option.maximodepersonas}</td>
                <td>${option.mediodia.precio}</td>
                <td>${option.fullday.precio}</td>
                <td>${option.mediodia.precio}</td>
                <td>${option.fullday.precio}</td>
            `;
            tbody.appendChild(row);
        });

        // Append the tbody to the table
        table.appendChild(tbody);

        // Append the table to the container
        tableContainer.appendChild(table);
    }

    const response = await fetch(url);
    const data = await response.json();
    displayRentalOptions(data.opcionesderenta);
}

generateRentalTable();


const cards = document.querySelector('#cards');
// JSON card
async function getCardData() {
    const displayCard = (opcionesderenta) => {
        opcionesderenta.forEach((vehicle) => {
            // Create elements to add to the div.cards element
            let card = document.createElement('section');
            let name = document.createElement('h3');
            let vehicleImage = document.createElement('img');

            // Build the h2 content out to show the vehicle name
            name.textContent = `${vehicle.nombre}`;

            // Build the image portrait by setting all the relevant attributes
            vehicleImage.setAttribute('src', vehicle.imageurl);
            vehicleImage.setAttribute('alt', `image of ${vehicle.nombre}`);
            vehicleImage.setAttribute('loading', 'lazy');
            vehicleImage.setAttribute('width', '500');
            vehicleImage.setAttribute('height', 'auto');

            // Append the section(card) with the created elements
            card.appendChild(name);
            card.appendChild(vehicleImage);

            cards.appendChild(card);
        }); // end of arrow function and forEach loop
    }
    const response = await fetch(url);
    const data = await response.json();
    displayCard(data.opcionesderenta);
    console.log(data);
}

getCardData();

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
