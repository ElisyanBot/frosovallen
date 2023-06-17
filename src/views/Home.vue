<template>
    <HeaderNav />
    <main>
      <AboutUs />
      <LearnMoreFeature />
      <!-- <FooterImgBanner /> -->
      <FoodTable :food-items="foodItems" id="meny"/>
      <BookRoom :rooms="rooms" id="boende" />
      <BookLocal />
    </main>
    <Footer />
</template>

<script setup>
import LearnMoreFeature from '@/features/LearnMoreSection/LearnMoreFeature.vue'
import FoodTable from '@/features/FoodTable/FoodTable.vue'
import AboutUs from '@/components/AboutUs.vue'
import HeaderNav from '@/features/HeaderNav/HeaderNav.vue'
import BookRoom from '@/features/BookRoom/BookRoom.vue'
import Footer from '@/components/Footer.vue';
import BookLocal from '../components/BookLocal.vue'
import { ref } from 'vue'

import { Menu } from '../data/Menu.js'

defineProps({
  foodItems: Array,
  rooms: Array,
})

const foodItems = ref(Menu);


</script>