<template>
  <section class="room-cards">
    <div class="card-container">
      <!-- <RoomCard v-for="room in pagination(rooms, startIndex, endIndex)" :key="room.id" :room="room" /> -->
    </div>
    <!-- <div class="pagination">
      <span
        v-for="(num, index) in pages"
        :class="{'pagination__dot': true, 'pagination__dot--selected': index === selectedPage }"
        @click="() => {
          changePage(index);
          selectedPage = index;
        }"
      />
    </div> -->
  </section>
</template>

<script setup>
// import RoomCard from './RoomCard.vue'
// import {computed, ref} from 'vue'

// const props = defineProps({
//   rooms: Array,
// })

// const itemsPerPage = ref(3)
// const startIndex = ref(0)
// const endIndex = ref(itemsPerPage.value)
// const selectedPage = ref(0)

// const pages = computed( () => {
//   return Math.ceil(props.rooms.length/itemsPerPage.value)
// })

// const changePage = (index) => {
//   if(index === 0 ) {
//     startIndex.value = 0
//     endIndex.value = itemsPerPage.value
//     return
//   }

//   startIndex.value = index * itemsPerPage.value
//   endIndex.value = startIndex.value + itemsPerPage.value
// }

// const resetPagination = () => {
//   startIndex.value = 0
//   endIndex.value = itemsPerPage.value
//   selectedPage.value = 0
// }


// const pagination = (array, start, end) => {
//   if(start < 0 || start > array.length || end < start) return

//   return array.slice(start, end)
// }
</script>

<style scoped lang="scss">
   .room-cards {
       width: 121.3rem;
       position: absolute;
       left: -60rem;
       bottom: 2rem;
       margin-left: 100%;
       z-index: 2;

       .card-container {
           width: 100%;
           display: flex;
           gap: 3rem;
       }
   }
   .pagination {
       margin-top: 5rem;
       width: 50%;
       display: flex;
       align-items: center;
       gap: 1rem;

       .pagination__dot {
           content: '';
           width: 2rem;
           height: 2rem;
           border: 1px solid black;
           border-radius: 50%;

           &:hover {
               cursor: pointer;
           }
       }

       .pagination__dot--selected {
           background: #1C4E46;
           border: 1px solid #1C4E46;
       }
   }
</style>
