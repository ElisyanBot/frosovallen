<template> 
    <HeaderNav />
    <main>
      <h2 class="event__header"> Kommande händelser </h2>
      <div class="event__filter">
        <button  :class="{'selected': checkFilter('alla') }" @click="removeFilter"> Alla </button>
        <button 
          :class="{'selected': checkFilter('juni') }"
          @click="() => {
            selectedFilter = 'juni';
            filterByMonth('06')
          }"
          > 
          Juni 
        </button>
        <button 
          :class="{'selected': checkFilter('juli') }"    
          @click="() => {
            selectedFilter = 'juli';
            filterByMonth('07')
          }"
          > 
          Juli 
          </button>
        <button 
          :class="{'selected': checkFilter('augusti')}" 
          @click="() => {
            selectedFilter = 'augusti';
            filterByMonth('08');
          }"
        >
          Augusti 
        </button> 
      </div>
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
  import { ref } from 'vue';
 import HeaderNav from '@/features/HeaderNav/HeaderNav.vue';
 import FooterImgBanner from '@/components/FooterImgBanner.vue';
  import TimelineEventCard from '@/components/TimelineEventCard.vue';
 import { Events } from '@/data/Events.js';
import moment from 'moment';

 const events = ref(Events);
 const selectedFilter = ref('alla');
 const checkFilter = (month) => {
   if (selectedFilter.value.includes(month)) {
     return true;
   }
   return false;
  }

  const filterByMonth = (month) => {
    events.value = Events.filter((event) => {
      return moment(event.date).format('MM') === month;
    });
  };

  const removeFilter = () => {
    selectedFilter.value = 'alla';
    events.value = Events;
  };
 
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
        margin-bottom: 2rem;
        padding: 0;
    }

    .event__filter {
      display: flex;
      justify-content: center;
      gap: 4rem;
      width: calc(100% - 4rem);
      margin: auto;
      margin-bottom: 6rem;

      button {
        background: none;
        border: none;
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        color: rgb(165, 156, 133);
        cursor: pointer;
      }

      button.selected {
        color: #c64533;
        color: #c64533;

      }
    }

    @media screen and (max-width: 800px){
      .event__header {
        font-size: 2.2rem;
      }
      .event__filter {
      display: flex;
      justify-content: center;
      gap: 2rem;
      width: calc(100% - 4rem);
      margin: auto;
      margin-bottom: 6rem;

      button {
        background: none;
        border: none;
        font-size: 1.6rem;
        font-weight: 600;
        text-transform: uppercase;
        color: rgb(165, 156, 133);
        cursor: pointer;
      }

      button.selected {
        color: #c64533;
      }
    }
    }

    @media screen and (max-width: 500px) {
      
    }
</style>