<template>
    <header class="header">
        <div class="content-wrapper">
            <address class="header__location" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                <img src="/public/weather-icons/location.svg" alt="Location: ">
                <section itemprop="location" itemscope itemtype="http://schema.org/Place">
                    <span itemprop="addressLocality"> {{ weather.city }}, </span>
                    <span itemprop="addressCountry"> {{ weather.country }} </span>
                </section>
            </address>
        </div>
    </header>
</template>

<script setup lang="ts">
const weatherStore = useWeatherStore();

const weather = ref({
    city: weatherStore.weatherData.location.name,
    country: weatherStore.weatherData.location.country
});
</script>