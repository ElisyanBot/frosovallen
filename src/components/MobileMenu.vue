<template> 
  <div class="mobile-menu">
    <div class="logo-container">
      <picture> 
        <img src="/img/logo.svg" />
      </picture>
      <button @click="() => showMenu = true">
       <i class="fa-solid fa-bars"/> 
      </button>
    </div>
    <div v-if="showMenu" class="mobile-menu__background"> 
      <button class="mobile-menu__close-btn" @click=" () => showMenu = false">
        x 
      </button>

      <ul class="mobile-menu__list">
        <li class="mobile-menu__item">
          <a href="/"> cafe </a>
        </li>
        <li class="mobile-menu__item">
          <a href="/events"> evenemang </a>
        </li>
        <li class="mobile-menu__item">
          <a href="#" target="_blank"> hitta hit </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
    width: 80%;
    display: flex;
    justify-content: flex-end;
    
    picture {
      position: absolute;
      background-color: white;
      width: 10rem;
      height: 10rem;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;

      img {

      }
    }

    button {
      padding: 1.5rem;
      background-color: white;
      border: none;
      cursor: pointer;
      font-size: 3rem;
       
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
</style>