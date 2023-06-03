<template>
  <div :class="{ 'food-item': true, 'food-item--disabled': outOfStock }">
    <picture>
      <div v-if="outOfStock" class="food-item__picture--disabled">
        <p>slutsåld</p>
      </div>
      <img :src="imgSrc" alt="food item picture" />
    </picture>
    <div class="food-item__text-block">
      <h5>
        {{ headerTxt }}
      </h5>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  imgSrc: {
    type: String,
  },
  headerTxt: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  outOfStock: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<style lang="scss">
  .food-item {
    display: flex;
    align-items: center;
    gap: 2rem;
      background-color: #f2f2f2;
      color: #f2f2f2;
    width: 100%;

      max-width: 55.5rem;
      height: 17.5rem;
      overflow: hidden;

    picture {
      overflow: hidden;
      height: inherit;
      width: 100%;
      max-width: 17.5rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
    }
  }
  .food-item__text-block {
    height: 15rem;
    display: flex;
    flex-direction: column;
      width: 100%;
    gap: 1.2rem;

    h5 {
      color: #5a7d69;
      font-size: 2.2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    p {
      font-size: 1.8rem;
        color: #040410;
    }
  }
  .food-item--disabled {
    picture {
      position: relative;

      img {
        opacity: 1;
      }
    }
    .food-item__text-block {
      opacity: 0.4;
    }
  }

  .food-item__picture--disabled {
    background-color: rgba(47, 47, 47, 0.83);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    p {
      display: block;
      padding: 1rem;
      color: #c64533;
      font-weight: bold;
      font-size: 1.8rem;
      text-align: center;
      text-transform: uppercase;
      border: 2px solid #c64533;
      border-radius: 0.5rem;
    }
  }


  @media screen and (max-width: 500px) {
  .food-item {
    height: 14rem;
    picture {
        max-width: 12rem;
    }
  }
  .food-item__text-block {
    height: 10rem;
    h5 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  .food-item--disabled {
    picture {

      img {
      }
    }
    .food-item__text-block {
    }
  }

  .food-item__picture--disabled {
    p {
      padding: 0.5rem;
      font-size: 1.4rem;
    }
  }

  }
</style>
