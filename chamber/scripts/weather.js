const apiKey = "942cb3e734cbba69ea8a179cac8e553d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Argentina"; // Siempre utiliza "Argentina" como la ciudad

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const description = document.getElementById("weather-description");

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = "Argentina";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const descriptionWords = data.weather[0].description.split(' ');
    const capitalizedDesc = descriptionWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    description.innerHTML = `<p>${capitalizedDesc}</p>`;

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.webp";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.webp";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.webp";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.webp";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.webp";
    }
}

// Call checkWeather after the window has fully loaded
window.addEventListener('load', checkWeather);