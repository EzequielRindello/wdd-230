// select HTML elements in the document
const weatherInfo = document.getElementById('weather-info');

// crear las variables con mi KEY
const apiKey = "942cb3e734cbba69ea8a179cac8e553d";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Argentina&appid=${apiKey}`;

// realizamon una solicitud a una API utilizando el metodo fetch
async function apiFetch() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultsStretch(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// agrega una funcion para mostrar los resultados Stretch en la interfaz de usuario
function displayResultsStretch(data) {
    // format temperature to show zero decimal points
    const formattedTemp = `${data.main.temp.toFixed(0)}°C`;

    // set weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // capitalize each word in the weather description
    const desc = data.weather[0].description.split(' ');
    const capitalizedDesc = desc.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // update weather info span
    weatherInfo.innerHTML = `<div id="weather-info-container"><img src="${iconsrc}" alt="Weather Icon"> <p>${formattedTemp} - ${capitalizedDesc}</p></div>`;
}

apiFetch();
