<template>
  <article class="room-card">
    <picture>
      <img v-if="room.image" :src="room.image.src" alt="room image" />
    </picture>
    <div class="text">
      <h3> {{ room.title }} </h3>
      <p> {{ room.beds }} </p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  room: Object,
})
</script>

<style scoped lang="scss">
    .room-card {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50rem;
        width: 100%;
        max-width: 40rem;
        background-color: white;
        border-radius: 0.5rem;
        filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.44));

        picture {
            background-color: black;
            width: 100%;
            height: 37.8rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

       .text{
           height:  12.2rem;
           width: 100%;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           gap: 1rem;


           h3 {
              text-transform: uppercase;
              font-size: 2.4rem;
              font-weight: bold;
              color: #464535;
           }

           p {
               color: #1C4E46;
               &::after {
                   content: ' SÄNGAR'

               }
           }
       }
    }
</style>
