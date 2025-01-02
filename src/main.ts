import './style.css';
import { setupEventListeners, displayWeatherData, WeatherData } from './modules/dom';
import { getWeather } from './modules/weather';

async function loadMumbaiWeather() {
    const result = await getWeather('Mumbai');
    if (result) {
        displayWeatherData(result as WeatherData);
    }
}

setupEventListeners();
loadMumbaiWeather();    