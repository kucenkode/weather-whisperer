<template>
    <div class="wrapper">
        <article class="forecast-current-info content-wrapper" itemscope itemtype="http://schema.org/WeatherForecast"> 
            <p class="forecast-current-info__temperature" itemtype="http://schema.org/QuantitativeValue">
                <span itemprop="temperature"> {{ weatherData.temp_c }}℃ </span>
            </p>
            <p class="forecast-current-info__location" itemprop="location" itemscope itemtype="http://schema.org/Place">
                <span itemprop="addressLocality"> {{ weatherData.city }}, </span>
                <span itemprop="addressCountry"> {{ weatherData.country }} </span>
            </p>
        </article>
        <div class="forecast-for-the-week">
            <section class="forecast-for-the-week__items content-wrapper"></section>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: response } = await useFetch('/api/useAPI');

const weatherData = ref({
    temp_c: Math.round(response.value?.weatherData.current.temp_c),
    city: response.value?.weatherData.location.name,
    country: response.value?.weatherData.location.country
})
</script>

<style lang="scss">
@use './assets/app.scss';
</style>
