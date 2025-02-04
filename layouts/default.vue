<template>
    <div class="wrapper">
        <header-layout />
        <slot />
    </div>
</template>

<script setup lang="ts">
import headerLayout from './header-layout.vue';

const weatherStore = useWeatherStore();
weatherStore.fetchWeather();
</script>