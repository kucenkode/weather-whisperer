import http from '../http-common';

const APIKey = useRuntimeConfig().private.weatherAPIkey;

export default {
    // Получение местоположения пользователя
    async getUserIP () {
        try {
            return await $fetch<IPData>('https://ipwho.is/');
        } catch (error) {
            console.error('Error getting user IP:', error);
            throw new Error(`Can't get your IP address :(`);
        }
    },

    // Получение текущей погоды и на 3 дня
    async getWeatherData (city: string) {
        try {
            return await http<WeatherData>(`/forecast.json?key=${APIKey}&q=${city}&days=3`)
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw new Error('Weather data is unavailable :(');
        }
    }
}
