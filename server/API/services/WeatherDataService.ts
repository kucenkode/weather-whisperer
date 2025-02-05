import http from '../http-common';

export default {
    // Получение местоположения пользователя
    async getUserIP () {
        try {
            return await $fetch<IPData>('https://ipwho.is/')
        } catch (error) {
            console.error('Error getting user IP:', error);
            throw new Error(`Can't get your IP address :(`);
        }
    },

    // Получение текущей погоды
    async getWeatherData () {
        try {
            const { city } = await this.getUserIP();
            return await http.instance<WeatherData>(`/forecast.json?key=${http.APIkey}&q=${city}`);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw new Error('Weather data is unavailable :(');
        }
    }
}
