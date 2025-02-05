<template>
    <article class="forecast-current-info content-wrapper" itemscope itemtype="http://schema.org/WeatherForecast">
        <section class="forecast-current-info__temperature-info" itemscope itemtype="http://schema.org/WeatherObservation">
            <span class="forecast-current-info__temperature" itemprop="mainEntity" itemscope itemtype="http://schema.org/QuantitativeValue">
                <span itemprop="value"> {{ weather.temp_c }}° </span>
                <meta itemprop="unitText" content="Celsius" />
            </span>
            <span class="forecast-current-info__feels-like" itemscope itemtype="http://schema.org/QuantitativeValue">
                <span itemprop="value"> Feels like {{ weather.feelslike }}° </span>
                <meta itemprop="unitText" content="Celsius" />
            </span>
            <span class="forecast-current-info__description" itemprop="description"> {{ weather.weather_description }} </span>
        </section>
    </article>
    <div class="forecast-for-the-week__wrapper">
        <div class="forecast-for-the-week content-wrapper">
            <div class="forecast-for-the-week__current-information">
                <address class="current-information__location" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                    <span itemprop="addressLocality"> {{ weather.city }} </span>
                    <span itemprop="addressCountry"> {{ weather.country }} </span>
                </address>
                <section class="current-information__forecast-details" itemscope itemtype="http://schema.org/WeatherObservation">
                    <p class="forecast-details__item" itemscope itemtype="http://schema.org/QuantitativeValue">
                        <img class="item__icon" src="/public/weather-icons/weather-details/sunrise.svg" alt="Sunrise:"> 
                        <time itemprop="sunrise"> {{ weather.sunrise }} </time> 
                    </p>
                    <p class="forecast-details__item" itemscope itemtype="http://schema.org/QuantitativeValue">
                        <img class="item__icon" src="/public/weather-icons/weather-details/sunset.svg" alt="Sunset:"> 
                        <time itemprop="sunset"> {{ weather.sunset }} </time>
                    </p>
                    <p class="forecast-details__item" itemscope itemtype="http://schema.org/QuantitativeValue">
                        <img class="item__icon" src="/public/weather-icons/weather-details/water-drop.svg" alt="Humidity:"> 
                        <span itemprop="humidity" itemscope itemtype="http://schema.org/QuantitativeValue">
                            <span itemprop="value"> {{ weather.humidity }} % </span>
                            <meta itemprop="unitText" content="percentage" />
                        </span>
                    </p>
                    <p class="forecast-details__item" itemscope itemtype="http://schema.org/QuantitativeValue">
                        <img class="item__icon" src="/public/weather-icons/weather-details/wind.svg" alt="Wind:"> 
                        <span itemprop="windSpeed" itemscope itemtype="http://schema.org/QuantitativeValue">
                            <span itemprop="value"> {{ weather.wind_speed }} km/h </span>
                            <meta itemprop="unitText" content="kilometers per hour"/>
                        </span>
                    </p>
                </section>
            </div>
            <section class="forecast-for-the-week__daily-forecast"></section>
        </div>
    </div>
</template>

<script setup lang="ts">
const weatherStore = useWeatherStore();

const weather = ref({
    temp_c: Math.round(weatherStore.weatherData.current.temp_c),
    weather_description: weatherStore.weatherData.current.condition.text,
    feelslike: weatherStore.weatherData.current.feelslike_c,
    sunrise: weatherStore.weatherData.forecast.forecastday[0].astro.sunrise,
    sunset: weatherStore.weatherData.forecast.forecastday[0].astro.sunset,
    wind_speed: weatherStore.weatherData.current.wind_mph,
    humidity: weatherStore.weatherData.current.humidity,
    weather_icon: weatherStore.weatherData.current.condition.icon,
    city: weatherStore.weatherData.location.name,
    country: weatherStore.weatherData.location.country,
});
</script>

<style lang="scss">
@use './assets/app.scss';
</style>
