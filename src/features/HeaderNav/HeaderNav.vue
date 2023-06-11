<template>
  <picture class="main-header__img">
    <img src="/img/main-header__img.jpg" alt="" />
  </picture>
  <MainWidthLayout>
    <header class="header-nav">
      <ul class="header-nav__desktop-menu-row">
        <NavItem text="start" go-to="/" />
        <NavItem text="vandrarhem" go-to="/" toHash="#boende"/>
      </ul>
      <div class="header-nav__logo">
        <img src="/img/logo.svg" alt="logo" @click="() => router.push({name: 'home'})" />
      </div>
      <ul class="header-nav__desktop-menu-row">
        <NavItem text="kalender" go-to="/events" />
        <NavLinkItem 
          target="_blank" 
          text="hitta hit" 
          a-link="https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI"
        />
      </ul>
    </header>
  </MainWidthLayout>
  <MobileMenu />
</template>

<script setup>
import MobileMenu from '../../components/MobileMenu.vue';
import MainWidthLayout from '../../layouts/MainWidthLayout.vue'
import NavItem from './components/NavItem.vue'
import NavLinkItem from './components/NavLinkItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<style lang="scss">
  .main-header__img {
    background-color: #040410;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80rem;
    img {
      width: 100%;
      max-width: 192.5rem;
      height: 80rem;
      object-fit: cover;
    }
  }
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: visible;
    width: 100%;
  }
  .header-nav__logo {
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23rem;
    height: 22rem;
    border-radius: 50%;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
    position: absolute;
    z-index: 10000;
    left: 0;
    right: 0;
    top: -8rem;
    margin: 0 auto;
  }
  .header-nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22rem;
    height: 5rem;
    list-style: none;
    margin: 5rem 0;
    font-size: 2.4rem;
    font-weight: bold;
    text-transform: uppercase;
    a {
      color: inherit;
      text-decoration: none;
    }

    &:hover {
      cursor: pointer;

      a {
        text-decoration: underline;
      }
    }
  }

  .header-nav__desktop-menu-row {
    display: flex;
    justify-content: space-between;
    height: inherit;
  }
  

  @media screen and (max-width: 1300px) {
   .main-header__img {
      img {
        object-fit: cover;
      }
    }
  } 
  
  @media screen and (max-width: 1100px) {
    .header-nav {
      display: none;
    } 

  }
</style>
