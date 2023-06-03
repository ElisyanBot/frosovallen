<template>
  <section class="book-cta">
    <picture>
      <img src="/img/boka-boende.png" />
    </picture>
    <div class="book-cta__green-background" />
    <div class="book-cta__text-container">
      <h2> bo på frösövallen </h2>
      <h3> vandrarhem </h3>
      <button @click="$emit('bookRoomAction')"> boka rum här </button>
    </div>
  </section>
</template>

<script setup>
defineEmits(['bookRoomAction'])
</script>

<style scoped lang="scss">
    section.book-cta {
        position: relative;
        display: flex;
        height: 75rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

       picture {
           width: 100%;
           height: inherit;
           background-color: lightgray;

           img {
               width: 100%;
               height: inherit;
               object-fit: cover;
           }
       }
        .book-cta__green-background {
              width: 100%;
               max-width: 77rem;
              height: inherit;
              background-color: #1C4E46;
       }
        .book-cta__text-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            z-index: 2;
            background-color: #f2f2f2;
            width: 100%;
            max-width: 127.2rem;
            height: 43rem;
           h2 {
               font-size: 5.8rem;
               color: #1C4E46;
               text-transform: uppercase;

           }
        h3 {
            color: #bdbba4;
            font-size: 4.8rem;
            text-transform: uppercase;
            font-weight: normal;
            margin-bottom: 5rem;
           }
        }
        button {
            width: 100%;
            max-width: 75rem;
            height: 10rem;
            border: 4px solid #1C4E46;
            color: #1C4E46;
            font-size: 4rem;
            font-weight: bold;
            text-transform: uppercase;
            cursor: pointer;
        }
    }

  @media screen and (max-width: 500px) {
    section.book-cta {
      height: 50rem;
      .book-cta__green-background {
        display: none;
      }
    
      .book-cta__text-container {
        height: 30rem;
        max-width: 36rem;
        margin: 0 4rem;
        h2 {
         font-size: 2.5rem;
        }
        h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
      }   
      button {
        max-width: 30rem;
        font-size: 2rem;
        height: 8rem;
      }
    }
  }
</style>
