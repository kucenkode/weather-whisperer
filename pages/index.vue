<template>
    <article class="forecast-current-info content-wrapper" itemscope itemtype="http://schema.org/WeatherForecast">
        <div class="forecast-current-info__temperature-info">
            <p class="forecast-current-info__temperature" itemprop="mainEntity" itemscope itemtype="http://schema.org/QuantitativeValue">
                <span itemprop="value"> {{ weather.temp_c }}℃ </span> 
                <meta itemprop="unitText" content="Celsius" />
            </p>
            <section class="forecast-current-info__forecast-details" itemscope itemtype="http://schema.org/QuantitativeValue">
                <span> Feels like: <span itemprop="feelsLike"> {{ weather.feelslike }} </span> ℃ </span>
                <span> Wind speed: <span itemprop="windSpeed"> {{ weather.wind_speed }} </span> km/h </span>
                <span> Humidity: <span itemprop="humidity"> {{ weather.humidity }} </span> % </span>
            </section>
        </div>
    </article>
    <div class="forecast-for-the-week">
        <section class="forecast-for-the-week__items content-wrapper">
            <div class="items__today-forecast" itemscope itemtype="http://schema.org/Forecast">
                <img :src="weather.weather_icon" alt="Weather icon for {{ weatherData.weather_description }}" class="today-forecast__icon" />
                <section class="today-forecast__forecast-details">
                    <h2> TODAY </h2>
                    <p itemprop="description"> {{ weather.weather_description }} </p>
                </section>
            </div>
            <section class="items__daily-forecast"></section>
        </section>
    </div>
</template>


<script setup lang="ts">
const weatherStore = useWeatherStore();

const weather = ref({
    temp_c: Math.round(weatherStore.weatherData.current.temp_c),
    weather_description: weatherStore.weatherData.current.condition.text,
    feelslike: weatherStore.weatherData.current.feelslike_c,
    wind_speed: weatherStore.weatherData.current.wind_mph,
    humidity: weatherStore.weatherData.current.humidity,
    weather_icon: weatherStore.weatherData.current.condition.icon
});
</script>

<style lang="scss">
@use './assets/app.scss';
</style>
