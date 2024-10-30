import { getWeather } from './weather.js';

function displayWeatherData(data) {
    const locationElement = document.getElementById('cityName');
    const temperatureElement = document.getElementById('temperature');
    const feelsLikeElement = document.getElementById('feelsLike');
    const humidityElement = document.getElementById('humidity');
    const windSpeedElement = document.getElementById('windSpeed');

    locationElement.textContent = data.location.name;
    temperatureElement.textContent = `${data.current.temp_c}°C`;
    feelsLikeElement.textContent = `Feels Like: ${data.current.feelslike_c}°C`;
    humidityElement.textContent = `Humidity: ${data.current.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
}

function setupEventListeners() {
    const form = document.getElementById('weatherForm');
    const celsiusBtn = document.getElementById('celsiusBtn');
    const fahrenheitBtn = document.getElementById('fahrenheitBtn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value;
        const result = await getWeather(city);

        if (result) {
            displayWeatherData(result);
        } 

        cityInput.value = '';
    });

    celsiusBtn.addEventListener('click', () => {
        if (!celsiusBtn.classList.contains('selected')) {
            celsiusBtn.classList.add('selected');
            fahrenheitBtn.classList.remove('selected');

            // The match method in JavaScript is used to search a string for a match against a regular expression. 
            // It returns an array of matches if 'g' flag is set.
            // If 'g' flag is not set, it returns an array containing the first match at 0th pos 
            // and additional information, such as the index of the match at 1st pos and the input string at 2nd pos.
            // It returns null if no match is found.
            const temp = document.getElementById('temperature').textContent.match(/[-]?\d+(\.\d+)?/);
            const feelsLike = document.getElementById('feelsLike').textContent.match(/[-]?\d+(\.\d+)?/);

            if (temp) {
                const celsiusTemp = (temp[0] - 32) * 5/9;
                document.getElementById('temperature').textContent = `${celsiusTemp.toFixed(1)}°C`;
            }

            if (feelsLike) {
                const celsiusFeelsLike = (feelsLike[0] - 32) * 5/9;
                document.getElementById('feelsLike').textContent = `Feels Like: ${celsiusFeelsLike.toFixed(1)}°C`;
            }
        }
    });

    fahrenheitBtn.addEventListener('click', () => {
        if (!fahrenheitBtn.classList.contains('selected')) {
            fahrenheitBtn.classList.add('selected');
            celsiusBtn.classList.remove('selected');

            const temp = document.getElementById('temperature').textContent.match(/[-]?\d+(\.\d+)?/);
            const feelsLike = document.getElementById('feelsLike').textContent.match(/[-]?\d+(\.\d+)?/);

            if (temp) {
                const fahrenheitTemp = (temp[0] * 9/5) + 32;
                document.getElementById('temperature').textContent = `${fahrenheitTemp.toFixed(1)}°F`;
            }

            if (feelsLike) {
                const fahrenheitFeelsLike = (feelsLike[0] * 9/5) + 32;
                document.getElementById('feelsLike').textContent = `Feels Like: ${fahrenheitFeelsLike.toFixed(1)}°F`;
            }
        }
    });
}

export { setupEventListeners, displayWeatherData };