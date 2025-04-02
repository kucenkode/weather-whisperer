<template>
    <div class="wrapper">
        <header-layout />
        <slot />
    </div>
</template>

<script setup lang="ts">
import headerLayout from './header-layout.vue';

const weatherStore = useWeatherStore();

const fetchWeather = async () => {
    const { data: response } = await useFetch('/api/useAPI');
    weatherStore.weatherData = response.value;
};

fetchWeather();
</script>