<template> 
  <div class="mobile-menu">
    <div class="logo-container">
      <picture> 
        <img src="/img/logo.svg" />
      </picture>
      <button @click="() => showMenu = true">
      <FontAwesomeIcon :icon="['fas', 'bars']" />
      </button>
    </div>
    <div v-if="showMenu" class="mobile-menu__background"> 
      <button class="mobile-menu__close-btn" @click=" () => showMenu = false">
        x 
      </button>

      <ul class="mobile-menu__list">
        <RouterLink :to="{name: 'home'}" class="mobile-menu__item">
          <a href="/" @click="() => showMenu = false"> start </a>
        </RouterLink>
        <RouterLink :to="{name: 'home', hash: '#boende'}" class="mobile-menu__item">
          <a href="/" @click="() => showMenu = false"> vandrarhem </a>
        </RouterLink>
        <RouterLink :to="{name: 'events'}" class="mobile-menu__item">
          <a href="/events"  @click="() => showMenu = false"> kalender </a>
        </RouterLink>
        <li class="mobile-menu__item">
          <a 
            href="https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI" 
            target="_blank"
          > 
            hitta hit 
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const showMenu = ref(false);
</script>

<style lang="scss">
.mobile-menu {
  display: none;
}

@media screen and (max-width: 1100px) {
 .mobile-menu {
    display: flex;
    width: 100%;
    justify-content: center;
    max-height: 100px;
 } 
  .logo-container { 
    padding-top: 1rem;
    position: relative;
    width: 75%;
    display: flex;
    justify-content: flex-end;
    
    picture {
      position: absolute;
      border-radius: 50%;
      background-color: white;
      width: 20rem;
      height: 20rem;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      

      img {
        width: 100%;
      }
    }

    button {
      padding: 1rem;
      background-color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 3rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.256);
    }

  }

  .mobile-menu__background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200000;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 4rem;

    .mobile-menu__close-btn {
     align-self: flex-end;
     margin: 0 10% 0 0; 
     font-size: 2rem;
     text-align: end;
     padding: 1rem 2.5rem;
     width: 80%;
     background-color: white;
     border: none;
     border-bottom: 1px solid rgba(169, 169, 169, 0.577);
     cursor: pointer;
    }

    .mobile-menu__list {
      background-color: white;
      width: 80%;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      .mobile-menu__item {
        list-style: none;
        width: inherit;
        height: 50px;
  
        a {
          text-decoration: none;
          color: black;
          width: 100%;
          height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  } 
}

@media screen and (max-width: 450px) {
  .mobile-menu {
    .logo-container {
      picture {
        width: 15rem;
        height: 15rem;
      }
    }
  }
}
</style>