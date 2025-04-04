<template>
    <main class="main-wrapper">
        <div class="forecast-current-info content-wrapper">
            <div class="forecast-current-info__temperature-info">
                <section class="forecast-current-info__details forecast-details">
                    <span class="forecast-current-info__temperature"> {{ currentWeather.temp_c }}° </span>
                    <address class="forecast-current-info__location" itemscope itemtype="https://schema.org/PostalAddress">
                        <span itemprop="addressLocality"> {{ currentWeather.city }}, </span>
                        <span itemprop="addressCountry"> {{ currentWeather.country }} </span>
                    </address>
                </section>
            </div>
        </div>
        <div class="forecast-for-the-week__wrapper">
            <div class="forecast-for-the-week content-wrapper">
                <div class="forecast-for-the-week__current-information">
                    <section class="current-information__forecast-details forecast-details">
                        <p class="forecast-details__item">
                            <img class="item__icon" src="/public/weather-icons/weather-details/sunrise.svg" alt="Sunrise:">
                            <time :datetime="currentWeather.sunrise"> {{ currentWeather.sunrise }} </time>
                        </p>
                        <p class="forecast-details__item">
                            <img class="item__icon" src="/public/weather-icons/weather-details/sunset.svg" alt="Sunset:">
                            <time :datetime="currentWeather.sunset"> {{ currentWeather.sunset }} </time>
                        </p>
                        <p class="forecast-details__item">
                            <img class="item__icon" src="/public/weather-icons/weather-details/humidity.svg" alt="Humidity:">
                            <span> {{ currentWeather.humidity }} % </span>
                        </p>
                        <p class="forecast-details__item">
                            <img class="item__icon" src="/public/weather-icons/weather-details/wind.svg" alt="Wind:">
                            <span> {{ currentWeather.wind_speed }} km/h </span>
                        </p>
                    </section>
                </div>
                <div class="scroll-wrapper">
                    <section class="forecast-for-the-week__daily-forecast">
                        <article class="daily-forecast__today-forecast">
                            <div class="today-forecast__weather-data">
                                <div class="weather-data__visual">
                                    <img :src="currentWeather.icon" class="visual__icon" alt="Weather icon">
                                    <span class="visual__description"> {{ currentWeather.weather_description }} </span>
                                </div>
                               
                                <section class="weather-data__information">
                                    <h3 class="information__date"> TODAY </h3>
                                    <span class="information__temperature"> warmest: {{ currentWeather.maximum_temperature }} </span>
                                    <span class="information__temperature"> coldest: {{ currentWeather.minimum_temperature }} </span>
                                    <span class="information__temperature"> average: {{ currentWeather.average_temperature }} </span>
                                </section>
                            </div>
                        </article>
                        <article v-for="(day, index) in weatherForTheWeek" :key="index" class="daily-forecast__item">
                            <h3 class="item__date"> {{ dayOfTheWeek(new Date(day.date)) }} </h3>
                            <div class="item__weather-data">
                                <img :src="day.day.condition.icon" class="weather-data__icon" alt="Weather icon">
                                <section class="weather-data__information">
                                    <span class="information__description"> {{ day.day.condition.text }} </span>
                                    <span class="information__temperature"> warmest: {{ day.day.maxtemp_c }} </span>
                                    <span class="information__temperature"> coldest: {{ day.day.mintemp_c }} </span>
                                </section>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const weatherStore = useWeatherStore();

const days = ref(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']);
const dayOfTheWeek = (date: Date) => {
    return days.value[date.getDate()];
};

const currentWeather = ref({
    temp_c: Math.round(weatherStore.weatherData.current.temp_c),
    maximum_temperature: weatherStore.weatherData.forecast.forecastday[0].day.maxtemp_c,
    minimum_temperature: weatherStore.weatherData.forecast.forecastday[0].day.mintemp_c,
    average_temperature: weatherStore.weatherData.forecast.forecastday[0].day.avgtemp_c,
    weather_description: weatherStore.weatherData.current.condition.text,
    feelslike: weatherStore.weatherData.current.feelslike_c,
    sunrise: weatherStore.weatherData.forecast.forecastday[0].astro.sunrise,
    sunset: weatherStore.weatherData.forecast.forecastday[0].astro.sunset,
    wind_speed: weatherStore.weatherData.current.wind_mph,
    humidity: weatherStore.weatherData.current.humidity,
    weather_icon: weatherStore.weatherData.current.condition.icon,
    city: weatherStore.weatherData.location.name,
    country: weatherStore.weatherData.location.country,
    day_of_the_week: dayOfTheWeek(new Date(weatherStore.weatherData.forecast.forecastday[0].date)),
    icon: weatherStore.weatherData.forecast.forecastday[0].day.condition.icon
});
const weatherForTheWeek = ref(weatherStore.weatherData.forecast.forecastday.filter((day, index) => index !== 0));
</script>

<style lang="scss">
@use './assets/app.scss';
</style>