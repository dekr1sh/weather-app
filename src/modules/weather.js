export async function getWeather(city) {
    const apiKey = '478390f9838b4a9b8dc185756240603'; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url, {mode: 'cors'});
        
        if (!response.ok) {
            throw new Error(`City '${city}' not found`);
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        alert(error);
        return null;
    }
}