const apiKey = "942cb3e734cbba69ea8a179cac8e553d";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Argentina"; // Cambiado a pronóstico del tiempo

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const description = document.getElementById("weather-description");
const forecastContainer = document.querySelector(".forecast");

// Agregar referencias a los div específicos
const mondayForecast = document.querySelector(".monday-forecast");
const tuesdayForecast = document.querySelector(".tuesday-forecast");
const wednesdayForecast = document.querySelector(".wednesday-forecast");

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    // Mostrar información actual
    document.querySelector(".city").innerHTML = "Argentina";
    document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " km/h";

    const descriptionWords = data.list[0].weather[0].description.split(' ');
    const capitalizedDesc = descriptionWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    description.innerHTML = `<p>${capitalizedDesc}</p>`;

    // Mostrar icono según el clima actual
    setWeatherIcon(data.list[0].weather[0].main);

    // Mostrar pronóstico para los próximos tres días en los div específicos
    displayForecast(mondayForecast, data.list[1]);
    displayForecast(tuesdayForecast, data.list[2]);
    displayForecast(wednesdayForecast, data.list[3]);
}

function setWeatherIcon(weatherMain) {
    if (weatherMain == "Clouds") {
        weatherIcon.src = "images/clouds.webp";
    } else if (weatherMain == "Clear") {
        weatherIcon.src = "images/clear.webp";
    } else if (weatherMain == "Rain") {
        weatherIcon.src = "images/rain.webp";
    } else if (weatherMain == "Drizzle") {
        weatherIcon.src = "images/drizzle.webp";
    } else if (weatherMain == "Mist") {
        weatherIcon.src = "images/mist.webp";
    }
}

function displayForecast(forecastContainer, day) {
    const date = new Date(day.dt * 1000);
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    const descriptionWords = day.weather[0].description.split(' ');
    const capitalizedDesc = descriptionWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    forecastContainer.innerHTML = `
        <span id="day-of-week-movile">${dayOfWeek}</span>
        <span>${Math.round(day.main.temp)}°C - ${capitalizedDesc}</span>
    `;
}


// Llamar a checkWeather después de que la ventana se haya cargado completamente
window.addEventListener('load', checkWeather);
