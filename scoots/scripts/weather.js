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