import './style.css';
import { setupEventListeners, displayWeatherData } from './modules/dom';
import { getWeather } from './modules/weather';

async function loadMumbaiWeather() {
    const result = await getWeather('Mumbai');
    if (result) {
        displayWeatherData(result);
    }
}

setupEventListeners();
loadMumbaiWeather();