import { ref } from 'vue';
import WeatherDataService from './services/WeatherDataService';

export default defineEventHandler(async (event) => {
    const weatherData = await WeatherDataService.getWeatherData()

    return {
        weatherData
    }
});
