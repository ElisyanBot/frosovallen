<template> 
    <HeaderNav />
    <main>
      <h2 class="event__header"> Kommande händelser </h2>
      <section class="timeline">
        <TimelineEventCard
          v-for="( item, index ) in events"
          :key="index"
          :item="item"
          :reverse-card="index % 2 === 0 ? false : true"
        />
      </section>
    </main>
    <FooterImgBanner />
    <footer />
</template>

<script setup>
  import { ref, onMounted } from 'vue';
 import HeaderNav from '@/features/HeaderNav/HeaderNav.vue';
 import FooterImgBanner from '@/components/FooterImgBanner.vue';
  import TimelineEventCard from '@/components/TimelineEventCard.vue';
 import { Events } from '@/data/Events.js';

 const events = ref(Events);
 
</script>

<style scoped lang="scss">
    main {
        min-height: 100vh;
        margin: auto;
        display: flex;
        flex-direction: column;

        width: 100%;
        max-width: 163rem;
    }
    .event__header {
        font-size: 4.2rem;
        text-transform: uppercase;
        color : #c64533;
        font-weight: 700;
        margin: 8rem auto;
        padding: 0;
    }

    @media screen and (max-width: 800px){
      .event__header {
        font-size: 2.2rem;
      }
    }
</style>