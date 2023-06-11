<template>
    <HeaderNav />
    <main>
      <AboutUs />
      <LearnMoreFeature />
      <FooterImgBanner />
      <!-- <FoodTable :food-items="foodItems" id="meny"/> -->
      <BookRoom :rooms="rooms" id="boende" />
      <BookLocal />
    </main>
    <footer />
</template>

<script setup>
import LearnMoreFeature from '@/features/LearnMoreSection/LearnMoreFeature.vue'
import FoodTable from '@/features/FoodTable/FoodTable.vue'
import AboutUs from '@/components/AboutUs.vue'
import HeaderNav from '@/features/HeaderNav/HeaderNav.vue'
import BookRoom from '@/features/BookRoom/BookRoom.vue'
import FooterImgBanner from '@/components/FooterImgBanner.vue'
import BookLocal from '../components/BookLocal.vue'

defineProps({
  foodItems: Array,
  rooms: Array,
})

</script>

<style lang="scss">
  footer {
    background-color: #c64533;
    width: 100%;
    height: 30rem;
  }
</style>