import WeatherDataService from './services/WeatherDataService';

export default defineEventHandler(async (event) => {
    const { city } = await WeatherDataService.getUserIP();
    const currentWeatherData = await WeatherDataService.getWeatherData(city);

    return currentWeatherData
});
