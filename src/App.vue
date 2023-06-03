<template>
    <Home />
    <router-view />
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import Home from '@/views/Home.vue';
</script>